
// ternary operator = shortcut for an "if/else statement"
// takes 3 operands
    // 1. a condition with ?
    // 2. expression if true :
    // 3. ecpression if false 

// condition ? exprIfTrue : exprIfFalse

    // here's an example, let's create a function that will check the user's age
    // let's use the if/else statement first and then let's use the ternary operator so that we can compare the two

    let adult = checkAge(21);
    // let's call the checkAge function and pass in some age

    console.log(adult);
    // // let's pass the number "21" as an argument for this parameter
    // function checkAge(age) {
    //     // then let's check if the parameter is...
    //     if (age >= 18) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }
    
    // another way of writing this is and it's much more easier and a lot less syntax
    // let's just copy the code above
    function checkAge(age) {
        // this function will return a value so let's preceed our ternary operator with a "return" statement
        
        // first, to use the ternary operator, we write a condition followed by a question mark as if we're askina question
        // second, is an expression if THAT condition is true or false and seperated by colon ":"
        return age >= 18 ? true : false
        // and these will do the same thing as the code above or the if/else statements
        }



        // here's another example

        checkWinner(true);

        function checkWinner(win) {
            win ? console.log('You Win!') : console.log('You Lose!')
        }



// this is the ternary operator