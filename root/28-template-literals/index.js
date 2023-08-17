
// template literals = delimited with (`) or you can call "backticks"
// instead of double or single quotes, this allows embedded variables and expressions 

    // let's say we're working on a page for online store

    let userName = "Moonbami";
    let items = 3;
    let total = 80;

    // so normally, if we would like to display these variables along with some strings using console
    console.log("Hello", userName);
    console.log("You have", items, "of items in your cart");
    console.log("The total is PHP", total);

    // another way of writing these is by using the "template literals"
    // in place of single or double quotes for strings, we'll use this backticks
    // so when using backticks, we can embedd a variable or a expression within a string
    // note: to embedd a variable or expression, use the "$" sign followed by a set of curly braces and we can embedd a value, variable or expression

    console.log(`Hello ${userName}`);
    console.log(`You have ${items} of items in your cart`);
    console.log(`The total is PHP ${total}`);



    // now what if we would like to display one variant long string
    // first let's store that string to a variable
    let text = `Hello ${userName}, You have ${items} of items in your cart, The total is PHP ${total}.`;
    // let's just copy what texts we have above just for example and make sure it begins and ends with a backticks

    // then let's display this "text" variable
    console.log(text);

    // where this is really helpful is if we need to update and html element with some text especially if it takes up some several lines
    // now instead of displaying this to our console, let's update the "label" element

    document.getElementById('js-label').innerHTML = text;


// so this is template literals, a more flexible way to write some output
