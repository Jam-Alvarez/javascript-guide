
// let's create a counter program!

    // first let's declare and assign a dynamic "count" variable
    let count = 0;

    // let's use dom for the buttons so that the buttons will do something if we clicked it
    
    document.getElementById('dec-btn')
        .onclick = function() {
            // instead of using count = count - 1;
            count -= 1;
            // let's use this shorthand property IF the variables name used are ONLY the SAME eg: "count = count - 1"

            // now let's change or update our html so it also display what will happen if we click this button and run this function
            // make it equals to our current and updated variable "count"
            document.getElementById('count-label').innerHTML = count;

        }
    document.getElementById('reset-btn')
        .onclick = function() {
            // since this is a reset, we have to go back to 0 so let's just make the "count" variable to 0
            count = 0;

            // then let's just display it
            document.getElementById('count-label').innerHTML = count;

        }
    document.getElementById('inc-btn')
        .onclick = function() {
            // this time, we have to increase the count-label so just change the operator to +
            count += 1;

            // then let's just display it as well
            document.getElementById('count-label').innerHTML = count;

        }
