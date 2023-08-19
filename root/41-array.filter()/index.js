
// array.filter() = creates a new array with all elements that pass the test provided by a function
// we can filter out the elements from an array and create a new one based on certain criteria

    // for example, let's create an array for student ages
    let studentAges = [19, 20, 24, 18, 21, 17, 15];
    // let's create a new array of anybody that's 18 or older

    function checkAge(age) {
        return age >= 18;
    }

    // let's use the "checkAge" function as a callback within the ".filter" method and this will create a new array
    // let's define that array and make it equals to the original array with the ".filter" method as well as the callback "checkAge"
    let adults = studentAges.filter(checkAge);

    // and let's display all of the elements of the "adults" array using a callback as well
    adults.forEach(print);

    function print(display) {
        console.log(display);
    }



// this is the ".filter" method