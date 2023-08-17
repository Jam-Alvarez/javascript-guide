
// variable scope = where a variable is accesible

// let = variable are limited to block scope {}
// var = variables are limited to a function() {}

    // here's and example

    for (var i = 1; i <= 3; i++) {
        // console.log(i);
    }

    // what if we try to access this "i" variable outside of this for loop?
    console.log(i);
    // you'll see an "Uncaught Reference Error"
    // that's because that any variable delcared with the "let" keyword is limited to a "block scope" and it doesn't exist outside of the set of curly braces
    // BUT if we use the "var" keyword instead to declare a variable, well then the variable "i" can exist outside of the curly braces and that can be a problem
    // because now if we attempt to display whatever the variable is with the keyword "var", it'll now display what is the variable "i" is
    // and so if we re-use this counter "i" but we declared it with "var", since it already has a value it's going to potentialy mess with my program and cause problems

    // however, any variable we declared with the "var" keyword, doesn't exist outside of any functions if it's within one
    // for example: 

    doSomeThing();

    function doSomeThing() {
        for (var j = 1; j <= 3; j++) {

        }
    }

    // now if we display the variable "j" this time, after its been declared with the "var" keyword, we'll have that "Uncaught Reference Error"
    // a variable declared with the "var" keyword can escape a set of curly braces, but it can't escape a function if it's contained within one
    // and that's where we need to discuss "global variables"

// global variables = is declared outside of any function 
// (if global, var will CHANGE browser's window properties)

    let name = "Moonbami";
    // since this variable is outside of any functions, it's considered a global variable
    // my entire program has access to it and recognizes what it is

    var nameTwo = "Moonbami";
    // if you use the "var" keyword when declaring a global variable, that can be problematic because, variable declared with "var" is GLOBAL, it can and will CHANGE browser's window properties

// for more examples, watch Bro Code's tutorial 27 about this
// for final verdict, it's considered best practice to use "let" than "var"
// BUT you should still know that "var" exist

// this is all for var vs let