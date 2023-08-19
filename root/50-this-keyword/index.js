
// this = reference to a particular object
// the object depends on the immediate context

    // let's say we want to use the model property to the function using template literals
        // you might think to use ${model} right?
        // well it will only result to an error

    // within an object, if we want to use its properties
    // we need to preceed the property with "this" keyword
    // "this" refers to the object that we're currently working with
        // when using the "this" keyword, just imagine that we're replacing the keyword with its object name like carFerarri.model
        // because the "this" keyword is just a reference to the object we're working with
    const carFerrari = {
        model: "Ferrari",
        color: "Black",
        year: 2023,

        drive: function() {
            console.log(`You are now driving this ${this.model}`);
        },
        brake: function() {
            console.log("You stepped on the brakes");
        }
    }

    const carCorvette = {
        model: "Corvette",
        color: "White",
        year: 2023,

        drive: function() {
            console.log(`You are now driving this ${this.model}`);
        },
        brake: function() {
            console.log("You stepped on the brakes");
        }
    }



// so this is the "this" keyword