
// objects = a group of properties and methods
// properties - what an object has
// methods - what an object can do
// use the dot "." to access properties/methods of the object

    // so let's create some car objects to begin with as an example
    // to create an object, insert a set of curly braces and add properties and methods within it
    // remember: to seperate each property and methods to COMMA
    const carFerrari = {
        model: "Ferarri",
        color: "Black",
        year: 2023,

        // we can also add some functions too
        drive: function() {
            console.log("You are now driving this car");
        },
        brake: function() {
            console.log("You stepped on the brakes");
        }
        // note: if a function is inside an object, we can now call it "method" instead
    }

    // to access an objects properties and methods, follow the object name with a dot
    // let's display is in our console
    console.log(carFerrari.model);
    console.log(carFerrari.color);
    console.log(carFerrari.year);

    // if we would like to call the methods of an object
    // type the object name then dot followed by the method you would like to do with a set of parenthesis so that we can call it
    carFerrari.drive();
    carFerrari.brake();

    // we can create multiple objects each with its own different properties and methods

    const carCorvette = {
        model: "Corvette",
        color: "White",
        year: 2023,

        drive: function() {
            console.log("You are now driving this car");
        },
        brake: function() {
            console.log("You stepped on the brakes");
        }
    }

    console.log(carCorvette.model);
    console.log(carCorvette.color);
    console.log(carCorvette.year);

    carCorvette.drive();
    carCorvette.brake();



// these are the objects