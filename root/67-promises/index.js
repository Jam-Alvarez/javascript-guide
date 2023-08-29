
// promise = object that encapsulates the result of an asynchronous operation
// promises let asynchronous methods return values like synchronous methods
// "I promise to return something in the future"

// the state is 'pending' then: 'fulfilled' or 'rejected'
// the result is what can be returned
// 2 parts, producing & consuming

    // this is a long topic and I won't comment most of what Bro Code's said
    // I'd recommend you to watch his video about this instead
        // timestamp: 67.promises // 4:33:46



    // this is how to create a promise
    const promise = new Promise((resolve, reject) => {
        let fileLoaded = true;
        // we can place any asynchronous code within our promise
        // then let's check to see if our file is loaded

        if(fileLoaded) {
            resolve("File Loaded!");
        }
        else {
            reject("File not found!");
        }


    });

    promise.then(value => console.log(value))
        .catch(error => console.log(error));



    const wait = time => new Promise(resolve => {
        setTimeout(resolve, time);
    })

    wait(3000).then(() => console.log("Thanks for waiting!"));



// these are the promises