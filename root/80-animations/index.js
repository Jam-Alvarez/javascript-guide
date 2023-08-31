
const btnElement = document.querySelector('#js-btn');
const animationElement = document.querySelector('#js-div');

btnElement.addEventListener('click', scaleAnimation);

function diagonalAnimation() {
    let timerId = null;
    let x = 0;
    let y = 0;

    timerId = setInterval(frame, 5);

    function frame() {
        if(x >= 800 || y >= 800) {
            clearInterval(timerId);
            diagonalAnimation();
        }
        else {
            x++;
            y++;
            animationElement.style.left = x + "px";
            animationElement.style.top = y + "px";
        }
    }

}

function rotateAnimation() {
    let timerId = null;
    let degrees = 0;

    timerId = setInterval(frame, 5);

    function frame() {
        if(degrees >= 360) {
            clearInterval(timerId);
            rotateAnimation();
        }
        else {
            degrees++;
            animationElement.style.transform = "rotateZ("+degrees+"deg)";
        }
    }

}

function fullAnimation() {
    let timerId = null;
    let degrees = 0;
    let x = 0;
    let y = 0;


    timerId = setInterval(frame, 5);

    function frame() {
        if(x >= 800 || y >= 800) {
            clearInterval(timerId);
            fullAnimation();
        }
        else {
            degrees++;
            animationElement.style.transform = "rotateZ("+degrees+"deg)";
            x++;
            y++;
            animationElement.style.left = x + "px";
            animationElement.style.top = y + "px";
        }
    }

}

function scaleAnimation() {
    let timerId = null;
    let scaleX = 1;
    let scaleY = 1;

    timerId = setInterval(frame, 5);

    function frame() {
        if(scaleX >= 2 || scaleY >= 2) {
            clearInterval(timerId);
            scaleAnimation();
        }
        else {
            scaleX += 0.01;
            scaleY += 0.01;
            animationElement.style.transform = "scale("+scaleX+","+scaleY+")";
        }
    }

}



// these are few simple animations