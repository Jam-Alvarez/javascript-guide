
// async = makes a function return a promise

    const promise = new Promise((resolve, reject) => {
        let fileLoaded = true;

        if(fileLoaded) {
            resolve("File Loaded!");
        }
        else {
            reject("File not found!");
        }

        
    });

    promise.then(value => console.log(value))
        .catch(error => console.log(error));

    // an easier way of writing this is that we can stick this code within an async function, and it'll return a promise
    // copy the code inside the promise, and then delete the promise
    async function loadFile() {
        let fileLoaded = true;

        // there's no need to use this resolve and reject callback 
        // if our asynchronous process is successful, we can just simply return a value 
        if(fileLoaded) {
            return "File Loaded!";
        }
        // but then if our asynchronous process is unsuccessful, we can just instead use the throw keyword
        else {
            throw "File not found!";
        }

    }
    
    // now to invoke this function, in place of a promise, let's invoke the "loadFile" function that contains my asynchronous process
    loadFile().then(value => console.log(value))
        .catch(error => console.log(error));

    // when using the "then" and "catch" methods in place of adding these methods after a promise object
    // we would invoke a function and a promise is going to be returned back to this place in which you invoke the function

    // another way of writing this that's a little more clear but it's a lot more syntax is if we're NOT using the "async" function
        // you can check Bro Code's tutorial about this at his Js Tutorial
        // timestamp: 68.async // 4:40:23



// this is the async keyword