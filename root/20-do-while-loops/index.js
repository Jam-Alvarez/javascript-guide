
// do while loop = do something then check the condition, repeat if the condition is true

    // let's create a username variable
    let userName;

    // this time, let's convert this while loop into do while loop
    // instead of checking the condition first, we check the condition last
    do {
        userName = window.prompt("Enter your name")
    } while (userName === "") 
    // so a do while loop is a variation of a while loop
    // you do something first and then check the condition
    // meanwhile, in standard while loop, you check the condition and then do something if that condition is true

    // with a standard while loop, you may skip some code entirely if the condition is false from the beginning
    // with a do while loop, you do it atleast once and then check the condition 

    console.log('Hello', userName);

// so this is do while loops 
