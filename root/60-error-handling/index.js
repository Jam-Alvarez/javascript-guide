
// error = object with a description of something went wrong
// example: can't open a file, lose connection, user types incorrect input or TypeError
// we would like some way to handle these errors without interrupting our program

// one example of "TypeError" is we mistype something

    // console.lag(); // we misspelled "log" as "lag"
    // if an error happens when you're program is running, well obviously it can cause your program to stop
    // so we want to handle these kinds of errors right? 
    // one way to do that is to surround any dangerous code with a "try" block
    // codes that could cause an error is considered dangerous, accepting user input is almost always dangerous, cause you don't know what they're gonna type in

    // so let's create a try block and add some dangerous code
    try {
        console.lag();
    }
    // now if you have a try block,you need to follow this with a catch block following with a parameter "error"
    catch(error) {
        // let's try display what our error is
        console.log(error);
    }
    // if something goes wrong, we will do something else
    // now if we try to run this, this won't interrupt our program, it'll simply just display the error



// throw = executes a user-defined error
// sometimes in your program, something will go wrong but it won't generate an error
// here's an example, let's ask the user input, we'll ask the user to type in a number

try {
    let user = window.prompt("Enter a number please: ");
    // let's just convert the user input into a number because user inputs are always in "String"
    user = Number(user);

    console.log(`${user} is a number!`);
    // now let's say we put a word to test this try block instead of a real number
    // even though this didn't cause any errors, it's definitely gonna cause problems for us in our program
    // using the "throw" keyword, we can execute a user-defined error, but we need to know when to use it
    // let's us if statements

    // if not a number, pass in our identifier, if this is true then we will throw an error or an argument to be used as an error in our catch
    // so we're just displaying a message for this example
    if(isNaN(user)) throw "This isn't a number!";
    // so when we run this again, it'll display our argument that we throw

    // what if the user doesn't type in anything and just press the "okay" button
    // we throw a user-defined error
    if(user == "") throw "Please enter a number!";    

    // so an error is an object with a description of something went wrong
    // they're maybe times that something will go wrong in your program but it doesn't raise an error
    // like somebody types in something that didn't anticipate
    // then you can use the "throw" keyword to execute a user-defined error

}
catch(error) {
    console.log(error);
}

// now there's one more statement that we can add to this, you can add a "finally" block
finally {
    // finally, we'll always execute, doesn't matter if our code is successful or unsuccessful if there's an error
    // now here's the use of this block
    // let's say we open a file, after we open the file and we're done with it, we would like to close it
    // but, and cause an error, we would still like to close it
    // so the finally block is good for any sort of cleanup

    console.log("This always executes.");
    // so even if our code is successful or unsuccessful if there's an error, we will still execute this finally block
}



// so these are some of the basic error handling