class Shape {
    constructor(selectedShape, shapeColor) {
        this.selectedShape = selectedShape;
        this.shapeColor = shapeColor;
    }
}

class Triangle extends Shape {
    constructor(selectedShape, shapeColor) {
        super(selectedShape, shapeColor)
    }

    render(shapeColor) {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />`
    }
}

class Circle extends Shape {
    constructor(selectedShape, shapeColor) {
        super(selectedShape, shapeColor)
    }

    render(shapeColor) {
        return `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`
    }
}

class Square extends Shape {
    constructor(selectedShape, shapeColor) {
        super(selectedShape, shapeColor)
    }

    render(shapeColor) {
        return `<rect x="70" y="20" width="160" height="160" fill="${shapeColor}" />`
    }
}

module.exports = {
    Triangle,
    Circle,
    Square
}