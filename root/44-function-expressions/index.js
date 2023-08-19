
// function expression = function without a name (anonymous function)
// this helps us avoid polluting the global scope with random function names
// write it, then forget about it

    // let's say we have a function that will display a simple message
    // using a function declaration, I have to think a unique function name
    sayHello();
    function sayHello() {
        console.log("Hello");
    }

    // so this can get some tedious and annoying to always think a unique function names
    // especially if the rest of your program is not gonna use it 

    // this is when "function expression" come in handy
    // we will store that within a variable
    const greeting = function() {
        // this time, we don't need to think of a unique function name
        console.log("Konnichiwa!");
    }

    // now to call or invoke this function that is stored within a variable
    // let's just type the variable name with a set of parenthesis to call it just like a normal function
    greeting();

    // so there was no need to think of a unique function name 
    // we can assign an anonymous function into a variable or some other entity which we'll discuss in the future

    // here's another example, let's create a counter
    let counter = 0;

    document.getElementById('js-ascend-btn')
        .onclick = function() {
            counter++;
            document.getElementById('js-display').innerHTML = counter;
        }
    document.getElementById('js-descend-btn')
        .onclick = function() {
            counter--;
            document.getElementById('js-display').innerHTML = counter;
        }
    // there is no need to create two unique function names
    // we were able to assign function expressions to the event attribute of an HTML element



// these are the function expressions