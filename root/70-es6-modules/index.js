
// the idea behind a module is that it's a file of reusable code
// we can import sections of pre-written code to use whenever we want
// great for any general utility values and functions
// helps to make your code more reusable and maintainable
// think of modules as separate chapters of book



// import {PI, getCircumference, getArea} from "./math_util.js";
import * as MathUtil from "./math_util.js";

console.log(MathUtil.PI);

let circumference = MathUtil.getCircumference(15);
console.log(circumference);

let area = MathUtil.getArea(15);
console.log(area);



// this are modules