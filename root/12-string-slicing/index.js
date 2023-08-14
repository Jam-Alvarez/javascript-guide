
// slice() - this method extracts a section of a string and returns it as a new string, without modifying the original string

    // let us know how is this method useful
    // let's declare a variable
    let fullName = 'Moonbami Official';
    let firstName;
    let lastName;
    // using this method, we can create and entirely new string from an existing string via slice method
    // let's extract the "Official" and let's put it in lastName

    //within the parenthesis we can add two values into it
        // 1. the starting index
        // 2. the ending index
    // so we have to count which index is our last name and pass it in the parenthesis
    // note: if you don't put a second value, it will assume to copy everything until the end of the string
    lastName = fullName.slice(9);
    // we'll assigned that sliced string into our variable "lastName"
    
    // this time, let's do this for our "firstName"
    firstName = fullName.slice(0, 8);
    
    // note: even though the code above works it wouldn't be realistic to do this by hand manually, everytime we would like to create a first name and a last name from a full name
    
    // so now let's try a different approach of this by using .indexOf method instead to search for any spaces and return an index
    // let's search for spaces using .indexOf 
    // however it'll display space at the console because the first value is inclusive so let's add + 1
    lastName = fullName.slice(fullName.indexOf(' ') + 1);
    // everything after the first space, slice it and then create a new string

    // let's do this for our first name
    // 0 at the beginning and we will end wherever there is space using .indexOf(' ')
    firstName = fullName.slice(0, fullName.indexOf(' '));

    // let's display all of this in our console just to make sure
    console.log(firstName);
    console.log(lastName);
    
