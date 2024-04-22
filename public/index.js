import { recipeAll, recipeId } from "./api.js";

const root = document.getElementById("root");

const recipeListTmlp = require("../templates/recipe-list.hbs");
const recipeTmpl = require("../templates/recipe.hbs");

function renderRecipeList() {
  root.innerHTML = "";
  const data = recipeAll(1, 2, "3");
  if (root) {
    root.innerHTML = recipeListTmlp(data);
  }
  const recipeListElements = root.querySelectorAll(".recipe-list-element");
  recipeListElements.forEach((element) => {
    element.addEventListener("click", (event) => {
      const id = element.getAttribute("data-id");
      root.innerHTML = id;
    });
  });
}

renderRecipeList();
