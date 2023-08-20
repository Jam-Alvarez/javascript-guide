
// static = anything that's static belongs to the class, not the objects
// properties: useful for caches, fixed-configurations
// methods: useful for utility functions

    // for this example, we have a class "Car" and a constructor
    // when we create a car object we can pass in a model of a car
    class Car {
        // suppose we would like to keep track of how many cars we have created
        // like we're entering some cars to a race
        // we could create a property to keep track of how many cars that we have instantiated and add the "static" keyword
        static numberOfCars = 0;
        // within the constructor we can add additional code, every time we create a car, let's increment cars by one
        constructor(model) {
            this.model = model;
            Car.numberOfCars++;
        }
        // now we would like to start our fictional race, then we could create a "startRace" method
        static startRace() {
            console.log("3... 2... 1... GO!");
        }
    }

    const carOne = new Car("Corvette");
    const carTwo = new Car("Ferrari");
    const carThree = new Car("Lamborghini");
    const carFour = new Car("Mustang");
    const carFive = new Car("BMW");

    Car.startRace();

    console.log(`You currently have ${Car.numberOfCars} cars`);

    // note: I didn't add some comments to explain what it happening here because it'll only make this code complicated
    // for more detailed explanation regarding constructors, you can watch Bro Code's detailed explanation about this
    // timestamp: 3:30:48 / 53.static keyword



// this is the static keyword