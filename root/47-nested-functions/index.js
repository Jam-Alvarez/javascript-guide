
// nested functions = functions inside other functions
// outer functions have access to inner functions 
// inner functions are "hidden" from outside the outer function
// used in closures (future topic)

    // let's begin, we'll use traditional functions and then create some nested functions

    let userName = "Moonbami";
    let userInbox = 0;

        // login();

        // function login() {
        //     displayUserName();
        //     displayUserInbox();
        // }

        // function displayUserName() {
        //     console.log(`Welcome ${userName}!`);
        // }

        // function displayUserInbox() {
        //     console.log(`You have ${userInbox} new messages`);
        // }

    // the problem with this, we have access to displayUserName and displayUserInbox function from outside of the login function
    // meaning that we don't need to login in order to display our username and our inbox
    // so we can call our functions directly, and there's no need to even login

    // so to add a little bit of data security, we could place those functions within another functions
    // so in order to acces to displayUserName and displayUserInbox function, we have to login first

    login();

    function login() {
        displayUserName();
        displayUserInbox();

        function displayUserName() {
                console.log(`Welcome ${userName}!`);
            }
        function displayUserInbox() {
                console.log(`You have ${userInbox} new messages`)
            }
    }
    // now if we try to call the "display" functions when they're nested, it will error because we don't have access to it
    // this adds some security

    // so in order to call the "display" functions, we have to login first (in this example, we call the "login()" function)



// this is the nested functions