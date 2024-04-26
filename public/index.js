import { recipeAll, recipeId } from "./api.js";

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

function renderRecipeList() {
  console.log("Getting data for search query:", lastSearchQuery);
  recipeAll(10, 0, lastSearchQuery)
    .then((recipeListData) => {
      console.log("Data received by main JS", recipeListData);
      root.innerHTML = recipeListTmlp(recipeListData);

      if (root) {
        root.innerHTML = recipeListTmlp(recipeListData);
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

  const prevButton = root.querySelector(".button-previous");
  if (currentStep === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.addEventListener("click", (e) => {
      --currentStep;
      renderStep(data);
    });
  }

  const pauseButton = root.querySelector(".button-pause");
  pauseButton.addEventListener("click", (e) => {
    console.log("Not implemented");
  });

  const nextButton = root.querySelector(".button-next");
  if (currentStep === data.steps.length - 1) {
    nextButtonButton.disabled = true;
  } else {
    nextButton.addEventListener("click", (e) => {
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
