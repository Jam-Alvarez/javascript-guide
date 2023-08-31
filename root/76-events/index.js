
// do something when you "click"
const btnElement = document.getElementById('js-btn');
btnElement.onclick = doSomething; // make sure to not invoke it, this is a callback

// do something when you load web browser
const bodyElement = document.body;
bodyElement.onload = doSomething;

// do something when an element has been changed
const textElement = document.getElementById('js-text');
textElement.onchange = doSomething;

// do something when we move in or out our cursor over the selected element
const divElement = document.getElementById('js-div');
divElement.onmouseover = doSomething;
divElement.onmouseout = doSomethingElse;

// do something when we click and hold our cursor or let go of it on the selected element
divElement.onmousedown = doSomething;
divElement.onmouseup = doSomethingElse;

function doSomething() {
    alert("You clicked me!");
    divElement.style.backgroundColor = "pink";
}

function doSomethingElse() {
    divElement.style.backgroundColor = "lightblue";
}



// these are the few events 