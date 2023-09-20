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
    message: "Please enter your desired text color with either a color keyword or a hexadecimal number.",
    name: "textColor"
  },

  {
    type: "list",
    message: "Please pick a shape.",
    choices: [
      "Circle",
      "Rectangle",
      "Triangle",
    ],
    name: "shapes"
  },

  {
    type: "input",
    message: "Please enter either a color keyword or a hexidecimal number for your shape.",
    name: "shapeColor"
  },


];


//create function to render SVG
function writeToFile(fileName, data) {
  const mySVG = generateSVG(data)
  fs.writeFile(fileName, mySVG, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg.")
  })
}



//create function to initialize app
function init() {
  inquirer.createPromptModule(questions)
    .then((data) => {
      writeToFile("./output/logo.svg", data)
    })
}




//function call to initialize app
init();