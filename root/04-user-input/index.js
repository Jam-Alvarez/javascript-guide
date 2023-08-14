
// how to accept user input



// easy way with a window prompt

    // let username = window.prompt("What's your name?");
    // console.log(username);




// difficult way by using html textbox

    // first, we create a global variable that is empty because we're the ones that will fill it up
    let username;

    // second, we're going to use dom to go to our html document and by using .getElementById, we're selecting a element in our html that has this id
    // then, with the .onclick method, since the the id that we input is a button, this will make sense
    // "onclick", is equals to OR we're going to command the button to do something using function
    document.getElementById('log-in')
        .onclick = function() {
            // using dom and .getElementbyId again, we're now selecting the id and get its value by adding a ,value
            // then we're going to make it equals to username which is empty before
            username = document.getElementById('user-input').value;
            
            // then for us to make sure, we'll display it using console
            console.log(username);

            // lastly, once we're done with the dom above, we're now going to select another id again
            // this time, will add a method called .innerHTML to select the "inner html" of it which is the paragraph tag
            // and make it equals to what is inside of the username now 
            document.getElementById('label').innerHTML = "Welcome " + username;
        };
        
        // all of this will happen when we click the submit button that has a js code inside it which is this one
    