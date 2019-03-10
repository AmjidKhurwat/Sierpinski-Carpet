let cnv, p, btn;
let reset = true;


function setup() {
  cnv = createCanvas(windowWidth, windowWidth);
  cnv.mousePressed(mousePrsd);
  p = createP("Click to draw a Sierpinski Carpet (Fractal)");
  btn = createButton("Reset");
  btn.mousePressed(resetFunc);
  background(0);
}

function draw() {

}

function mousePrsd() {
  if (reset) {
    carpet(0, 0, width, 0, 1);
    reset = false;
  }
}

function resetFunc() {
  background(0);
  reset = true;
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
