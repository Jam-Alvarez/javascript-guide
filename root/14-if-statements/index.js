
// if statement = a basic form of decision making if a condition is true, the do something and if not, the don't do it!
// reminders:
    // you can add as many "if else" statements as you want :)
    // the ORDER of the "if" and "else if" statements MATTER!!!

// let's set a sample variable
let age = 21;

    // so if somebody's age is over 18 then I would like to display a message that says "you are an adult"
    // and if they're under 18 then it doesn't display anything
    // put the condition inside the parenthesis
    if (age  >= 65 ) {
        console.log('you are a senior citizen')
    }
    else if (age >= 18) {
        console.log('you are an adult')
    }
    // note @ the bottom!
    else if (age < 0) {
        console.log("you haven't been born");
    }
    // now instead of not displaying anything because the condition is not met we could do something else
    // if you would like to take a different course of action then we could add a "else" eg:
    else {
        console.log('you are a child');
    }
    // if the first statement is false, then it will skip the code and look for another statement until the result becomes true

    // notes: if theres any other conditions that you would like to check before reaching the "else" statement
        // then you can add "else if" statement  
        // because the "else" statement will act like some sort of "last resort" if all of the conditions that you create didn't become true
        // also, you now can't add a condition to the "else" statement anymore because it is the last resort and will apply any conditions that are not meant



// now let's create a boolean value if it's true of false

    // let's create a variable
    let isOnline = true;

    // if you need to check a boolean value using an if statement 
    // then you can just place the boolean value in the parenthesis
    if (online) {
        console.log('you are online');
    }
    else {
        console.log('you are offline');
    }

// these are if statements!