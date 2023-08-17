
// this time, let's loop through an elements of an array

    let prices = [15, 150, 1500, 15000, 150000];

    // there are two popular way to iterate through an array
        // 1. standard for loop
        // 2. for up statement

    // let's begin with a standard for loop
    for (let i = 0; i < prices.length; i++) {
        console.log(prices[i]);
    }

    // tip: if you would like to iterate backwards over this for loop, here's how to do it
    for (let i = prices.length - 1; i >= 0; i--) {
        console.log(prices[i]);
    }



    // now let's use the "for up" statement
        // note: for a better way of writing this, instead of using variable name "i"
        // let's use a word that's more descriptive of what's within our array
        // this time, let's use "price" for a more descriptive 
    for (let price of prices) {
        console.log(price);
    }


// this is how we iterate over the elements of the array in couple of different ways