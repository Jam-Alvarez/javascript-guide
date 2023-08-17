
// switch = statement that examines a value for a match against many case clauses
// more efficient than many "else if" statements

    let grade = 'A';

    if (grade === "A") {
        console.log('You did great!');
    }
    else if (grade === 'B') {
        console.log('You did good!');
    }
    else if (grade === 'C') {
        console.log('You did okay!');
    }
    else if (grade === 'D') {
        console.log('You passed... barely!');
    }
    else if (grade === 'F') {
        console.log('You FAILED!');
    }
    else {
        console.log(grade, 'is not a letter grade.');
    }
    // this may still be useful but there is much way better option than using "else if" statement
    // if you find yourself creating a tons of "else if" statements, then it's better to use "switch" INSTEAD

    // let's rewrite the whole program but with switch instead
    // within the set of parenthesis we're going to examing a value or variable
    switch(grade) {
        // let's examine out variable "grade"
        // and we will compare our grade against many case clauses and see if they're is a match
        // this is how we create a case clause
        case 'A' : console.log('You did great!');
            // make sure to add break each and every cases
            break;
        case 'B' : console.log('You did good!');
            break;
        case 'C' : console.log('You did okay!');
            break;
        case 'D' : console.log('You passed... barely!');
            break;
        case 'F' : console.log('You FAILED!');
            break;
        // now  if there's no matching cases, then you can add a "default" clause
        default : console.log(grade, 'is not a letter grade');
    }



    // what if we try number grades?

    let gradeNum = 95

    // another way of writing a switch is that if we're checking conditions
    // we could pass "true" within the switch
    // we'll examine true against some matching conditions
    switch(true) {
        case gradeNum >= 90 : console.log('You did great!');
            break;
        case gradeNum >= 80 : console.log('You did good!');
            break;
        case gradeNum >= 70 : console.log('You did okay!');
            break;
        case gradeNum >= 60 : console.log('You passed... barely!');
            break;
        case gradeNum < 60 : console.log('You FAILED!');
            break;
        default : console.log(gradeNum, 'is not a letter grade');
    }

// this way, we can compare a value or a variable against many matching conditions
// switch statement is more efficient than else if statement if you find yourself using many else ifs



// note: if you ask why is that the equals "===" sign that I use is different than BroCode's equals "=="
// that's because there's 2 ways to write this and that's the sign that I use and BroCode's
// BUT, the difference is that the double equals "==" tries to convert both values into the same type
    // eg:
    // console.log(5 == '5.00);
// if we un-comment this and display in the console, it will tell us that these two values are true or equal to each other
// even though one of them is a number (5) and the other is a string "5.00" 
// and that's because the double equals "==" converts both values into the same type

// however, this is not a good idea because two values are different, a number and a string
// so they shouldn't be equal to each other

// that's why in javascript, we always use the triple equals "===" to check if two values are the same
// and to avoid the "conversion" behavior of double equals
    // thanks to SuperSimpleDev @ youtube for his explanation of double and triple equals

// BUT BroCode's using double equals for this lesson is not wrong as we can learn more about this in the future videos
// I just use the triple equals because that's what I'm used to and it's the best practice
// also, I write this note in case you might ask 