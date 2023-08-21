
// get = binds a object property to a function when that is property is accessed
// set = binds an object property to a function when that property is assigned a value

    // here's an example, let's create a class car
    class Car {
        constructor(power) {
            this._gas = 15;
            this._power = power;
        }
        get power() {
            // when we access this property, we will instead invoke a function
            return `${this._power}hp`;
        }
        get gas() {
            return `${this._gas}L (${this._gas / 1000 * 100}%)`
        }
        set gas(value) {
            if (value > 1000) value = 1000;
            else if (value < 0) value = 0;
            this._gas = value;
        }
    }

    // let's pass in a unit for power which is the horsepower
    let car = new Car(300);
    console.log(car.power);
    console.log(car.gas);

    // the use of getter here is when we get the property, we can add some additional logic
    // you can see it in line 11

    // for better understanding about getters and as well as setters, watch Bro Code's course about this
    // timestamps: 3:45:00 / 56. getters & setters

    // just remember, getter (readable) setter (writable)



// this it the getters and setters