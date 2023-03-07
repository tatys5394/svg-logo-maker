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
});

// Describe the test cases for the Triangle class
describe("Triangle", () => {
  // Test case 1
  test("should render svg for a green triangle element", () => {
  // Set Up
    const triangle = new Triangle("hello world", "green", "triangle", "black")
  // Execute
  console.log(triangle.render())
  expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><triangle points="150, 18 244, 182 56, 182" fill="green" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="black">hello world</text></svg>`)
  // Verify
 
  });
});


// Describe the test cases for the Square class
describe("Square", () => {
    // Test case 1
    test("should render svg for a green polygon element", () => {
      // Set up
     const square = new Square ("hello world", "green", "square", "black");
      // Execute
    console.log(square.render())
    expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><square x="90" y="40" width="120" height="120" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">hello world</text></svg>`)
      // Verify

    });
  });