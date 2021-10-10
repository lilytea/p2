function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);
}

function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
  stroke(13);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

let num = 60;
let mx = [];
let my = [];

function setup() {
  createCanvas(720, 400);
  noStroke();
  fill(255, 153);
  for (let i = 0; i < num; i++) {
    mx.push(i);
    my.push(i);
  }
}

function draw() {
  background(237, 34, 93);

  // Cycle through the array, using a different entry on each frame.
  // Using modulo (%) like this is faster than moving all the values over.
  let which = frameCount % num;
  mx[which] = mouseX;
  my[which] = mouseY;

  for (let i = 0; i < num; i++) {
    // which+1 is the smallest (the oldest in the array)
    let index = (which + 1 + i) % num;
    ellipse(mx[index], my[index], i, i);
  }
}



let default_imgsrc =
  "https://cdn.glitch.me/2bdcae2a-f5b4-4935-a547-ab96708e9339%2Ftree.png?v=1633826599369";
document.getElementById("button1").addEventListener("mouseover", mouseOver);
document.getElementById("button1").addEventListener("mouseout", mouseOut);
document.getElementById("button1").addEventListener("click", click);

function click() {
  default_imgsrc =
    "https://cdn.glitch.me/2bdcae2a-f5b4-4935-a547-ab96708e9339%2Fcaveman.png?v=1633825153113";
}
function mouseOver() {
  document.getElementById("img").src =
    "https://cdn.glitch.me/2bdcae2a-f5b4-4935-a547-ab96708e9339%2Fcaveman.png?v=1633825153113";
}

function mouseOut() {
  document.getElementById("img").src = default_imgsrc;
}


