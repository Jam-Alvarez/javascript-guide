
// array.forEach() = executes a provided callback function once for each array element

    // let's create a sample array of students
    let students = ["shikimori", "asuna", "yumeko", "siesta", "elaina"];
    // let's make all of the students name lowercase because 
    // we'll create a function that will capitalize the first letter of each student's name

    // now for the forEach() method, there's up to three arguments that are provided automatically behind the scenes that we have access to
        // 1. element
        // 2. index
        // 3. array
    // we don't necessarily need to use any of these, but they're provided for us
    // but for this function, we will use it
    function capitalFirstLetter(element, index, array) {
        // to capitalize the first letter of each string, let's do this

        array[index] = element[0].toUpperCase() + element.substring(1);
        // this will select the first character of every string following up with ".toUpperCase" method
    }

    // now to use the ".forEach" method, let's type the name of the array
    // then add the ".forEach" method then pass in a callback as an argument
    // we will apply this callback to every element in an array
    // reminder: DON'T add a set of parenthesis after the callback because that will call the function
        // we're only passing the name of the function as an argument
    students.forEach(capitalFirstLetter);

    // now let's create a function that will print each student that's within our array
    function print(p) {
        console.log(p)
    }

    // let's use the ".forEach" method again for this
    students.forEach(print);



// this is the .forEach method of arrays