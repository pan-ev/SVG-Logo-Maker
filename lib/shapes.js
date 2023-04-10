class Shape {
    constructor(selectedShape, setColor) {
        this.selectedShape = selectedShape;
        this.setColor = setColor;
    }
}

class Triangle extends Shape {
    constructor(selectedShape, setColor) {
        super(selectedShape, setColor)
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.setColor}" />`
    }
}

class Circle extends Shape {
    constructor(selectedShape, setColor) {
        super(selectedShape, setColor)
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.setColor}" />`
    }
}

class Square extends Shape {
    constructor(selectedShape, setColor) {
        super(selectedShape, setColor)
    }

    render() {
        return `<rect x="70" y="20" width="160" height="160" fill="${this.setColor}" />`
    }
}

module.exports = {
    Triangle,
    Circle,
    Square
}