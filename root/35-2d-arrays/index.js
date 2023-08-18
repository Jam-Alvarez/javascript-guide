
// 2D array = an array of arrays

    let fruits =     ["mango", "banana", "kiwi", "apple", "orange"];
    let vegetables = ["carrot", "brocolli", "cucumber", "pea", "sweet corn"];
    let meats =      ["pork", "chicken", "fish", "egg", "steak"];
    // these are our individual arrays and we can add them to a another array

    // we just call the identifiers of the individual arrays above and store it into another array
    // "groceryList" is now our 2d array
    let groceryList = [fruits, vegetables, meats];

    // but how can we iterate over the elements of this 2 dimensional array?
    // we can use nested loops
    for (let list of groceryList) {
        // if we display "list", it's going to display all of the individual arrays
        // to access each individual elements wihthin each list or array, let's create another loop to nest
        for (let item of list) {
            // not this will store all of the elements of our 2 dimensional array

        }
    }

    // what if you need to change one of these elements within your 2d array?
    // in 2 dimensional array, there are two indices, to acces one of these elements within a 2d array
    // think of 2d arrays as a grid, we have columns and rows
    // picturing the grid, the first index(square brackets) would be the row and the second would be column
    // let's change "brocolli" to "eggplant"
    groceryList [1][1] = "eggplant"
    // let's display vegetables to confirm
    console.log(vegetables);




// this is 2d arrays