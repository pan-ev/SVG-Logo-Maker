const inquirer = require("inquirer");
const fs = require("fs");
const genLogo = require("./lib/generateLogo.js");
const genShape = require("./lib/shapes.js");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Please enter your logo text (3 char)",
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

function writeToFile(fileName, data) {
  var svgShape;
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

function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("logo.svg", data);
  });
}

init();
