
// two ways to create this practice program to find the hypotenuse of a "right angled triangle"

// 1. accept user input through window prompt

    // first, let's declare a three variables for side a, b and c
    let a;
    let b;
    let c;
    
    // let's accept some user inputs for sides a and b

    // remember, when we accept user input, it will always be a string so we have to convert it to a number
    // a = window.prompt('Enter side A');
    // a = Number(a);

    // b = window.prompt('Enter side B');
    // b = Number(b);

    // now for the formula
    // first let's square sides a and b and add them together, then c will contain them
    // c = Math.pow(a, 2) + Math.pow(b, 2);
    // then we need to square all of this Math that we did and that equals to c
    // c = Math.sqrt(c);
    
    // here is a much shorter code and only takes one line
    // c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    // then let's display it
    // console.log("Side C:", c);



//  2. accept user input through html markups

    // let's use the three variable that we declared above
    
    document.getElementById('submit-btn')
        .onclick = function() {
            // this time we'll use dom, don't worry if you still don't know this, you can just copy this for the meantime
            // we'll discuss dom at the later projects

            // note: when we accept user input, its normally a string, so let's convert it
            // but if you know html, we can just change the type of the input from "text "into "number" so that we don't have to convert it
            // but for this project let's just follow this first
            a = document.getElementById('label-a-textbox').value;
            a = Number(a);

            b = document.getElementById('label-b-textbox').value;
            b = Number(b);
            
            // let's just copy the code that we create above for the formula
            c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

            // now let's update the innerHTML of the id label-c
            document.getElementById('label-c').innerHTML = "Side C: " + c;
        }



// and that's it!
