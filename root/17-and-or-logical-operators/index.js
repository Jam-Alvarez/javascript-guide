
// gives us the ability to check more than 1 condition concurrently
// "&&" AND (BOTH conditions must be true)
// "||" or (Either conditions can be true)

    // let's say we have a variable named temp
    let temp = 15;

    // here we use the logical operator AND "&&" to check the temperature
    // if the temperature falls within this range, 0 - 30
    // then this condition is true
    // both of the condition must be true when using &&
    if (temp > 0 && temp < 30 ) {
        console.log('The weather is good');
    }
    else {
        console.log('The weather is bad');
    }

    // now let's procee to logical oparator OR "||"
    // this time, if atleast one of these conditions are true then it will execute the code
    // using OR "||", either one of these condition can be true
    if ( temp <= 0 || temp >= 30) {
        console.log('The weather is bad');
    }
    else {
        console.log('The weather is good');
    }

    // you can also add more than one logical operator
    // the variable "sunny" will say if it's sunny or not by using booleans
    let sunny = true;

    // note: when youre working with a BOOLEAN value, you don't have to type "=== true", you can just type that boolean variable
    if (temp > 0 && temp < 30 && sunny) {
        console.log('The weather is good');
    }
    else {
        console.log('The weather is bad');
    }

// and this is the "&&" and "||" logical operators
