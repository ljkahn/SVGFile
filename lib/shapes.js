
//create parent class called shapes


class Shape {
  constructorr(text, textColor, background) {
    this.text = text;
    this.color = textColor;
    this.background = background;
  }
}

// create child classes that inherit properties from parent class
class Square extends Shape {
  constructor(text, textColor, background) {
    super(text, textColor, background);
  }
}

class Triangle {
  constructor(text, textColor, background) {
    super(text, textColor, background);
  }
}

class Circle {
  constructor(text, textColor, background) {
    super(text, textColor, background);
  }
}


function renderLetters(chars) {

}

