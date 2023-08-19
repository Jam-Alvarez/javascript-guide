
// array.reduce() = reduces an array to a single value
// a very good use of the reduce method would be to sum up all of the values of an array

    // let's do an example of a online store and someone has a lot of items in their cart, let's sum up all of its prices
    let prices = [50, 100, 150, 200, 250];

    // let's create a function that we will use as a callback
    // there are atleast two parameters that we need
        // the one that holds the accumulated value (total) and the one element we're currently working with (price)
    function checkOut(total, price) {
        return total + price;
        // when we return a value, we will re-use it as an argument for the next iteration
        // this is how we can reduce all of the elements of an array to a single value
    }

    // let's create a "total" global variable that will hold the final price that the user has to pay
    // now to reduce all of these prices to a single value, type the name of the array and the ".reduce" method and pass in the callback
    let total = prices.reduce(checkOut);

    // then let's display what our total is
    console.log(`The total for your order is: PHP.${total}`);



// this is the ".reduce" method of arrays