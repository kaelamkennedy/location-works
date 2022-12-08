let bg;
let MAD;
let angleRotate = 0.0;
let images;

function preload() {
  bg = loadImage('grass2000x1200.png');
  MAD = loadFont('MAD-Sans-Fill-Bold.otf');
  img1 = loadImage('closestraw-1.png');
   img2 = loadImage('pond-1.jpg');
   img3 = loadImage('straw-1.jpg');
   img4 = loadImage('reeds-1.png');
   img5 = loadImage('closestraw-2.png');
   img6 =  loadImage('northpond-01.jpg');
   img7 = loadImage('straw-2.jpg');
   img8 = loadImage('reeds-2.png');
   img9 = loadImage('closestraw-3.png');
   img10 = loadImage('pond-3.jpg');
   img11 = loadImage('straw-3.jpg');
   img12 = loadImage('reeds-3.png');
   img13 = loadImage('closestraw-4.png');
   img14 = loadImage('pond-4.jpg');
   img15 = loadImage('straw-4.jpg');
   img16 = loadImage('reeds-4.png');
   img17 = loadImage('closestraw-5.png');
   img18 = loadImage('pond-5.jpg');
   img18 = loadImage('straw-5.jpg');
   img19 = loadImage('reeds-5.png');
   img20 = loadImage('reeds1.png');
   img21 = loadImage('pond-6.jpg');
   img22 = loadImage('straw-6.jpg');
   img23 = loadImage('pond-7.jpg');
   img24 =  loadImage('northpond-02.jpg');
   img25 = loadImage('pond-2.jpg');
   img26 = loadImage('northpond-03.jpg');

   
   images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26];
}

function setup() {
  createCanvas(2000, 1200);
  background(bg);
  textFont(MAD);
  textAlign(LEFT);
}

function draw() {
  textSize(20);
  noStroke()
  text('this road', 250, 200);
  fill(255, 255, 255);
  push();
  let angle2 = radians(90);
  translate(400, 250);
  rotate(angle2);
  text("cuts", 0, 0);
  pop();
  fill(255, 255, 255);
  text('through a pond.', 500, 350);
  fill(255, 255, 255);
  text('the human hand at work', 1200, 250);
  fill(255, 255, 255, 51);
  push();
  let angle3 = radians(90);
  translate(1500,300);
  rotate(angle2);
  text("breaking", 0, 0);
  pop();
  text('a home in half', 1600, 450);
  fill(255, 255, 255, 51);
  text('i stand at the intersection of interference', 1000,1000);
  fill(255, 255, 255);
  push();
  let angle4 = radians(270);
  translate(800,800);
  rotate(angle4);
  text("at least", 0, 0);
  pop();
  text('the view', 850, 650);
  fill(255, 255, 255);
  text('is beautiful', 1000, 600);
  fill(255, 255, 255);
  stroke(255, 255,255)
  line(690, 335, 1160, 245)
  line(1800, 450, 1420, 980)
  line(975, 975, 830, 830)
  
  
//  stroke (180,180,180)
// line(mouseX, mouseY, pmouseX, pmouseY);
}

let imageNumber = 0;
function mousePressed() {
    let currentImage = images[imageNumber];
    image (currentImage, mouseX-(currentImage.width/2), mouseY-(currentImage.height/2));
    imageNumber += 1;
    if (imageNumber == images.length) {
      imageNumber = 0;
    }
  
   
}

 
// this road cuts through a pond. the human hand at work breaking a home in half. i stand at the intersection of interference. at least the view is beautiful. 

