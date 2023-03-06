// Import the necessary classes to test
const { Square, Triangle, Circle } = require("./shapes");

// Describe the test cases for the Circle class
describe("Circle", () => {
  // Test case 1
  test("should render svg for a green circle element", () => {
  // Set Up
    const circle = new Circle("hello world", "green", "circle", "black")
  // Execute
  console.log(circle.render())
  expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">hello world</text></svg>`)
  // Verify

 
  });
  // Test case 2
  test("should accept a fillColor param", () => {
  // Set Up

  // Execute

  // Verify

  });

});

// Describe the test cases for the Triangle class
describe("Triangle", () => {
  // Test case 1
  test("should render svg for a green polygon element", () => {
  // Set Up

  // Execute

  // Verify
 
  });
  // Test case 2
  test("should accept a fillColor param", () => {
  // Set Up

  // Execute

  // Verify

  });
  
});


// Describe the test cases for the Square class
describe("Square", () => {
    // Test case 1
    test("should render svg for a green polygon element", () => {
      // Set up
     
      // Execute

      // Verify

    });
  
    // Test case 2
    test("should accept a fillColor param", () => {
      // Set up
     
      // Execute
 
      // Verify

    });
  });