//include packages needed for this application

const inquirer = require('inquirer');
const fs = require("fs");
const shapes = require("./lib/shapes.js");

//create an array of questions for user input

const questions = [
  {
    type: "input",
    message: "Please enter three characters.",
    name: "text"
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
    name: "background"
  },


];


//create function to render SVG
function writeToFile(fileName, data) {
  const mySVG = generateSVG(data)
  fs.writeFile(fileName, mySVG, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg.")
  })
}

//create function to render SVG

function renderSVG(fileName, { text, textColor, background, shape }) {
  //create new variable called logo and set it equal to the value of a new object created from shape and its properties
  const logo = new Shape(textColor, background, text)

  fs.writeFile(fileName, logo(render), (err) => {
    err ? console.error(err) : console.log('Generated logo.svg');
  })

}


//create function to initialize app
function init() {
  //inquirer prompt for questions
  inquirer.prompt(questions)
    .then((data) => {
      //validation that it doesnt accept more than 3 characters
      if (data.text.length > 3) {
        return console.error("You must use a maximum of three characters. Please try again.");

      };

      renderSVG('logo.svg', data)
    })
}




//function call to initialize app
init();