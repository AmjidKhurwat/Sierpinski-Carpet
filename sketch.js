let cnv, p, btn;


function setup() {
  cnv = createCanvas(800,800);
  p = createP("Click to draw a Sierpinski Carpet (Fractal)");
  btn = createButton("Reset");
  btn.position(p.x + p.width + 10, p.y);
  btn.mousePressed(resetFunc);
  background(0);
}

function draw() {

}

function mousePressed() {
  carpet(0, 0, width, 0, 1);
}

function resetFunc() {
  background(0);
}



function carpet(x1, y1, x2, y2, n) {
  let left = x1;
  let right = x2;
  let leftTop = y1;
  let bigWidth = right - left;
  let third = bigWidth / 3;
  let c = n + 1;

  if (c < 8) {
    fill(255);
    stroke(255);
    rect(left + third, leftTop + third, third, third);


    carpet(left, leftTop, left+third, leftTop, c);
    carpet(left+third, leftTop, right-third, leftTop, c);
    carpet(right-third, leftTop, right, leftTop, c);

    carpet(left, leftTop+third, left+third, leftTop+third, c);
    //carpet(left+third, leftTop+third, right-third, leftTop+third, c);
    carpet(right-third, leftTop+third, right, leftTop+third, c);

    carpet(left, leftTop+third+third, left+third, leftTop+third+third, c);
    carpet(left+third, leftTop+third+third, right-third, leftTop+third+third, c);
    carpet(right-third, leftTop+third+third, right, leftTop+third+third, c);
  }
}
