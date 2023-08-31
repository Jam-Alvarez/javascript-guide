
// .addEventListener (event, function, useCapture)
// you can add many event handlers to one element
// even the same that invokes different functions

const innerDivElement = document.getElementById('js-inner-div');
const outerDivElement = document.getElementById('js-outer-div');

innerDivElement.addEventListener("click", changeBgColor);
outerDivElement.addEventListener("click", changeBgColor, true);

// the third argument or the "useCapture" is if two elements are taking the same space
// and their listening for the same event, you can specify which one has preference by adding "true"

function changeBgColor() {
    this.style.backgroundColor = "green";
}



// this is the .addEventListener() method