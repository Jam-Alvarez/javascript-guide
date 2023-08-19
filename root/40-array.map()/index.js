
// array.map() = executes a provided callback function once for each array element AND creates a new array

    //here's and example, let's create an array of numbers
    let numbers = [1, 2, 3, 4, 5];

    // let's use the .map() method of this array "numbers" and the .map() method will square each element in this array and create a new array
    // let's define a square function
    function square(num) {
        return Math.pow(num, 2);
    }
    // this is now our square function 
    // we will pass this function as a callback to the .map() method and this will create a new array SO LET'S DEFINE A NEW ARRAY
    let squares = numbers.map(square);

    // now let's display our squares
    squares.forEach(print);

    function print(display) {
        console.log(display);
    }



// this is the array.map() method