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
const credentialsFormTmpl = require("../templates/credentials-container.hbs");
const addRecipeTmpl = require("../templates/add-recipe.hbs");
const addRecipeStepTmpl = require("../templates/add-recipe-step.hbs");

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
  username: "Anonymous User",
};

// App main windows render

function renderMain() {
  root.innerHTML = "";
  checkCookieLogin();
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
  root.insertAdjacentHTML("beforeend", addRecipeTmpl());

  const addStepButton = root.querySelector(".button-add-step");
  addStepButton.addEventListener("click", addStepCallback());

  const addRecipeButton = root.querySelector(".button-add-recipe");
  addRecipeButton.addEventListener("click", addRecipeCallback());
}

function renderLoginForm() {
  root.innerHTML = "";
  root.insertAdjacentHTML(
    "beforeend",
    credentialsFormTmpl({
      action: "Login",
      info: "Log into your account to add recipes",
      action_button_text: "login",
    }),
  );

  let inputLogin = root.querySelector(".login");
  let inputPassword = root.querySelector(".password");
  let textInfo = root.querySelector(".text-info");

  let submitButton = root.querySelector(".button-submit");
  submitButton.addEventListener(
    "click",
    loginCallback(inputLogin, inputPassword, textInfo),
  );
}

function renderRegisterForm() {
  root.innerHTML = "";
  root.insertAdjacentHTML(
    "beforeend",
    credentialsFormTmpl({
      action: "Register",
      info: "Create an account to be able to add recipes",
      action_button_text: "register",
    }),
  );

  let inputLogin = root.querySelector(".login");
  let inputPassword = root.querySelector(".password");
  let textInfo = root.querySelector(".text-info");

  let submitButton = root.querySelector(".button-submit");
  submitButton.addEventListener(
    "click",
    registerCallback(inputLogin, inputPassword, textInfo),
  );
}

// Per component render functions

function renderActionBar() {
  root.insertAdjacentHTML(
    "beforeend",
    actionContainerTmpl({ username: state.username }),
  );

  // Callback for buttons
  const loginButton = root.querySelector(".button-login");
  loginButton.addEventListener("click", renderLoginForm);

  const registerButton = root.querySelector(".button-register");
  registerButton.addEventListener("click", renderRegisterForm);

  const addButton = root.querySelector(".button-add");
  addButton.addEventListener("click", renderAddRecipe);

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

function loginCallback(userlogin, userpassword, textInfo) {
  return (e) => {
    login(userlogin.value, userpassword.value).then((status) => {
      if (status === 200) {
        console.log("Login success");
        renderMain();
      } else {
        console.log("Login fail");
        textInfo.innerHTML = "Login data is incorrect!";
      }
    });
  };
}

function registerCallback(userlogin, userpassword, textInfo) {
  return (e) => {
    register(userlogin.value, userpassword.value).then((status) => {
      if (status === 200) {
        console.log("Register success");
        renderMain();
      } else {
        console.log("Register fail");
        textInfo.innerHTML = "Register data is incorrect or login is taken!";
      }
    });
  };
}

function checkCookieLogin() {
  console.log("cookies:", document.cookie);
  let parsedCookie = {};
  document.cookie.split(";").forEach((el) => {
    let [k, v] = el.split("=");
    parsedCookie[k.trim()] = v;
  });
  console.log("Parsed cookie", parsedCookie);
  if (parsedCookie["blueberry-user"]) {
    console.log("Keep logged in, user:", parsedCookie["blueberry-user"]);
    state.loggedId = true;
    state.username = parsedCookie["blueberry-user"];
  } else {
    console.log("Not logged in");
  }
}

function addStepCallback() {
  return (e) => {
    const stepContainer = root.querySelector(".recipe-step-storage");
    stepContainer.insertAdjacentHTML("beforeend", addRecipeStepTmpl());
  };
}

function addRecipeCallback() {
  return (e) => {
    const recipeName = root.querySelector(".recipe-name").value;
    const recipeDescription = root.querySelector(".recipe-description").value;
    const recipeImageUrl = root.querySelector(".recipe-image-url").value;
    console.log(
      "Collected general data",
      recipeName,
      recipeDescription,
      recipeImageUrl,
    );

    const stepNames = root.querySelectorAll(".step-name").map((element) => {
      return element.value;
    });
    const stepDescriptions = root
      .querySelectorAll(".step-description")
      .map((element) => {
        return element.value;
      });
    const stepImageUrls = root
      .querySelectorAll(".step-image-url")
      .map((element) => {
        return element.value;
      });
    console.log("Collected step data", stepNames, stepDescriptions, stepImageUrls);
  };
}

//Entry point
renderMain();
