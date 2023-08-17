
// toLocaleString = returns a string with a language sensitive representation fo this number

// number.toLocaeString (locale, {options});

// 'locale' = specify that language (undefined = default set in browser)
// 'option' = objects with formatting options

    // let's try this now! 
    // example variable
    let myNum = 12345678.9;

    // let's reassign "myNum" variable toLocaleString
    // the first argument is "locale" which is a string and let's pass in a language
        // myNum = myNum.toLocaleString("en-US") ;     // US English
    // it sets the varaible to your desired language or it formats for every thousands placed



    // this time let's format some currency and we will set that within "options" using curly braces
    myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
    
    // there's other "styles" besides currency
    // this time, let's try percent
    // let's set the first argument in place a language to be undefined, but let's set the style to "percent"
    myNum = myNum.toLocaleString(undefined, {style: "percent"});

    // let's go to units or unit of measurements
    myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "miles"});

    console.log(myNum)

// this is the introduction to .toLocaleString
