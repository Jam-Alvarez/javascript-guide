
// let's create an array of objects

    class Car {

        constructor(name, year, color) {
            this._name = name;
            this._year = year;
            this.color = color;
        }

        drive() {
            console.log(`You're currently driving ${this._name}`);
        }
    }

    const carOne = new Car("Corvette", 2024, "Orange");
    const carTwo = new Car("Mustang", 2024, "White");
    const carThree = new Car("Lamborghini", 2024, "Black");

    // let's come up with a descriptive name of this array
    // then let's just add the name of our objects
    const cars = [carOne, carTwo, carThree];

    // let's display one element inside our array of cars
    console.log(cars[0]._name);
    console.log(cars[1]._name);
    console.log(cars[2]._name);
    // if you want to access the the properties or methods of the objects inside the array, just add "dot" and the property name or method
    cars[0].drive();
    cars[1].drive();
    cars[2].drive();



// this is the array of objects