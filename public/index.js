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
const searchContainerTmpl = require("../templates/search-container.hbs");
const recipeListTmlp = require("../templates/recipe-list.hbs");
const recipeTmpl = require("../templates/recipe.hbs");
const RECIPES_PER_PAGE = 10;

let stateVariables = {
  recipeListData: {},
  currentRecipeData: {},
  lastSearchQuery: "",
  currentStep: 0,
  currentPage: 0,
  totalReciepes: 0,
  totalPages: 0,
};

function renderRecipeList() {
  root.innerHTML = "";

  // Render searchbar
  root.innerHTML += searchContainerTmpl({
    value: stateVariables.lastSearchQuery,
  });
  console.log("Search is rendered");

  // Render recipe list
  recipeAll(
    RECIPES_PER_PAGE,
    stateVariables.currentPage * RECIPES_PER_PAGE,
    stateVariables.lastSearchQuery,
  )
    .then((recipeListData) => {
      console.log("Data received by main JS", recipeListData);
      stateVariables.recipeListData = recipeListData;
      stateVariables.totalRecipes = recipeListData.total;
      stateVariables.totalPages = Math.ceil(
        stateVariables.totalRecipes / RECIPES_PER_PAGE,
      );
      console.log(
        "Total recipes:",
        stateVariables.totalRecipes,
        "Total pages:",
        stateVariables.totalPages,
      );

      root.innerHTML += recipeListTmlp(stateVariables.recipeListData);

      const prevButton = root.querySelector(".button-prev-list");
      if (stateVariables.currentPage === 0) {
        prevButton.disabled = true;
      } else {
        prevButton.addEventListener("click", () => {
          --stateVariables.currentPage;
          renderRecipeList();
        });
      }

      const nextButton = root.querySelector(".button-next-list");
      if (stateVariables.currentPage === stateVariables.totalPages - 1) {
        nextButton.disabled = true;
      } else {
        nextButton.addEventListener("click", () => {
          ++stateVariables.currentPage;
          renderRecipeList();
        });
      }

      const searchBar = root.querySelector(".searchbar");

      const searchButton = root.querySelector(".button-search");
      searchButton.addEventListener("click", () => {
        stateVariables.lastSearchQuery = searchBar.value;
        renderRecipeList();
      });

      const recipeListElements = root.querySelectorAll(".recipe-container");
      recipeListElements.forEach((element) => {
        element.addEventListener("click", (event) => {
          root.innerHTML = "";
          const id = element.getAttribute("data-id");
          recipeId(id).then((recipeData) => {
            console.log("Data received by main JS", recipeData);
            stateVariables.currentStep = 0;
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
  root.innerHTML = recipeTmpl(data.steps[stateVariables.currentStep]);

  const timerText = root.querySelector(".timer");

  let elapsed = data.steps[stateVariables.currentStep].duration;
  let timer = setInterval(() => {
    timerText.innerHTML = "Timer: " + setToTimeString(elapsed);
    if (elapsed === 0 && stateVariables.currentStep !== data.steps.length - 1) {
      ++stateVariables.currentStep;
      console.log("Next slide");
      renderStep(data);
    }
    --elapsed;
  }, 1000);

  setTimeout(
    () => {
      clearInterval(timer);
    },
    (data.steps[stateVariables.currentStep].duration + 2) * 1000,
  );

  const prevButton = root.querySelector(".button-previous");
  if (stateVariables.currentStep === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.addEventListener("click", (e) => {
      clearInterval(timer);
      --stateVariables.currentStep;
      renderStep(data);
    });
  }

  const pauseButton = root.querySelector(".button-pause");
  pauseButton.addEventListener("click", (e) => {
    clearInterval(timer);
    timerText.innerHTML = "Cook as you feel";
  });

  const nextButton = root.querySelector(".button-next");
  if (stateVariables.currentStep === data.steps.length - 1) {
    nextButton.disabled = true;
  } else {
    nextButton.addEventListener("click", (e) => {
      clearInterval(timer);
      ++stateVariables.currentStep;
      renderStep(data);
    });
  }

  const exitButton = root.querySelector(".button-exit");
  exitButton.addEventListener("click", (e) => {
    renderRecipeList();
  });
}

renderRecipeList();
