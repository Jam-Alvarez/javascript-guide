
// await = makes an async function wait for a promise

    // another way of writing these without the last two lines of code below
    // which is invoking the async function followed by the "then" and "catch" method
    // we can use the "await" keyword instead

    async function loadFile() {
        let fileLoaded = true;
        
        if(fileLoaded) {
            return "File Loaded!";
        }
        else {
            throw "File not found!";
        }
        
    }
    // loadFile().then(value => console.log(value))
    //     .catch(error => console.log(error));

    // so we will type "await" then invoke an async function
        // let message = await loadFile(); // we're waiting for a promise
    // awaiting an async function in this example will return some text
    // so let's store that text within a temporary variable 
        //console.log(message);
    // but after running this, we will have an uncaught syntax error

    // so in order to use this await keyword, we need to place it within another async function
    // so maybe we're beginning the process of loading the file, usually that takes more than one asynchronous process
    // you have to first locate the file, open it then close it, so let's declare an async function
    async function startProcess() {
        // and we'll put the temporary variable of await here
        // reminder: you can only use the "await" keyword within an async function 
        try {
            let message = await loadFile();
            console.log(message);
        }
        catch(error) {
            console.log(error);
        }

        // now what if our file doesn't load, this will throw an error
        // well we would need some way to catch this error when it's thrown
        // one way in which we can do that is to surround any dangerous code with the "try" block, which you can see above
    }

    // and then we have to invoke the startProcess() function to obviously begin the process
    startProcess();
    // there is no need to invoke the async function followed by the "then" and "catch"
    // we can ignore that because all you need is await, BUT it does have to be within an async function
    



// this is the await keyword