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
      "Square",
      "Triangle",
    ],
    name: "shape"
  },

  {
    type: "input",
    message: "Please enter either a color keyword or a hexidecimal number for your shape.",
    name: "background"
  },


];

//create function to render SVG

function renderSVG({ text, textColor, background, shape }) {
  //create new variable called logo and set it equal to the value of a new object created from shape and its properties
  console.log(text, textColor, background);
  const logo = new shapes[shape](text, textColor, background)

  fs.writeFile('./examples/logo.svg', logo.render(), (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Generated logo.svg')
    }
  })
};



//create function to initialize app
function init() {
  //inquirer prompt for questions
  inquirer.prompt(questions)
    .then((data) => {
      //validation that it doesnt accept more than 3 characters
      if (data.text.length > 3) {
        return console.error("You must use a maximum of three characters. Please try again.");

      };

      renderSVG(data)
    })
}




//function call to initialize app
init();