
// console.time() = stars a timer you can use to track on how long an operation takes. give each timer a unique name

    // to track how much time has elapsed for a given operation, we can use the console.time()
    // to give this timer a unique name, we can pass that as a string argument
    // let's see how long it takes for the user to click a button

    // START
    console.time("Response Time");
    // to end this timer, we can use the timeEnd
    // and pass in the same name as an argument

    // alert("CLICK THE BUTTON QUICK!");
    
    // now what if we have a asynchronous code like setTimeout()
    setTimeout(() => console.log("HELLO"), 3000);
    // now if we run this, we already completed our program, and then after three seconds, the setTimeout function kicks in

    // END
    console.timeEnd("Response Time");

    // so the time and timeEnd method will track how long a asynchronous operation takes



// this is the console.time() method