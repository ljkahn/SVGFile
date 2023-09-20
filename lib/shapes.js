
//create parent class called shapes


class Shape {
  constructorr(text, textColor, background) {
    this.text = text;
    this.textColor = textColor;
    this.background = background;
  }
}

// create child classes that inherit properties from parent class
class Circle extends Shape {
  constructor(text, textColor, background) {
    super(text, textColor, background);
  }

  render() {
    return `<svg width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.background}"/><text x="148" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
  }
}

class Square extends Shape {
  constructor(text, textColor, background) {
    super(text, textColor, background);
  }

  render() {
    return `<svg width="300" height="200"><rect width="150" height="150" x='70' fill='${this.background}'/><text x="144" y="94" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
  }
}

class Triangle extends Shape {
  constructor(text, textColor, background) {
    super(text, textColor, background);
  }

  render() {
    return `<svg width='300' height='200'><polygon points="150, 18 244, 182 56, 182" fill="${this.background}" /><text x="149" y="165" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
  }
}

//export object of shapes
module.exports = {
  Circle,
  Square,
  Triangle
}
