
// break = breaks out of a loop entirely
// continue = skip an iteration for a loop

    // let's create a for loop to demonstrate "break"
    // we will count the numbers 1 to 20, however once we reach 13 then I would like to exit this loop just for example
    // let's use the "++" when we're ONLY incrementing by 1
    for (let i = 1; i <= 20; i++) {
        // if we would like to break out of this loop entirely if we reach the number 13 then I can add a break statement
        if (i === 13) {
            break;
        }
        // but if we use "continue" statement, it will skip an iteration of a loop
        if (i === 14) {
            continue;
        }
        // now we will skip that specific iteration which is the "14" in the parenthesis of the condition and continue on

        console.log(i);
    }

// so that's the main difference between "break" and "continue"
// remember: 
    // break = will break out of the loop entirely
    // continue = will skip only tha iteration inside the loop 
