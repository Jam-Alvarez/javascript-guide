
// anonymous objects = objects without a name, not directly reference, less syntax, no need for unique names

    // here's an example, let's create an array of cards
    // each card will be an object which we'll create with a class

    class Card {
        constructor(value, suit) {
            this.value = value;
            this.suit = suit;
        }
    }

    let cardOne = new Card("A", "Hearts");
    let cardTwo = new Card("A", "Spades");
    let cardThree = new Card("A", "Diamonds");
    let cardFour = new Card("A", "Clubs");
    let cardFive = new Card("2", "Hearts");
    let cardSix = new Card("2", "Spades");
    let cardSeven = new Card("2", "Diamonds");
    let cardEight = new Card("2", "Clubs");

    // so we have at least eight cards for this example, let's add these into an array

    let cards = [cardOne, cardTwo, cardThree, cardFour, cardFive, cardSix, cardSeven, cardEight];

    // to access one of these properties of one of these cards, we can do it directly by the object name or by an array element

    // we're accessing this object directly by its name
    console.log(cardOne.suit, cardOne.value);
    // we're accessing this object indirectly via an array index
    console.log(cards[0].suit, cards[0].value);
    
    // there's no need to write these unique names for instantiation
    // if we were to re-write these using some anonymous objects
    // just get rid everything before the "new" keyword
    // this time, we've created eight cards but we have no way to reference them
    // in place of adding some object names directly to our array, when we instantiate a card object, we can actually place that within an array 
    
    let moreCards = [
        new Card("A", "Hearts"), 
        new Card("A", "Spades"), 
        new Card("A", "Diamonds"), 
        new Card("A", "Clubs"), 
        new Card("2", "Hearts"), 
        new Card("2", "Spades"), 
        new Card("2", "Diamonds"), 
        new Card("2", "Clubs")];

    // now in order to access these elements, we have to do the indirect method of it
    // since these objects are within an array, we can reference them by an index number
    console.log(moreCards[1].suit, moreCards[1].value);

    // you can see that this still works and a lot less syntax
    // sometimes it would be impractical to give an object a name if you're never going to reference it directly

    // lastly, let's display all of our cards using forEach method
    
    moreCards.forEach(card => console.log(`${card.suit} ${card.value}`));



// these are the anonymous objects