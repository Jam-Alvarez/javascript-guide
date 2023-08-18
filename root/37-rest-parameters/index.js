
// rest parameters (...) = represents an indefinite number of parameters (pack arguments into array)

    // let's know how rest parameters would be useful

    let a = 1;
    let b = 2;
    let c = 3;
    let d = 4;
    let e = 5;

    // we will declare a function that will accept any number of arguments
    // the rest parameters will pack these arguments into an array
    // don't forget to put a name to the array
    function sum (...numbers) {
        // if our elements are within an array, we would just need some way to access those elements
        let total = 0;
        // let's iterate over our array
        for (let number of numbers) {
            total += number
        }
        return total
    }

    // now we can pass as many arguments as we want when we call a function

    console.log(sum(a, b, c));



// this is the benefit of rest parameters