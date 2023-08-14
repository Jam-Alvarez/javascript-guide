
let x = 3.15;
let y = 5;
let z = 9;

let maximum;
let minimum;

// we can use the object called "Math" if we want to do some mathematical things in our numbers
// as for this example, we use method .round to round up or down what value that we passed
x = Math.round(x);
console.log(x);

// the method .floor will always round a number down even if the let x is 3.99 or even if the number is super close to  being round up
x = Math.floor(x);
console.log(x);

// meanwhile, the method .ceil is the opposite of the method .floor
// this rounds up even if the number is super close to being round down
// this is almost a self
x = Math.ceil(x);
console.log(x);

// you can also raise value to a given power by using .pow
// in the parenthesis, you'll give a base and an exponent each is seperated with a comma
x = Math.pow(x, 3);
console.log(x);

// .to find a square root, you can use .sqrt
x = Math.sqrt(x);
console.log(x);

// to find an absolute value, you can use .abs
// the absolute value is the distance away from zero
// if x is a negative, the distance away from zero would result in a positive number
x = Math.abs(x);
console.log(x);


// the .max method will find which one is the maximum number in the variables that you pass into the parenthesis
maximum = Math.max(x, y, z);
console.log(maximum);

// then there's also .min which will find the minimum number in the variables 
minimum = Math.min(x, y, z);

console.log(minimum);


// there are also something we called "built in constants" here in Math too
// by using .PI, were assigning x to be a PI
x = Math.PI;

console.log(x);

