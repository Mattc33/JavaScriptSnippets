// ! https://www.youtube.com/watch?v=10b6K9fORI4

class Car {

    constructor(color, price) {
        Object.assign(this, {color, price});
    }

    static comparePrice(car1, car2) {
        return Math.abs(car1.price - car2.price);
    }

    getColor() {
        return this.color;
    }
}

// const newCar = new Car(); // * create an instance of the class Car.
// // * creating an isntance of a class basically means hey you have a class defined as Car right? 
// // * well now I want to use it so I create a new Car in order to use it.
// // * Class is like the blueprint plans, an instance is the actual Car

// newCar.getColor();
// Car.comparePrice();

// // * static method goes inside its class, not a prototype
// // * what the hell is a prototype?

const redCar = new Car('red', 100); // * populating the values, initial values for constructor
const blueCar = new Car('blue', 102);

console.log(redCar.getColor());
console.log(Car.comparePrice(redCar, blueCar));







