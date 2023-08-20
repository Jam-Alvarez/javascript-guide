
// constructor = a special method of a class, accepts arguments and assigns properties

    // for this example, let's create a student class
    class Student {
        // to create a constructor, let's just type "constructor" followed by parenthesis and curly braces
        constructor(name, age, grade) {
            // now when we create an object like "Student" object for this example, we can assign some properties
            // let's say each student has a name, age and a grade
            // within the constructor we can assign some of these arguments to properties of this class
            this.name = name;
            this.age = age;
            this.grade = grade;
        }
        // we can also add additional methods outside the constructor
        study() {
            console.log(`${this.name} is studying so much!`);
        }
    }

    // remember that within our constructor we have three parameters
    // that means that we need to pass three arguments (name, age, grade) so that we can assign those properties
    // now let's create student objects
    const studentOne = new Student("Moonbami", 21, 1.25);

    // let's display studentOne
    console.log(studentOne.name);
    console.log(studentOne.age);
    console.log(studentOne.grade);
    studentOne.study();

    // we can reuse the "Student" class as a template to create other students and pass some unique arguments to assign to its properties
    const studentTwo = new Student("Elaina", 20, 1.0);

    console.log(studentTwo.name);
    console.log(studentTwo.age);
    console.log(studentTwo.grade);
    studentTwo.study();

    // let's create a last student
    const studentThree = new Student("Yumeko", 21, 1.0);

    console.log(studentThree.name);
    console.log(studentThree.age);
    console.log(studentThree.grade);
    studentThree.study();

    // as you can see, we can reuse the class to create as many objects as we like



// this is the constructor