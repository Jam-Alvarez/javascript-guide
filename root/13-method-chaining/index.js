
// method chaining = calling one method after another in one continuous line of code

    // let's say we have a username but make sure all of it are lowercase
    let userName = 'moonbami';

    // now what we're going to do is to take the first character of the string and make it uppercase
    // without using method chaining, we could do something like this 
    // first, let's create a temporary variable to store our letter and we will return the first letter in the string
    let letter = userName.charAt(0);
    // variable "letter" is now the first letter of the string and now we'll make it uppercase
    // let's re-assign the letter variable 
    letter = letter.toUpperCase();

    // now this takes twice the line of code but we can make this much shorter and much elegant
    // this is method chaining comes in
    letter = userName.charAt(0).toUpperCase();
    // this one line of code will to the exact same thing and it's easier to read and understand
    // by method chaining, you can follow one method call with another

    console.log(letter);

// and this is method chaining