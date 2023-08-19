
// let's shuffle the elements of an array in JavaScript
// this would work perfect for a card game

    let cards = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    shuffle(cards);

    console.log(`Current card: ${cards[0]}`);
    cards.forEach(card => console.log(card));

    function shuffle(array) {
        // to shuffle this, we'll begin at the end of the array and get the array's length
        let currentIndex = cards.length;

        while(currentIndex != 0) {
            let randomIndex = Math.floor(Math.random() * array.length);
            currentIndex--;

            let tempStorage = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = tempStorage;
        }
        return array;
    }



// this is one way in which we can shuffle the elements of an array