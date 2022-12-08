let bg;
let y = 0
let trail = [];
let a = 0;

function preload(){
    bg = loadImage("images/preface-background.jpg")
}

function setup() {
    createCanvas(4032,3024)
    background(bg)

}

function draw() {
  background(bg, 10)
  trail.push([mouseX, mouseY]);
  for(let i = 0; i < trail.length; i++) {
  noStroke();
  fill(208, 197, 0, a);
  ellipse(trail[i][0], trail[i][1], 8);
    if(a > 255) {
      trail.shift();
      a = 0;
    }
    a += 8;
  }
  console.log(trail.length);
  
}