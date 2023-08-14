
// a variable is a container for storing data
// a variable as if it was the value that it contains

// two steps:
// 1. declaration (var, let, const)
// 2. assignment (= assignment operator)

let firstName = 'Moonbami'; // strings
let age = 21; // ints or numbers
let isStudentEnrolled = true; // booleans

// if you use comma "," this will automatically put a single space meanwhile if you use "+" you have to manually add space to your string and this will add any variable you plus into a string as well
console.log("Konnichiwa,", firstName + " desu~!"); 
console.log("my age is " + age, "years old");
console.log("Enrolled:", isStudentEnrolled);

// in dom, you can't use comman, instead you have to use plus for concatinating
document.getElementById('p1').innerHTML = "Youkoso! " + firstName;
document.getElementById('p2').innerHTML = "You are! " + age + " years old";
document.getElementById('p3').innerHTML = "Enrolled: " + isStudentEnrolled;



