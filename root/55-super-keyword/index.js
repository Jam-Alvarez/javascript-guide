
// super = refers to the parent class
// commonly used to invoke constructor of a parent class

// NOTE: if you're wondering what are those commented lines of code
// NOTE: you can directly go to line 49 to better understand what's happening or watch BroCode's tutorial about this

    // here's an example, we have three children class which is the raven, tyrannosaurus and megalodon
    // they all inherit from the animal parent class
    // suppose we have a constructor within each of these child classes
    class Animal {

        // constructor(name, age) {
        //     this.name = name;
        //     this.age = age;
        // }
    }

    class Raven extends Animal {

        constructor (name, age, flySpeed) {
            // so to assign these properties when we instantiate a "Raven" object, let's just assign them using the "this" keyword
            this.name = name;
            this.age = age;
            // super(name, age);
            this.flySpeed = flySpeed;
        }
    }
    
    class Tyrannosaurus extends Animal {
        
        constructor (name, age, runSpeed) {
            this.name = name;
            this.age = age;
            // super(name, age);
            this.runSpeed = runSpeed;
        }
    }
    
    class Megalodon extends Animal {
        
        constructor (name, age, swimSpeed) {
            this.name = name;
            this.age = age;
            // super(name, age);
            this.swimSpeed = swimSpeed;
        }
    }

    // now let's create some of these objects
    // we pass in three properties as well
    const raven = new Raven("Jusetsu", 1000, 150);
    const tRex = new Tyrannosaurus("Rex", 1000, 100);
    const meg = new Megalodon("Meggy", 1000, 200);

    // to test this, let's display their names
    console.log(raven.name);
    console.log(raven.age);
    console.log(raven.flySpeed);
    // and you'll see a "Uncaught Error" right?
    // it said that "Must call super constructor in derived class before accessing 'this'"

    // so if we have any children classes, and those children classes have constructors
    // we would want to invoke the constructor of a parent class
    // one of the reason why this would be useful is that, within each of the constructors is we're repeating some code
    // the name and the age is being repeated but the swim, fly and run speed are all unique to each these classes
    // to promote code reusability, we can call the constructor of a parent class to assign the name and the age properties
    // so that's why there's comment line at the parent class "Animal"

    // now we can remove the name and age property from the children classes
    // and when we construct a new raven object, we will first invoke the super constructor which is the commented line at the children classes
    // this eliminates code repetition



// this is the super keyword