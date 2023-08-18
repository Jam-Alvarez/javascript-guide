
// callback = a function passed as an argument to another function
// using callbacks is a popular programming technique because it ensures that a function is not going to run before a task is completed

    // here's an example where callbacks would be useful
    // let's add two numbers together
        // let total = sum(8, 15);
        // displayToConsole(total);
        // displayToDom(total);

    // let's create a function that will these two numbers together and return something
        // function sum(x, y) {
        //     let result = x + y;
        //     return result
        // }

    // then let's display our result
    // let's create a function that will display the result to the console and another to the dom

    function displayToConsole(output) {
        console.log(output);
    }

    function displayToDom(output) {
        document.getElementById('js-display').innerHTML = output;
    }

    // another way of writing this instead of the code above is by using the "callback"
    // so I commented out the code above but keep the functions

    // this time let's call "sum" function and pass in our arguments and also the name of the function we would like to execute once we finish the "sum" function
    sum(2, 3, displayToConsole);
    // let's call the "displayToConsole" function and pass it as an argument
    // reminder: make sure NOT to add the set of parenthesis after you calling the function as a argument because you're invoking that function

    // now let's set up the sum function
    // this specific function will have three parameters, the first two are the numbers we would like to add together
    // and the third is a callback
    function sum(x, y, display) {
        // for the callback, you can really name it anything and make sure DON'T add the set of parenthesis after
        
        let result = x + y;
        // let's add the number

        // now this time, we can call our callback and now you can also put the set of parenthesis
        // and then pass the "result" variable as a argument
        display(result);
    }

    // if we would like to pivot and display our output to the dom instead, let's just pass in a different callback
    // we'll pivot and execute a different function 



// callback ensures the a function is not going to run before a task is completed
// helps us develop asynchronous code
// (when one function has to wait for another function)
// that helps us avoid errors and potential problems
// example: wait for a file to load, once the file loads, then we do something
// and this is callbacks