class Shape {
  constructor(text, shapeColor, shapeType, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.shapeType = shapeType;
    this.textColor = textColor;
    // TODO: Initialize the shape class and any potential starting properties 
  } 
  
// TODO: Setup any needed methods for the Shape class
}


class Circle extends Shape {
  constructor (text, shapeColor, shapeType, textColor) {
    super(text, shapeColor, shapeType, textColor)
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><${this.shapeType} cx="150" cy="100" r="80" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
  }
}

class Triangle extends Shape {
  constructor (text, shapeColor, shapeType, textColor) {
    super(text, shapeColor, shapeType, textColor)
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><${this.shapeType} points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
  }
}

class Square extends Shape {
  constructor (text, shapeColor, shapeType, textColor) {
    super(text, shapeColor, shapeType, textColor)
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><${this.shapeType} x="90" y="40" width="120" height="120" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
  }
}

// Export the Circle, Triangle, and Square classes as an object.
module.exports = { Circle, Triangle, Square };