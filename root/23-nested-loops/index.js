
// nestes loops = a loop inside of another loop

    // let's create an outer loop that will count to 3
    for (let i = 1; i <= 3; i++) {
        console.log(i);
    }

    // what if we want to repeat this entire for loops for many times?
    // then we can put a for loop inside a for loop and it's called "nested loop"
    // but one thing for nested loops is that you'll want another counter or variable name besides "i"
    // because we don't want to reuse the same counter 
    // a common naming convention of a counter of nested loops is that they use what letter is next to it, since we have "i" then we can change the next counter name to "j"
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            console.log(j);
        }
    }
    // so if we run this program, we would count the numbers 1 to 3, three times
    // once we complete all of our iterations of the nested loop, we then complete 1 iteration of the outer loop



    // let's try a different example

    // let's use nested loops to draw a rectangle within our dom using user input
    // the outer loop will be incharge for the rows and the inner loop will be incharge for the columns
    // first, let's declare variables to store our rows and columns
    let rows = window.prompt('Enter a number of rows');
    let columns = window.prompt('Enter a number of columns');
    // if we we want to use symbols to display the rectangle itself then let's ask the user to put symbol 
    let symbol = window.prompt('Enter a symbol to use');

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= columns; j++) {
            // let's change the innerHTML of our label by selecting it using dom
            // if you want to use numbers to display the rectangle then put "j" at the innerHTML
            // replace the "j" by the global variable symbol "symbol" (if you want to use symbol for rectangle)
            document.getElementById('js-rectangle').innerHTML += symbol;

        }
        // the inner for loop will print one row and to go down to the next row
        // we can add a break line
        document.getElementById('js-rectangle').innerHTML += '<br>'
    }

// and this is nested loops
