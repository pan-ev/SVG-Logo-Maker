const inquirer = require("inquirer");
const fs = require("fs");

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
  }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, genMarkdown.generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log("Generated logo.svg")
  );
}

function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("logo.svg", data);
  });
}

init();
