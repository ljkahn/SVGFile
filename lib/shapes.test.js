const { Circle, Triangle, Square } = require('./shapes.js');


describe('Circle', () => {
  it('should render a circle shape', () => {
    //arrange 
    const shapeColor = 'blue';
    const textColor = 'white';
    const text = 'svg';
    const testTemp = `<svg width="300" height="200"><circle cx="150" cy="100" r="80" fill="${shapeColor}"/><text x="148" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;


    const shapeCirc = new Circle(text, textColor, shapeColor);

    expect(shapeCirc.render()).toEqual(testTemp);
  })
})

describe('Square', () => {
  it('should render a square shape', () => {
    //arrange 
    const shapeColor = 'blue';
    const textColor = 'white';
    const text = 'svg';
    const testTemp = `<svg width="300" height="200"><rect width="150" height="150" x='70' fill='${shapeColor}'/><text x="144" y="94" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;



    const shapeSquare = new Square(text, textColor, shapeColor);

    expect(shapeSquare.render()).toEqual(testTemp);
  })
})

describe('Triangle', () => {
  it('should render a trianagle shape', () => {
    //arrange 
    const shapeColor = 'blue';
    const textColor = 'white';
    const text = 'svg';
    const testTemp = `<svg width='300' height='200'><polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" /><text x="149" y="165" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;



    const shapeTriangle = new Triangle(text, textColor, shapeColor);

    expect(shapeTriangle.render()).toEqual(testTemp);
  });
})