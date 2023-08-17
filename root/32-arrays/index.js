
// array = think of it a variable than can store multiple values
// it's like a collection of values in one variable

    let fruit = "apple";
    // let's say we have a variable that has a value of a "apple"
    // we can store multiple names of fruit within this variable if we convert it into an "array"
    // to create an array, surround your values with a set of square brackets and seperate each value with a comma

    let fruits = ["apple", "orange", "banana"];
    // each value within an array is also known as an element
    // if I would like to access a particular element within this array
    // when we use the array variable name, add a square brackets and put the index number of the element that you want to access
    // remember: computers always starts with zero "0"
    // knowing that, the first element in our array has an index of zero

    console.log(fruits[0]);
    // note: if you try to access and element that doesn't exist in the array then you will get the "undefined" as a result

    // you can also update or change an elements inside the array
    // to do that, just type the array variable name followed by square brackets and the index number of the value you want to change
    fruits[0] = "watermelon"

    // reminder: to access an element from an array, just type the array variable name followed by square brackets and the index number

    // another way of adding an value or element in an array is by using the ".push" method then add a value inside the parenthesis
    fruits.push("grape");   // adding an element

    // we can also remove THE LAST element by using ".pop" method
    fruits.pop();   // removes THE LAST element

    // we can also add an element to the beginning of an array by using ".unshift" method and add a value
    fruits.unshift("mango");    // adding an element to beginning

    // meanwhile we can use the ".shift" method to remove an element from the beginning
    fruits.shift();   //removes element from beginning



    // we can also know how many values or elements are inside of our array by using ".length" property
    let length = fruits.length;
    console.log(length);

    // we can also find the index of an element inside of our array by using ".indexOf" method 
    let index = fruits.indexOf("orange");
    console.log(index);
    // note: if you search for an element that doesn't exist inside of the array, then it will return an index of -1 meaning it was not found



// this is the array