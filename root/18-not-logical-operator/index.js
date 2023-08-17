
// "!" NOT logical operator
// typically used to reverse a condition's boolean value
// true -> false and false -> true

    // let's use the variable temp
    let temp = 15;

    // using the "!" NOT logical operator, we can write this code a different way if we choose to
    // we can check to see if the temperature is NOT greater than 0
    // to do it, let's surround the condition with a set of parenthesis and add a NOT logical operator at the start
    if (!(temp > 0)) {
        console.log("It's cold outside")
    }
    else {        
        console.log("It's warm outside")
    }
    
    // now let's do this with a boolean variable
    let sunny = true;
    
    // let's add the "!" operator at the start of the boolean condition and you don't have to surround it by parenthesis this time
    // because it's a boolean variable
    if (!sunny) {
        console.log("It's cloudy outside");
    }
    else {
        console.log("It's sunny outside")
    }

// so by using the NOT logical operator it gives us a few additional ways in which we could write code
// more versatility is a good thing
