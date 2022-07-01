let canvas = document.querySelector('.my-canvas');
let width = canvas.width = 600;
let height = canvas.height = 400;

const context = canvas.getContext('2d');
context.fillStyle = 'rgb(0, 0, 0)';
context.fillRect(0, 0, width, height);

// Reset canvas to black background
function reset() {
    context.fillStyle = 'rgb(0, 0, 0)';
    context.fillRect(0, 0, width, height);
}

context.fillStyle = '#b52e2e';
context.fillRect(70, 70, 120, 80);

context.fillStyle = 'green';
context.fillRect(85, 85, 80, 80);

function rcolor() {
    return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
}

function rnumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

// Draw random rectangles with random colors in random places
// let cinterval = setInterval(() => {
//     let randomX = rnumber(0, 600);
//     let randomY = rnumber(0, 400);
//     let randomW = rnumber(10, 100);
//     let randomH = rnumber(10, 100);

//     context.fillStyle = rcolor();
//     context.fillRect(randomX, randomY, randomW, randomH);
// }, 50);

// setTimeout(() => {
//     clearInterval(cinterval);
// }, 6000);

function degToRad(degrees) {
    return degrees * Math.PI / 180;
}  

// Strokes
context.strokeStyle = 'white';
context.lineWidth = 5;
context.strokeRect(300, 300, 150, 80);

reset();

// Drawing paths
context.fillStyle = 'rgb(255,255,255)';
context.beginPath();
context.moveTo(80, 80);
context.fill();

// Draw a circle
context.fillStyle = 'rgb(200,200,200)';
context.beginPath();
context.arc(150, 106, 50, degToRad(0), degToRad(360), false);
context.fill();

// text
context.strokeStyle = 'white';
context.lineHeight = 1;
context.font = '36px arial';
context.strokeText('Mouad Nassri', 50, 150);
