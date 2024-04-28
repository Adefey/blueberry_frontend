import { recipeAll, recipeId } from "./api.js";
import { setToTimeString } from "./sec_to_date.js";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../public/sw.js", { scope: "/" })
    .then((reg) => {
      console.log("Registered", reg);
    })
    .catch((reg) => {
      console.error("Not registered", reg);
    });
}

const root = document.getElementById("root");

const recipeListTmlp = require("../templates/recipe-list.hbs");
const recipeTmpl = require("../templates/recipe.hbs");

let currentStep = 0;
let lastSearchQuery = "";
let currentPage = 0;
let totalRecieps = 0;
let totalPages = 0;
const RECIPES_PER_PAGE = 10;

function renderRecipeList() {
  console.log("Getting data for search query:", lastSearchQuery);
  recipeAll(RECIPES_PER_PAGE, currentPage * RECIPES_PER_PAGE, lastSearchQuery)
    .then((recipeListData) => {
      console.log("Data received by main JS", recipeListData);
      totalRecieps = recipeListData.total;
      totalPages = Math.ceil(totalRecieps / RECIPES_PER_PAGE);
      console.log("Total recipes:", totalRecieps, "Total pages:", totalPages);

      root.innerHTML = recipeListTmlp(recipeListData);

      const prevButton = root.querySelector(".button-prev-list");
      if (currentPage === 0) {
        prevButton.disabled = true;
      } else {
        prevButton.addEventListener("click", () => {
          --currentPage;
          renderRecipeList();
        });
      }

      const nextButton = root.querySelector(".button-next-list");
      if (currentPage === totalPages - 1) {
        nextButton.disabled = true;
      } else {
        nextButton.addEventListener("click", () => {
          ++currentPage;
          renderRecipeList();
        });
      }

      const searchBar = root.querySelector(".searchbar");

      const searchButton = root.querySelector(".button-search");
      searchButton.addEventListener("click", () => {
        lastSearchQuery = searchBar.value;
        renderRecipeList();
      });

      const recipeListElements = root.querySelectorAll(".recipe-list-element");
      recipeListElements.forEach((element) => {
        element.addEventListener("click", (event) => {
          root.innerHTML = "";
          const id = element.getAttribute("data-id");
          recipeId(id).then((recipeData) => {
            console.log("Data received by main JS", recipeData);
            currentStep = 0;
            if (recipeData.length != 0) {
              renderStep(recipeData);
            } else {
              alert("Sorry, this recipe is not ready");
            }
          });
        });
      });
    })
    .catch((error) => {
      console.error("Something is broken...", error);
    });
}

function renderStep(data) {
  root.innerHTML = recipeTmpl(data.steps[currentStep]);

  const timerText = root.querySelector(".timer");

  let elapsed = data.steps[currentStep].duration;
  let timer = setInterval(() => {
    timerText.innerHTML = "Timer: " + setToTimeString(elapsed);
    if (elapsed === 0 && currentStep !== data.steps.length - 1) {
      ++currentStep;
      console.log("Next slide");
      renderStep(data);
    }
    --elapsed;
  }, 1000);

  setTimeout(
    () => {
      clearInterval(timer);
    },
    (data.steps[currentStep].duration + 2) * 1000,
  );

  const prevButton = root.querySelector(".button-previous");
  if (currentStep === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.addEventListener("click", (e) => {
      clearInterval(timer);
      --currentStep;
      renderStep(data);
    });
  }

  const pauseButton = root.querySelector(".button-pause");
  pauseButton.addEventListener("click", (e) => {
    clearInterval(timer);
    timerText.innerHTML = "Cook as you feel";
  });

  const nextButton = root.querySelector(".button-next");
  if (currentStep === data.steps.length - 1) {
    nextButton.disabled = true;
  } else {
    nextButton.addEventListener("click", (e) => {
      clearInterval(timer);
      ++currentStep;
      renderStep(data);
    });
  }

  const exitButton = root.querySelector(".button-exit");
  exitButton.addEventListener("click", (e) => {
    renderRecipeList();
  });
}

renderRecipeList();
