const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth - 1035;
canvas.height = 500;
const ctx = canvas.getContext('2d')


//General Variables
const toolbox = document.querySelector('.toolbox');
let add = document.getElementById('increase');
let remove = document.getElementById('decrease');
let int = document.getElementById('size')
let colorBar = document.getElementById('color');
let clear = document.getElementById('clear');
let draw = document.getElementById('draw');


let size = 0;
let isPressed = false;
let color;
let x;
let y;

//Function_ChangeColor
function changeColor() {
 let selectColor = colorBar.value;
 color = selectColor;
 draw.style.color = selectColor
}


//Event_Click-increase
add.addEventListener('click', () => {
 size += 1;
 int.innerHTML = size;
});

//Event_Click-decrease
remove.addEventListener('click', () => {
 size -= 1;
 if (size <= 0) {
  size = 0;
 }
 int.innerHTML = size;
});


//Event_mousedown
canvas.addEventListener('mousedown', (e) => {
 isPressed = true;
 x = e.offsetX;
 y = e.offsetY;
})

//Event_mousedown
canvas.addEventListener('mousedown', (e) => {
 isPressed = true;
 x = e.offsetX;
 y = e.offsetY;
})

//Event_mousedown
canvas.addEventListener('mouseup', (e) => {
 isPressed = false;
 x = undefined;
 y = undefined;
})

//Event_mousemove
canvas.addEventListener('mousemove', (e) => {
 if (isPressed) {
  const x2 = e.offsetX
  const y2 = e.offsetY
  drawCircle(x2, y2)
  drawLine(x, y, x2, y2)
  x = x2
  y = y2
 }
})

// drawCircle-function
function drawCircle(x, y) {
 ctx.beginPath();
 ctx.arc(x, y, size, 0, Math.PI * 2)
 ctx.fillStyle = color;
 ctx.fill()
}

//drawLine-function
function drawLine(x1, y1, x2, y2) {
 ctx.beginPath();
 ctx.moveTo(x1, y1)
 ctx.lineTo(x2, y2)
 ctx.strokeStyle = color
 ctx.lineWidth = size * 2;
 ctx.stroke()
}

function clearColor() {
 ctx.fillStyle = '#f5f5f5';
 ctx.clearRect(0, 0, canvas.width, canvas.height);
 ctx.fillRect(0, 0, canvas.width, canvas.height)
}