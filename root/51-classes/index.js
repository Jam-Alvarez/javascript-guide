
// class = a blueprint for creating objects
// define what properties and methods they have
// use a constructor for unique properties

// let's discuss constructor in the next topic

    // this time let's create a "player" class as a blueprint and create some player objects
    // to create a class, just type class and it's identifier with curly braces
    class Player {
        // now we can define properties and methods that all player objects will have, it's a blueprint
        score = 0;

        pause() {
            // when you declare a method within a class, you don't necessarily need the "function" keyword
            console.log("You Paused The Game");
        }
        exit() {
            console.log("Quitting the game, see you next time!");
        }
    }

    // now to utilize this class to create a player object, let's use the "new" keyword followed by the class name and a set of parenthesis
    // 
    const playerOne = new Player();

    // we can reuse this class to create multiple players
    // we can keep on reusing this class as much as we like
    const playerTwo = new Player();
    const playerThree = new Player();
    const playerFour = new Player();
    const playerFive = new Player();



// this is the class