
// function = define a code once, and use it many times
// to perform some code, call the function name

    // for this example, let's say we need to sing happy birthday for three separate times
    // we would normally do is use console to display happy birthday for three times
    // BUT wouldn't it be nice to write this code once? and reuse it whenever we need?
    // we can do it we a function
    
    // let's create a function
    function happyBirthday () {
        console.log('Happy Birthday to You');
        console.log('Happy Birthday to You');
        console.log('Happy Birthday Dear (name)');
        console.log('Happy Birthday to You.');

        console.log('Congrats! you are now (age) years old');
    } 

    // now if we need to sing a verse of happy birthday, let's type the function name and add a set of parenthesis
    // this will invoke, otherwise "call the function"

        // happyBirthday();
        // happyBirthday();
        // happyBirthday();
    // now we have sing happy birthday three times with less codes by using "functions"



    // now what if we have some variables?
        // let userName = 'Moobami';
        // let age = 21;
    // then inside the function, let's just add this variable inside the console log like this:
        // console.log('Happy Birthday Dear', userName);
        // console.log('Congrats! you are now', age, 'years old');



    // note: functions have access to global variables
    // a "global variables" is basically a variables that's declared outside of any functions OR any set of curly braces

    // for example, we may have a function named "startProgram"
    function startProgram () {
        // and let's place the variables here and call happyBirthday() function
        let userName = 'Moonbami';
        let age = 21;

        // IGNORE THIS COMMENTS FOR NOW FROM LINE 48 TO 52
        // to pass some values or variables to a function when you call that function, within the set of parenthesis, just list whatever you would like to send over
        // these are known as "arguments"
            // happyBirthdayTwo(userName, age); 
        // NOW GO BACK TO LINE 79

        happyBirthdayTwo();
    }

    // let's call the startProgram() function
    startProgram();

    // but this will create an issue at the console "Uncaught Reference Error" because the variable "userName" is not defined
    // variables when declared with the "let" keyword aren't recognized outside of the immediate set of curly braces
    // so the happyBirthdayTwo() function has no idea what's "userName" or "age" is
    // the variables "userName" and "age" only exist inside the startProgram() function and you can call this "scope"

    // to fix this, when we invoke/call the happyBirthdayTwo() function within startProgram() function
    // we can send some information to this happyBirthdayTwo() function so that it will recognize our "userName" and "age"
    // GO BACK AND CHECK LINE 48 THAT I SAID YOU IGNORE

    function happyBirthdayTwo () {
        console.log('Happy Birthday to You');
        console.log('Happy Birthday to You');
        console.log('Happy Birthday Dear', userName);
        console.log('Happy Birthday to You.');

        console.log('Congrats! you are now', age, 'years old');
    }


    // however you need a matching set of "parameters"
    // within the declaration of our happyBirthdayTwo() function, I need a matching set of "parameters"
    // you can just copy the "arguments" and paste it inside the set of parenthesis of the function 
    // this is what we call "parameters"
        // function happyBirthdayTwo (userName, age) {
        //     console.log('Happy Birthday to You');
        //     console.log('Happy Birthday to You');
        //     console.log('Happy Birthday Dear', userName);
        //     console.log('Happy Birthday to You.');

        //     console.log('Congrats! you are now', age, 'years old');
        // }

        // note: within the "parameters" they don't necessarily need to be the same name, you can rename these values when you receive them within the function
        
        // note: BUT make sure you get the orders of the "arguments" and the "parameters" right 
        // because the order of the "arguments" and the "parameters" does matter
        // ONCE YOU UNDERSTAND, YOU KNOW WHAT LINES TO UNCOMMENT

// so this is functions() and arguments and parameters
