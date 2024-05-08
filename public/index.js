import { recipeAll, recipeId, login, register } from "./api.js";
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

// Global root element for rendering

const root = document.getElementById("root");

// Templates

const actionContainerTmpl = require("../templates/action-container.hbs");
const searchContainerTmpl = require("../templates/search-container.hbs");
const recipeListTmlp = require("../templates/recipe-list.hbs");
const recipeTmpl = require("../templates/recipe.hbs");
const loginFormTmpl = require("../templates/login-form.hbs");

// App config

const config = {
  RECIPES_PER_PAGE: 10,
};

// App state info

const state = {
  currentPage: 0,
  totalPages: 0,
  searchQuery: "",
  loggedId: false,
  username: "Guest",
};

// App main windows render

function renderMain() {
  root.innerHTML = "";
  renderActionBar();
  renderSearch();
  renderList();
}

function renderRecipe(recipeData) {
  root.innerHTML = "";
  if (recipeData.steps.length === 0) {
    console.error("Cannot render recipe with zero steps");
    return;
  }
  renderStep(recipeData.steps, 0);
}

function renderAddRecipe() {
  root.innerHTML = "";
}

function renderLoginForm() {
  root.innerHTML = "";
}

// Per component render functions

function renderActionBar() {
  root.insertAdjacentHTML(
    "beforeend",
    actionContainerTmpl({ username: state.username }),
  );

  // Callback for buttons
  const loginButton = root.querySelector(".button-login");
  loginButton.addEventListener("click", loginButtonCallback());

  const registerButton = root.querySelector(".button-register");
  registerButton.addEventListener("click", registerButtonCallback());

  const addButton = root.querySelector(".button-add");
  addButton.addEventListener("click", addButtonCallback());

  updateActionBar();
}

function renderSearch() {
  root.insertAdjacentHTML(
    "beforeend",
    searchContainerTmpl({
      value: state.searchQuery,
    }),
  );

  // Callback for search action
  const searchBar = root.querySelector(".searchbar");
  searchBar.addEventListener("change", searchCallback(searchBar));

  // Prev button
  const prevButton = root.querySelector(".button-prev-list");
  prevButton.addEventListener(
    "click",
    paginationButtonCallback(state.currentPage, -1),
  );

  // Next button
  const nextButton = root.querySelector(".button-next-list");
  nextButton.addEventListener(
    "click",
    paginationButtonCallback(state.currentPage, +1),
  );
}

function renderList() {
  recipeAll(
    config.RECIPES_PER_PAGE,
    state.currentPage * config.RECIPES_PER_PAGE,
    state.searchQuery,
  )
    .then(recipeListReceived)
    .catch((error) => {
      console.error(`Something went wrong fetching recipes, ${error}`);
    });
}

// Callbacks and subfunctions

function searchCallback(searchbar) {
  return (e) => {
    let searchQuery = searchbar.value;
    console.log(`Running search callback, query: ${searchQuery}`);
    state.searchQuery = searchQuery;
    renderMain();
  };
}

function paginationButtonCallback(currentPage, stride) {
  return (e) => {
    console.log(
      `Running pagination, currentPage: ${currentPage} stride ${stride}`,
    );
    if (currentPage + stride >= 0 && currentPage + stride < state.totalPages) {
      currentPage += stride;
    }

    renderList();
  };
}

function recipeListReceived(recipeListData) {
  console.log(
    `Running recipe list received callback, total: ${recipeListData.total}`,
  );
  state.totalPages = Math.ceil(recipeListData.total / config.RECIPES_PER_PAGE);
  root.insertAdjacentHTML("beforeend", recipeListTmlp(recipeListData));

  // Callback for each recipe click
  const recipeElements = root.querySelectorAll(".recipe-container");
  recipeElements.forEach((element) => {
    element.addEventListener("click", recipeClickCallback(element));
  });

  updatePaginationButtons();
}

function recipeClickCallback(element) {
  return (e) => {
    console.log(`Running recipe click callback on recipe: ${element}`);
    const id = element.getAttribute("data-id");
    recipeId(id)
      .then(renderRecipe)
      .catch((error) => {
        console.error(`Something went wrong fetching recipe #${id}, ${error}`);
      });
  };
}

function updatePaginationButtons() {
  const prevButton = root.querySelector(".button-prev-list");
  if (state.currentPage === 0) {
    prevButton.disabled = true;
  }
  const nextButton = root.querySelector(".button-next-list");
  if (state.currentPage === state.totalPages - 1) {
    nextButton.disabled = true;
  }
}

function renderStep(steps, stepId) {
  console.log(`Running step ${stepId} rendering`);
  root.innerHTML = "";
  root.innerHTML = recipeTmpl(steps[stepId]);

  // Setup timer
  const timerText = root.querySelector(".timer");
  let elapsed = steps[stepId].duration;
  let timer = setInterval(
    timerCallback(steps, timerText, elapsed, stepId),
    1000,
  );
  let deltaSec = 2; // Potential timer error fix
  setTimeout(
    () => {
      clearInterval(timer);
    },
    (steps[stepId].duration + deltaSec) * 1000,
  );

  // Prev step button
  const prevButton = root.querySelector(".button-previous");
  if (stepId === 0) {
    prevButton.disabled = true;
  }
  prevButton.addEventListener(
    "click",
    stepButtonCallback(-1, steps, stepId, timer),
  );

  // Pause button
  const pauseButton = root.querySelector(".button-pause");
  pauseButton.addEventListener("click", pauseButtonCallback(timer, timerText));

  // Next step button
  const nextButton = root.querySelector(".button-next");
  if (stepId === steps.length - 1) {
    nextButton.disabled = true;
  }
  nextButton.addEventListener(
    "click",
    stepButtonCallback(1, steps, stepId, timer),
  );

  // Exit button
  const exitButton = root.querySelector(".button-exit");
  exitButton.addEventListener("click", exitButtonCallback(timer));
}

function timerCallback(steps, timerText, elapsed, stepId) {
  return () => {
    console.log(`Running timer callback, step id: ${stepId}`);
    timerText.innerHTML = setToTimeString(elapsed);
    if (elapsed === 0 && stepId != steps.length - 1) {
      renderStep(steps, stepId + 1);
    }
    --elapsed;
  };
}

function stepButtonCallback(stride, steps, stepId, timer) {
  return (e) => {
    console.log(`Running step change button callback for step: ${stepId}`);
    clearInterval(timer);
    renderStep(steps, stepId + stride);
  };
}

function pauseButtonCallback(timer, timerText) {
  return (e) => {
    console.log("Running pause button callback");
    clearInterval(timer);
    timerText.innerHTML = "Cook as you feel";
  };
}

function exitButtonCallback(timer) {
  return (e) => {
    console.log("Running exit button callback");
    clearInterval(timer);
    renderMain();
  };
}

function loginButtonCallback() {
  return (e) => {};
}

function registerButtonCallback() {
  return (e) => {};
}

function addButtonCallback() {
  return (e) => {};
}

function updateActionBar() {
  const loginButton = root.querySelector(".button-login");
  const registerButton = root.querySelector(".button-register");
  const addButton = root.querySelector(".button-add");
  const userLabel = root.querySelector(".username");

  if (state.loggedId) {
    loginButton.disabled = true;
    registerButton.disabled = true;
    addButton.disabled = false;
    userLabel.innerHTML = state.username;
  } else {
    loginButton.disabled = false;
    registerButton.disabled = false;
    addButton.disabled = true;
    userLabel.innerHTML = "Guest";
  }
}

//Entry point
renderMain();
