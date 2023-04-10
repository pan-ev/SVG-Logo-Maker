const inquirer = require("inquirer");
const fs = require("fs");
const genShape = require("./lib/shapes.js");

// Add ability to set max length on inquirer prompt
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

// Inquirer questions
const questions = [
  {
    type: "maxlength-input",
    name: "text",
    message: "Please enter your logo text (3 char)",
    maxLength: 3
  },
  {
    type: "input",
    message: "Please enter your logo text color",
    name: "textColor",
  },
  {
    type: "list",
    message: "Please select your logo's shape",
    name: "shape",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    message: "Please enter your logo shape's color",
    name: "shapeColor",
  },
];

// Function to generate the SVG file
function writeToFile(fileName, data) {
  var svgShape;

//   Call applicable shape class based on which shape user selects
  if (data.shape == "triangle") {
    const shape = new genShape.Triangle(data.shape, data.shapeColor);
    svgShape = shape.render(data.shapeColor);
  } else if (data.shape == "circle") {
    const shape = new genShape.Circle(data.shape, data.shapeColor);
    svgShape = shape.render(data.shapeColor);
  } else if (data.shape == "square") {
    const shape = new genShape.Square(data.shape, data.shapeColor);
    svgShape = shape.render(data.shapeColor);
  }

//   Generate the SVG content based on user inputs
  var svgText = `<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">

${svgShape}
<text x="150" y="120" font-size="50" text-anchor="middle" fill="${
    data.textColor
  }">${data.text.toUpperCase()}</text>

</svg>`;

  fs.writeFile(fileName, svgText, (err) =>
    err ? console.log(err) : console.log("Generated logo.svg")
  );
}

// Run inquirer and write to file on initialization
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("logo.svg", data);
  });
}

init();
