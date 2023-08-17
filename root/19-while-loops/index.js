
// while loop = repeat some code while some condition is true
// potentially infinite

    // so let's say we need to get some user input like their username
    // let's use double quotes this time because some users like to add single quotes to their usernames
    let userName = "";

    while (userName === "") {
        userName = window.prompt('Enter your name');
    }
    // when we reach the end of the while loop, we check the condition again
    // if it still true, we repeat this code for another iteration and then check again
    
    console.log('Hello', userName);

    //let's add another condition

    // this time, we really have to put usename even if we press cancel
    // once I typed in something from my username, both of these conditions were no longer true
    // then we chould escape the while loop and continue with the rest of the program
        while (userName === "" || userName === null) {
            userName = window.prompt('Enter your name');
        }
    
    // now when you create a while loop, you should write some sort of way to escape the while loop from within it
    // otherwise you'll encounter what's called an "infinite loop"

// so this is while loop
