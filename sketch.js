let cnv, p, btn;
let reset = true;
let rCol = false;
let done = false;
let a = [];
let b = [];
let c = [];
let d = [];

const SPEED = 40;


function setup() {
  cnv = createCanvas(windowWidth, windowWidth);
  frameRate(60);
  cnv.mousePressed(mousePrsd);
  p = createP("Click to draw a Sierpinski Carpet (Fractal)");
  btn = createButton("Reset");
  btn.mousePressed(resetFunc);
  rand = createButton("Random Colors: OFF");
  rand.mousePressed(randCol);
  background(0);
}

function draw() {
  if (done) {
    for (let i = 1; i <= SPEED; i++) {
      let x = a.shift();
      let y = b.shift();
      let w = c.shift();
      let h = d.shift();

      let rC = random(255);
      let gC = random(255);
      let bC = random(255);

      if (rCol) {
        fill(rC, gC, bC);
        noStroke();
      } else {
        fill(255);
        noStroke();
      }

      rect(x, y, w, h);
    }
  }
}

function mousePrsd() {
  if (reset) {
    carpet(0, 0, width, 0, 1);
    reset = false;
    done = true;
  }
}

function resetFunc() {
  background(0);
  reset = true;

  a = [];
  b = [];
  c = [];
  d = [];

  done = false;
}

function randCol() {
  rCol = !rCol;
  if (rCol) {
    rand.html("Random Colors: ON");
  } else {
    rand.html("Random Colors: OFF");
  }
}


function carpet(x1, y1, x2, y2, n) {
  let left = x1;
  let right = x2;
  let leftTop = y1;
  let bigWidth = right - left;
  let third = bigWidth / 3;
  let c = n + 1;

  if (c < 8) {

    saveRect(left + third, leftTop + third, third, third);


    carpet(left, leftTop, left+third, leftTop, c);
    carpet(left+third, leftTop, right-third, leftTop, c);
    carpet(right-third, leftTop, right, leftTop, c);
    
    carpet(right-third, leftTop+third, right, leftTop+third, c);
    carpet(right-third, leftTop+third+third, right, leftTop+third+third, c);
    carpet(left+third, leftTop+third+third, right-third, leftTop+third+third, c);
    carpet(left, leftTop+third+third, left+third, leftTop+third+third, c);

    carpet(left, leftTop+third, left+third, leftTop+third, c);
    //carpet(left+third, leftTop+third, right-third, leftTop+third, c);
    

    
    
    
  }
}

function saveRect(x, y, w, h) {
  a.push(x);
  b.push(y);
  c.push(w);
  d.push(h);
}
