
// arrow function expression (=>) = compact alternative to a traditional function expression

// let's try this to a bunch of examples where this could be useful

    // first, let's create a traditional function expression which we learned last topic
    const greeting = function(userName) {
        console.log(`Hello ${userName}!`);
    }
    // now let's call this function with our chosen argument "userName"
    greeting("Moonbami");

    // a compact alternative to this function expression is that we could convert it into an arrow function expression
    const greetingTwo = userName => console.log(`Konnichiwa ${userName}`);
    // note: you can remove the curly braces and parenthesis if your function only uses a ONE STATEMENT or PARAMETER/ARGUMENT
    // note: but you should have curly braces and parenthesis if your function uses MORE THAN ONE STATEMENT or PARAMETER/ARGUMENT

    greetingTwo("Jam");

    // this is one of the example use of "arrow function"

// let's try for a different example this time

    // let's calculate a percentage
    const makePercent = (x, y) => x / y * 100;

    console.log(`${makePercent(100, 50)}%`);

// let's try this again for the last time

    // let's reuse the code on the topic of "sort an array of numbers"
    let studentGrades = [1, 1.25, 1.75, 2, 2.5, 3, 4, 5];

    studentGrades.sort((x, y) => y - x);
    studentGrades.forEach((display) => console.log(display));
    // in place of function expressions we we're able to instead use arrow function expressions
    // it's a compact alternative to a traditional function expression, and it makes your code a lot more readable



// so these are the arrow function