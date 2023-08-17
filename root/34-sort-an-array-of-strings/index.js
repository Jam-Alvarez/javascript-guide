
// this time, let's sort some an array of strings in javascript

    let fruits = ["mango", "banana", "kiwi", "apple", "orange", "grape"];

    // now to sort this array of fruits, there's a built in method of arrays called "sort"
    fruits = fruits.sort();

    // now if you want this to be in REVERSE alphabetical order, then you can do the method chaining
    fruits = fruits.sort().reverse();

    // let's display our array by using a "for up" statement
    for (let fruit of fruits) {
        console.log(fruit);
    }


// this is how we sort through an array of strings in alphabetical order or in reverse