
// synchronous code = in an ordered sequence, step-by-step linear instructions (start now, finish now)

// asynchronous code = out of sequence, example: access a database, fetch a file, tasks that takes time (start now, finish sometime later)

    // synchronous code example
    console.log('START');
    console.log('This step is synchronous');
    console.log('END');
    // so these are the step-by-step instructions
    // in order to move on the second step, we first need to complete the first step
    // no matter how long the statement will take, our next step has to wait for our "before" step to finish
    
    // asynchronous code example
    console.log('START');
    setTimeout(() => console.log('This is a asynchronous'), 5000);
    console.log('END');
    // so you can see that this step is out of order because it's asynchronous
    // it's running in the background, step three here in our program doesn't need to wait for our step two to finish
    // step two will start now, finish some time later when its ready



// this is the difference between synchronous code and asynchronous code