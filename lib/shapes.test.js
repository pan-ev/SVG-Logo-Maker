const svgShape = require('./shapes.js')

describe('Shape', () => {
    describe('triangle', () => {
        it('should return the svg string to generate a triangle with the corresponding color', () => {
            const shape = new svgShape.Triangle();
            shape.setColor = "blue";
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    }),
    describe('circle', () => {
        it('should return the svg string to generate a circle with the corresponding color', () => {
            const shape = new svgShape.Circle();
            shape.setColor = "green";
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
        })
    }),
    describe('square', () => {
        it('should return the svg string to generate a square with the corresponding color', () => {
            const shape = new svgShape.Square();
            shape.setColor = "red";
            expect(shape.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="red" />');
        })
    })
})