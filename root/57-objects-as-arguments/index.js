
// this is how we can pass objects to a function as an argument

    // we have a class car and we have three car objects, each car has a model, year and color
    class Car {

        constructor(model, year, color) {
            this.model = model;
            this.year = year;
            this.color = color;
        }
    }

    const carOne = new Car("Lamborghini", 2024, "Black");
    const carTwo = new Car("Corvette", 2024, "Orange");
    const carThree = new Car("Mustang", 2024, "White");

    // how could passing objects could be useful?
    // let's create a function that will display all of the information for each car

    function displayInfo(car) {
        // if we're accepting object as an argument, then we need a matching set of parameters
        // let's simply name it "car"
        // REMEMBER when you pass an object to a function, the parameter name is kinda like a nickname that you're giving it temporarily

        // now within this function let's display the car's model, year and color
        console.log(car.model);
        console.log(car.year);
        console.log(car.color);
    }

    // let's invoke the function with the object as an argument
    displayInfo(carOne);

    // let's create another function that will change the color of the car
    function changeColor(car, color) {
        car.color = color;
    }

    // now let's change the color of one of our cars, I chose corvette which is the carTwo
    changeColor(carTwo, "Light Blue");
    displayInfo(carTwo);



// this is how to use or pass objects as an argument