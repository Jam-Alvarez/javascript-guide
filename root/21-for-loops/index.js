
// for loop = repeat some code for a certain amount of times

    // let's use for loops to create a program that will count to ten
    // inside the for loop's parenthesis, there's three statements that we can add
        // 1. first, we can declare and assign a counter or some other variable
        // 2. second is our condition, will continue the statement as long as this condition is true
        // 3. third, we can increment our counter, after iteration we increment our counter variable by 1
            // (you can also use "counter++" when you're just incrementing 1)
    for (let counter = 1; counter <= 10; counter += 1) {
        console.log(counter);
    }
    
    // now, this variable "counter" it's know as "local variable" and it doesn't exist outside of this for loop
    // what a lot of programmer do if they need some sort of temporary variable within a for loop to keep track of what iteration they're on
    // they will simpy just use "i" and this is a common convention or we can call "best practice"

    // let's re-create the for loop above and change the local variables to "i"
    // now let's pretend that this is a countdown to new year's day 
    for (let i = 10; i > 0; i -= 1) {
        console.log(i);
    }

    // this time, when we escape the for loop, let's print "happy new year" 
    console.log('HAPPY NEW YEAR!');

// notes;
    // so for loops are farely flexible, we can increment or decrement our counter "i" 
    // there's a lot of overlap where you could use either while loop or a for loop
    // a while loops tends to be better in certain situations where you may POTENTIALLY need to repeat some code an infinite amount of times
    // for loops are more suitable for code where you only need to repeat it for a certain or given amount of times