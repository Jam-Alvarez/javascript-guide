
// return statements = returns a value back to the place where you invoke a function
// when you call a function, you can return some information 

    // to demonstrate this. we're going to create a program to calculate the area of a rectangle using a function and then return a value
    
    let area;
    let width;
    let height; 

    // let's accept some user input
    width = window.prompt('Enter Width');
    height = window.prompt('Enter Height');

    area = getArea(width, height)

    // now let's create a function to calculate the area of a rectangle 
    // when we use this function to calculate the area of a recntangle, we need to set up some parameters
    // when we invoke this function we will pass this this variables (width, height) as arguments and assign the "area" above and invoke the function "getArea"
    // but we need to pass in a matching set of arguments
    function getArea(width, height) {
        // let's declare a temporary variable and calculate the area of a rectangle
        let result = width * height;

        // if I need to send a value back to the spot in which we call the function then we can use the "return" keyword
        return result;
        // we should return the "result" variable

        // we can shorten this code by using 
            // return width * height;
    
        //this will do the same thing
    }

    // and let's display it to make sure
    console.log('The area is:', area);

    // so when we return the "result" once the function was completed which is (area = getArea(width, height)
    // just imagine that we're replacing this function call with the answer from the function 
    // we're returning a value back to the spot we invoked or called the function

// this is the return statement