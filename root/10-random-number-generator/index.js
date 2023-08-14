
// this time, we will create a program that will generate a number for us randomly
// usefull for games especially "gacha" games

    //let's create a random number using .random method and store it in a variable
    // the .random method will generate a random decimal number/s between 0 - 1 ONLY 
        // let x = Math.random();

    // as for this guide, let's say we're rolling a dice, how do we generate a random number between 1 - 6
    // let's multiply Math.random to 6
    // this will give us random decimal number between 0 - 5
        // let y = Math.random() * 6;

    // we can truncate or atleast reduce the decimals by rounding it down using .floor method
    // now this will generate 6 rounded down numbers but from 0 - 5 because computers always start with 0
        // let z = Math.floor(Math.random() * 6) + 1;
    // BUT if we don't want this behaviour from our computer, we can add an offset by adding + 1 
    // now this will generate random number from 1 - 6 as if we're really rolling a dice



    // now let's say we're rolling three dice
    let a = Math.floor(Math.random() * 6) + 1;
    let b = Math.floor(Math.random() * 6) + 1;
    let c = Math.floor(Math.random() * 6) + 1;
    // now this will act as if we're rolling three dice and we will get three random numbers



    // now, when we click the roll button, we will execute a function
    // let's use dom 
    document.getElementById('roll-btn')
        .onclick = function() {
            let x = Math.floor(Math.random() * 6) + 1;
            let y = Math.floor(Math.random() * 6) + 1;
            let z = Math.floor(Math.random() * 6) + 1;

            // after we roll three dices, we have to update our html by using dom again
            // let's use dom for each of the rolled dice
            document.getElementById('dice-1').innerHTML = x;
            document.getElementById('dice-2').innerHTML = y;
            document.getElementById('dice-3').innerHTML = z;

        }

// so this is how we generate random numbers in js