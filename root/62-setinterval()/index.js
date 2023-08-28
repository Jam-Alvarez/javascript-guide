
// setInterval() = invokes a function repeatedly after a number of milliseconds, asynchronous function (doesn't pause execution)

    // let's create a count up timer
    // we'll also accept some user input
    let count = 0;
    let max = window.prompt('Count up to what number?');
    max = Number(max);

    // now let's invoke the setInterval() method
    // again, we can pass in a callback, function expression and arrow function expression
    // and add on how many milliseconds we would like to repeat this function
    const countTimer = setInterval(countUp, 1000);

    function countUp() {
        count++;
        console.log(count);
        // now let's add a statement that this function will stop after we reach the number of the user input
        // but how do we stop the setInterval() method you say? we'll use the clearInterval() method
        if (count >= max) clearInterval(countTimer);
    }



// this is the setInterval() method