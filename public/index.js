import { recipeAll, recipeId } from "./api.js";

const root = document.getElementById("root");

const recipeListTmlp = require("../templates/recipe-list.hbs");
const recipeTmpl = require("../templates/recipe.hbs");

let currentStep = 0;

function renderRecipeList() {
  let recipeListData = recipeAll(10, 0, "");

  root.innerHTML = recipeListTmlp(recipeListData);

  if (root) {
    root.innerHTML = recipeListTmlp(recipeListData);
  }

  const searchBar = root.querySelector(".searchbar");

  const searchButton = root.querySelector(".button-search");
  searchButton.addEventListener("click", () => {
    renderRecipeList();
  });

  const recipeListElements = root.querySelectorAll(".recipe-list-element");
  recipeListElements.forEach((element) => {
    element.addEventListener("click", (event) => {
      root.innerHTML = "";
      const id = element.getAttribute("data-id");
      const recipeData = recipeId(id);
      currentStep = 0;
      renderStep(recipeData);
    });
  });
}

function renderStep(data) {
  root.innerHTML = recipeTmpl(data.steps[currentStep]);

  const prevButton = root.querySelector(".button-previous");
  prevButton.addEventListener("click", (e) => {
    if (currentStep > 0) {
      --currentStep;
    }
    renderStep(data);
  });

  const pauseButton = root.querySelector(".button-pause");
  pauseButton.addEventListener("click", (e) => {
    console.log("Not implemented");
  });

  const nextButton = root.querySelector(".button-next");
  nextButton.addEventListener("click", (e) => {
    if (currentStep < data.steps.length - 1) {
      ++currentStep;
    }
    renderStep(data);
  });

  const exitButton = root.querySelector(".button-exit");
  exitButton.addEventListener("click", (e) => {
    renderRecipeList();
  });
}

renderRecipeList();
