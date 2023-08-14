
// usefull string properties & methods

    // let's say we have a variable called userName
    let userName = 'Moonbami';

    // if we type the variable name and add a "dot"
    // we have access to some properties and methods of this string
    // eg: .length
    // this will give us the length of the string
    console.log(userName.length);

    // we can get a character of a string at a given index
    // index refers to the number of position and computers always start index with 0
    // so let's say we want to get the 4th character in our string, let's pass index 3 in the parenthesis
    console.log(userName.charAt(3));

    // this time, you can find the index of the first occurence of the letter
    // this is also a bit oppposite of "charAt" because this time, we're getting/asking what is the index of the given character
    // BUT this will be more meaningful if you pass a character that has been repeated in the given string like "o" in "Moonbami"
    console.log(userName.indexOf('b'));

    // because there is also another related method to the latest above
    // this time, we're finding the last "o" in the given string and give its index
    // this what I am talking about above
    console.log(userName.lastIndexOf('o'));

    // another method is we can remove spaces
    // if you want to remove empty spaces before and after any other characters in the string you declared, you can use this
    console.log(userName.trim());

    // we can also make the string uppercase and lowercase
    console.log(userName.toUpperCase());
    console.log(userName.toLowerCase());

    // another usefull method is .replaceAll
    // let's declare another variable
    let phoneNumber = '123-456-7890';

    //let's say we want to replace all dashes into forward slash, let's use .replaceAll
    // this method has 2 arguments that you need to put in the parenthesis
        // 1. the character we want to replace
        // 2. the character that will be replacing from the first argument
    console.log(phoneNumber = phoneNumber.replaceAll('-', '/'));

// and these are the few basics and useful string properties and methods