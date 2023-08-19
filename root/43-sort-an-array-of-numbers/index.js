
// this time, let's sort an array of numbers using JavaScript

    // let's say we're a teacher and we have all of the students grades
    // our task is to sort our students grades in either ascending or descending order

    // first let's create an array of student's grades
    let studentGrades = [1, 1.25, 1.75, 2, 2.5, 3, 4, 5];

    // now let's create a function that will be used as a callback to sort these numbers in descending order
    function descendSort(x, y) {
        return y - x;
        // this will compare two values at a time
    }
    // let's also create the ascending order version
    function ascendSort(x, y) {
        return x - y;
    }

    // now to sort the array and to use the function as a callback
    // let's reassign "studentGrades" array equal to itself and the ".sort" method and pass in the callback
    studentGrades = studentGrades.sort(ascendSort);

    // and let's display the grades
    studentGrades.forEach(print);

    function print(display) {
        console.log(display);
    }



// this is how to sort an array of numbers