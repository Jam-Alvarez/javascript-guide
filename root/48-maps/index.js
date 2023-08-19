
// Map = object that hold key-value pairs of any data type 

    // here's an example
    // let's say we have an online store, we can associate prices with items
    const figurines = new Map([
        // and within this square brackets, we can create key-value pairs
        // add each key-value pair with a set of square brackets and seperate each pair with a comma
        ["Elaina Popup Parade", 10000],
        ["Yumeko Jabami Scale Figure 1/7", 15000],
        ["Miyako Shikimori Scale Figure 1/7", 20000],
        ["Asuna Yuuki Popup Parade", 10000]
    ]);
    // now here is our map object named "figurines"

    // to iterate over the pairs of our map, we can do this using the ".forEach" method
    figurines.forEach((price, figurineName) => console.log(`Your order is ${figurineName} with a price of PHP.${price}`));
    // this line will iterate and display each pair of our map

    // if we need to get any of the items in our map like we're making a purchase
    // there is a "get" method
    // let's first create a variable to store the prices that we're gonna add
    let cart = 0;

    // if we would like to buy one of the items (figurines), there's an associated price and we just need to acces the value
    // first let's take our cart and increment it
    // to access the values of our map (figurines) let's type the name of the map "figurines" and the ".get" method alongside the key (or the string)
    cart += figurines.get("Elaina Popup Parade"); 
    cart += figurines.get("Yumeko Jabami Scale Figure 1/7"); 
    cart += figurines.get("Miyako Shikimori Scale Figure 1/7"); 
    cart += figurines.get("Asuna Yuuki Popup Parade"); 
    // let's say we buy all of the figurines
    
    // let's display our cart
    console.log(cart);

    // here's another method; the ".set" method in which we can add a pair to our map
    figurines.set("Kita Ikuyo Popup Parade", 15000);

    // another method; the ".delete" method in which we can delete pair
    figurines.delete("Kita Ikuyo Popup Parade");

    // another method; the ".has" method in which we can check if there's a key within our map
    // note: this will return a boolean value so let's display this using our console just for this example
    console.log(figurines.has("Asuna Yuuki Popup Parade"));

    // last one; the ".size" property in which this will get the amount of pairs within our map
    // let's use console to display it
    console.log(figurines.size);



// this is the Map