
// type conversion = change the datatype of a value to another (strings, numbers, booleans)


    // for example, let's use the window prompt to ask our age
    // even if we enter for example 21, we know it's a number but when we accept user input, it will be a string datatype
    // so if we want to take the user input and we want to use it for some arithmetic expressions, we have to convert this "string" into a "number"
    let age  = window.prompt('How old are you?');

    // this is how we convert a string into a number by passing a variable inside the parenthesis of the constructor called "Number"
    age = Number(age);
    age += 1;

    console.log('Happy Birthday! you are now', age, 'years old');



// another examples

    let x;
    let y;
    let z;

    // converting string to number
    x = Number('3.14');

    // converting number to string
    y = String(3.14);

    // converting to a boolean
    // note! converting an empty string into a boolean will result into false
    // but, if you type in anything else inside, this will give you true
    z = Boolean('shikimori');
    // when you convert a string to a boolean that's not empty, this will give you true 
    // if it's an empty string like just a set of quotes, it results in false 
    // this will be useful if you need to accept some user input or users types in their name
    // and if they skip that step or input, using the "if" statement we can see if the user typed in something or not 
    // like if the boolean is true or false

    console.log(x, typeof x);
    console.log(y, typeof y);
    console.log(z, typeof z);

    // last notes:
        // the "typeof" keyword is used to know obviously from the word itself, what is the type of what we entered next to it
        // if you try and convert a number that is not really a number for example:
        let j;

        // this will result into "NaN" or "Not a Number"
        j = Number('hatsune');
        console.log(j, typeof j);

