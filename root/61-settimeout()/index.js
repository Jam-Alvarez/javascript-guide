
// setTimeout() = invokes a function after a number of milliseconds, asynchronous function (doesn't pause execution)

    // for this example, we're going to be annoying, we're going to spam some alert messages after a given amount of milliseconds
    
    // I like to invoke or call these functions to a given amount of time so let's use the setTimeout() method
    // we can pass in a callback, function expression or an arrow function expression
    let timerOne = setTimeout(firstMessage, 3000);
    let timerTwo = setTimeout(secondMessage, 6000);
    let timerThree = setTimeout(thirdMessage, 9000);
    // first argument is our callback, then a given amount of milliseconds we would like this function to execute
    // it is possible multiple setTimeout() methods executing concurrently

    // if at anytime you want to clear or cancel your setTimeout() method, then you can use the clearTimeout() method
    // for this example, let's link it to a button at our HTML
    document.getElementById('js-button').onclick = () => {
        // this time, we need to pass in the "id" of a timer
        // because when you invoke the setTimeout() method, it will return an id so let's store it in a variable
        // that's why you're seeing there above that it is being saved in a variable
        clearTimeout(timerOne);
        clearTimeout(timerTwo);
        clearTimeout(timerThree);
        alert(`Thank you for saving me - girl's voice`);
        // and once we click the button, it'll cancel other setTimeout() methods
    }

    function firstMessage() {
        alert(`Check out this new waifu!`);
    }
    function secondMessage() {
        alert(`There's a high change that you've never seen her before!`);
    }
    function thirdMessage() {
        alert(`Save your waifu NOW!`);
    }

    // if you need to pass arguments to a function, you can list those after the milliseconds argument

    const item = "Elaina Popup Parade";
    let price = 10000;

    // let's pass these two variable as arguments
    let figureSaleTimer =  setTimeout(figureSale, 10000, item, price);

    // don't forget the parameter since we invoke the function in the setTimeout() method 
    function figureSale(item, price) {
        alert(`Buy this ${item} for PHP.${price}`);
    }



// this is the setTimeout() method