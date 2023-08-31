
// canvas API = a means for drawing graphics. used for animations, games, data visualization

let canvas = document.querySelector('#js-canvas');
let context = canvas.getContext("2d");

// draw lines
// context.strokeStyle = "brown";
// context.lineWidth = 3;
// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(250, 250);
// context.lineTo(250, 500);
// context.moveTo(500, 0);
// context.lineTo(250, 250);
// context.stroke()

// draw triangle
// context.fillStyle = "brown";
// context.strokeStyle = "blue";
// context.lineWidth = 5;
// context.beginPath();
// context.moveTo(250, 0);
// context.lineTo(0, 250);
// context.lineTo(500, 250);
// context.lineTo(250, 0);
// context.stroke()
// context.fill();

// draw rectangle
// context.lineWidth = 5;
// context.fillStyle = "black";
// context.fillRect(0, 0, 250, 250);
// context.strokeStyle = "yellow";
// context.strokeRect(0, 0, 250, 250)

// context.lineWidth = 5;
// context.fillStyle = "gray";
// context.fillRect(0, 250, 250, 250);
// context.strokeStyle = "blue";
// context.strokeRect(0, 250, 250, 250)

// context.lineWidth = 5;
// context.fillStyle = "green";
// context.fillRect(250, 250, 250, 250);
// context.strokeStyle = "red";
// context.strokeRect(250, 250, 250, 250)

// context.lineWidth = 5;
// context.fillStyle = "purple";
// context.fillRect(250, 0, 250, 250);
// context.strokeStyle = "pink";
// context.strokeRect(250, 0, 250, 250)

// draw circle
// (x, y, r, sAngle, eAngle, counterclockwise)
// context.fillStyle = "lightpink";
// context.strokeStyle = "darkblue";
// context.lineWidth = 5;
// context.beginPath();
// context.arc(250, 250, 150, 0, 2 * Math.PI);
// context.fill();
// context.stroke();

// draw text
context.font = "30px Cascadia Mono";
context.fillStyle = "green";
context.textAlign = "center";
context.fillText("This is the canvas API!", canvas.width / 2, canvas.height / 2);



// these are the few simple shapes along with text that you can draw on a canvas