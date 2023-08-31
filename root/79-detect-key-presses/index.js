
const boxElement = document.querySelector('#js-div');

window.addEventListener("keydown", moveSet);

let x = 0;
let y = 0;

function moveSet(event) {
    switch(event.key) {
        case "ArrowDown": 
            y += 15; 
            boxElement.style.top = y + "px"; 
            break;
        case "ArrowUp":
            y -= 15;
            boxElement.style.top = y + "px";
            break;
        case "ArrowRight":
            x += 15;
            boxElement.style.left = x + "px";
            break;
        case "ArrowLeft":
            x -= 15;
            boxElement.style.left = x + "px";
            break;
        default: 
            break;
    }
}



// this is how to detect key presses