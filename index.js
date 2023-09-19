//include packages needed for this application

const inquirer = require('inquirer');
const fs = require("fs");
const generateSVG = require("./examples");

//create an array of questions for user input

const questions = [
  {
    type: "input",
    message: "Please enter three characters.",
    name: "chars"
  },

  {
    type: "input",
    message: "Please enter either a color keyword or a hexadecimal number.",
    name: "color"
  },

  {
    type: "list",
    message: "Please pick a shape.",
    choices: [
      "Circle",
      "Square",
      "Triangle",
    ],
    name: "shapes"
  },

  {
    type: "input",
    message: "Please enter either a color keyword or a hexidecimal number for your shape.",
    name: "shapeColor"
  },


]