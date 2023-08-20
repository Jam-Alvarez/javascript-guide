
// inheritance = a child class that cna inherit all of the methods and properties from another/parent class

    // let's see how is this going to be useful
    // our job is to create three classes for raven, tyrannosaurus and megalodon

    class Animal {
        alive = true;

        eat() {
            console.log(`This ${this.name} is eating`);
        }
        sleep() {
            console.log(`This ${this.name} is sleeping`);
        }
    }
        // NOTE: if you're wondering what's the "extends" keyword and the "Animal" class above doing here
        // NOTE: you can go to line 47 directly to understand what's happening

    class Raven extends Animal { 
        
        name = "raven";

        fly() {
            console.log(`This ${this.name} is flying`);
        }
    }

    class Tyrannosaurus extends Animal { 
        
        name = "tyrannosaurus";

        run() {
            console.log(`This ${this.name} is running`);
        }
    }

    class Megalodon extends Animal { 
        
        name = "megalodon";

        swim() {
            console.log(`This ${this.name} is swimming`);
        }
    }

    // now we have three separate classes
    // but with programming, we don't like to repeat code
    // we're repeating quite a lot of code within each of these classes
    // each class has an identical "eat" and "sleep" method as well as an "alive" boolean variable
    // so to eliminate the need for us to repeat some these code
    // we can simply create a class and all of these individual animal classes can inherit some properties and methods from that one class

    // this will the the PARENT class meanwhile the raven, tyrannosaurus and megalodon will be children classes
    // NOTE: that's why you're seeing "extends" keyword followed by our parent class

    // now any properties or methods that all of the children classes have in common, we can put it within the parent class
    // and if there's any properties and methods that are unique to those children classes, you should keep it within the children classes
    // reminder: make sure the PARENT class is above the children classes



    // now let's create some animal objects
    const jusetsu = new Raven();
    const rex = new Tyrannosaurus();
    const michael = new Megalodon();

    // let's make sure if each of these children classes have access to the properties and methods from the parent class
    console.log(jusetsu.alive);
    jusetsu.eat();
    jusetsu.sleep();
    jusetsu.fly();



// so this is the inheritance