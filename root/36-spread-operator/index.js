
// spread operator (...) = allows an iterable such as an array or string to be expanded 
// in places where zero or more arguments expected (unpacks the elements)

    // let's have an example
    let numbers = [1, 2, 3, 4, 5];

    // if we display this array directly, this will display the details of this array
    console.log(numbers);

    // now if we preceed the array with the spread operator (...)
    // it would expand the elements of this array
    console.log(...numbers);

    // we can do this with a string too
    let userName = "Moonbami";
    console.log(...userName);

    // now how could this be useful?
    // let's say we have to find the maximum value in the array "numbers"
    // let's use the "Math.max" method and store it in a variable
    // reminder: use the spread operator because if you only put the variable name here, it'll display "NaN"
    let highestNum = Math.max(...numbers);
    // now this will unpack the elements inside the array into individual arguments

    console.log(highestNum);



// this is the spread operator (...)