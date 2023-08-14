
// constants/const = a variable that can't be changed
// it adds some security to our code and is declared like var or let

    // in this example, we're going to create a sample program to calculate the cicumference of a circle
    // let's write this code without const first and later we will replace it with some const to so we can see their each usefulness
    // let pi = 3.14159;
    // let radius;
    // let circumference;

    // radius = window.prompt('Enter the radius of a circle');
    // since we're asking or accepting for a user input, this is a string and we have to convert it into a number
    // radius = Number(radius);

    // circumference = 2 * pi * radius;

    // console.log('The circumference is:', circumference);
    

// now here's why const are useful
    
    // you can use UPPERCASE all letters of a variable if it's a const
    // this is what we call "naming convention"
    // when naming a const, it's a best practice to use UPPERCASE but it's not neccesary, more of a self preference
    // but let's UPPERCASE it just for this example 
    const PI = 3.14159;
    let radius;
    let circumference;

    radius = window.prompt('Enter the radius of a circle');
    radius = Number(radius);

    // let's say that someone changes our code
    // for example, now the pi is 420.69
    PI = 420.69
    // this will now change the circumference into a wrong one
    // we can prevent a variable from being changed by instead of using "let" we will use "const" instead

    // readme!
        // if you see a "Uncaught TypeError" at the console
        // that's because once we declared a variable into a const, we shouldn't change it
        // so you can comment out the PI = 420.69;

    circumference = 2 * PI * radius;

    console.log('The circumference is:', circumference);

// you should use const as often as possible if you have a variable that you know you will not be changed later
// or if this variable shouldn't be changed

// last notes:
    // you maybe thinking why we didn't change "radius" and "circumference" into a const and that's because;
        // 1. radius is asking for a user input and this is a dynamic variable or it will always change depends on the user input
        // 2. we have to use the circumference to contain the result, that result is also dynamic and will always be changed