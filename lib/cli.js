// Import the required modules and classes

// Import inquirer module to get user input.
const inquirer = require("inquirer");
// Import SVG class to create SVG objects.
const SVG = require("./svg");
// Import Circle, Triangle, and Square classes to create shape objects.
const { Circle, Triangle, Square } = require("./shapes");
// Import writeFile function from fs/promises module to write data to a file.
const { writeFile } = require("fs/promises");

// Define a CLI class that has a run method.
class CLI {
  run() {
    return inquirer 
    .prompt([
      {
        name: "text",
        type: "input",
        message: "Enter text for the logo. (Must not be more than 3 characters)",
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
    // Create a shape object based on the user input for the shape type using a switch statement
    let shape;
    switch (shapeType) {
      case "circle":
        
        break;

      case "circle":
        
            break;
    
            case "circle":
        
        break;

    }
   
    
    // Create an SVG object

    // Set the text and text color of the SVG object to the shape object
    
    // Write the SVG object to a file named logo.svg" by using the write file function

    })
    .then(() => {
        // Log a confirmation if the file is succesfully written
        console.log("success")
    })
    .catch((error) => {
        // Catch any errors that may occur during the process and log them to the console
      console.log(error)
    });
  }
}
// Export the CLI class.
module.exports = CLI;
