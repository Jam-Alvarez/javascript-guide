
// window = interface used to talk to the web browser
// the DOM is a property of the window

// console.dir(window);
// console.log("Inner Width: " + window.innerWidth);
// console.log("Inner Height: " + window.innerHeight);

// console.log("Scroll X: " + window.scrollX);
// console.log("Scroll Y: " + window.scrollY);

// console.log(window.location.href);
// window.location.href = "https://youtu.be/gX9m-rCtSqc?si=do2OrQeBC2M0ukuh";
// console.log(window.location.hostname);
// console.log(window.location.pathname);

const jsOpenElement = document.querySelector('#js-open-btn');
jsOpenElement.addEventListener("click", () => window.open("https://youtu.be/gX9m-rCtSqc?si=do2OrQeBC2M0ukuh"));
// when you click this button, it directs you to the link that you put

const jsCloseElement = document.querySelector('#js-close-btn');
jsCloseElement.addEventListener("click", () => window.close());
// when you click this button, this will close the current window

const jsPrintElement = document.querySelector('#js-print-btn');
jsPrintElement.addEventListener("click", () => window.close());
// when you click this button, this print the current page

window.alert("Hello");
window.confirm("Press OK to continue.");
let userAge = window.prompt("Enter you age");
if(userAge >= 18) {
    alert("You are allowed here");
}
else {
    alert("Sorry you are not allowed here");
    window.close();
}



// this is the window object