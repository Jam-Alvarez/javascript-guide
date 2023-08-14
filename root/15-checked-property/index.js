
// this time, we're going to play aroung checkboxes and buttons using dom

    // we select the id of the button and make it do something when we "click" on it
    document.getElementById('js-submit-btn')
        .onclick = function() {
            // let's check if the checkbox is checked or not by using if statements

                // if (document.getElementById('js-checkbox').checked) {
                //     console.log('Subscribed!')
                // }
                // else {
                //     console.log('Unsubscribed')
                // }

            // the condition in the "if" statement can be a little difficult to read so let's store elements withing a variable
            const checkBox = document.getElementById('js-checkbox')
            // this will to the same thing above and much easier to read
            if (checkBox.checked) {
                console.log('Subscribed!');
            }
            else {
                console.log("Haven't subscribed yet!");
            }

            // now let's try this again but with radio buttons
            
                // now let's get all of the buttons and store them within a variable
                const visaBtnElement = document.getElementById('js-visa-btn');
                const mastercardBtnElement = document.getElementById('js-mastercard-btn');
                const paypalBtnElement = document.getElementById('js-paypal-btn');

                // using the if else statements, we'll check to see which of these buttons are selected
                if (visaBtnElement.checked) {
                    console.log('You are paying with a Visa.');
                }
                else if (mastercardBtnElement.checked) {
                    console.log('You are paying with a MasterCard.');
                }
                else if (paypalBtnElement.checked) {
                    console.log('You are paying with a PayPal.');
                }
                else {
                    console.log('You must select a payment option.')
                }
        }

// so that is the ".checked" property
// mostly seen in checkboxes and radio buttons
// it lets the computer if the selected variable or property is checked or not by using true or false
