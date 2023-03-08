// Import the required modules and classes

// Import inquirer module to get user input.
const inquirer = require("inquirer");
// Import Circle, Triangle, and Square classes to create shape objects.
const { Circle, Triangle, Square } = require("./shapes");
// Import writeFile function from fs/promises module to write data to a file.
const {writeFile} = require("fs/promises");
const fs = require("fs");

// Define a CLI class that has a run method.
class CLI {
  run() {
    return inquirer
      .prompt([
        {
          name: "text",
          type: "input",
          message:
            "Enter text for the logo. (Must not be more than 3 characters)",
        },
        {
          name: "textColor",
          type: "input",
          message: "Enter the text color",
        },
        {
          name: "shapeType",
          type: "list",
          message: "Select a shape for the logo",
          choices: ["circle", "square", "triangle"],
        },
        {
          name: "shapeColor",
          type: "input",
          message: "Enter a shape color",
        },
      ])
      .then(({ text, textColor, shapeType, shapeColor }) => {
        if (shapeType == "circle") {
          fs.writeFileSync(
            `logo.svg`,
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`
          );
        } else if (shapeType == "square") {
          fs.writeFileSync(
            `logo.svg`,
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="${shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`
          );
        } else {
          fs.writeFileSync(
            `logo.svg`,
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</svg>`
          );
        }

        // Create a shape object based on the user input for the shape type using a switch statement
        // let [Circle, Triangle, Square];
        // switch (shapeType) {
        //   case "circle":
        //     break;

        //   case "square":
        //         break;

        //   case "triangle":
        //     break;

        //   default:
        //     console.log('The shape you chose is not circle, square, or triangle.');
        //     break;
        // }
      })
      .then(() => {
        // Log a confirmation if the file is successfully written
        console.log("Generate logo.svg");
      })

      .catch((error) => {
        // Catch any errors that may occur during the process and log them to the console
        console.log(error);
      });
  }
}

// Export the CLI class.
module.exports = CLI;
