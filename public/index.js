import { hi } from "./util.js";

const root = document.getElementById("root");

const myTemplate = require("../templates/dogs.hbs");

hi();

const pets = {
  pets: [
    {
      name: "A",
      species: "B",
      favFoods: "C",
      birthYear: 1,
      photo: "https://adefe.xyz/avatar.png",
    },
    {
      name: "A",
      species: "B",
      favFoods: "C",
      birthYear: 1,
      photo: "https://adefe.xyz/avatar.png",
    },
    {
      name: "A",
      species: "B",
      favFoods: "C",
      birthYear: 1,
      photo: "https://adefe.xyz/avatar.png",
    },
    {
      name: "A",
      species: "B",
      favFoods: "C",
      birthYear: 1,
      photo: "https://adefe.xyz/avatar.png",
    },
  ],
};

root.innerHTML = myTemplate(pets);
