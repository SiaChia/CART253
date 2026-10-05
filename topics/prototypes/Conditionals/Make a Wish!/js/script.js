/**
 * Make a Wish!
 * Athanasia (Sia) Iliopoulos 
 * 
 * This is a birthday cake where you can blow out a candle on your birthday and make a wish.
 * 
 */

"use strict";
// Variables for the flame
let candleblownout = false; 

/**
 * Canvas for the birthday cake. 
*/
function setup() {
  createCanvas(640, 400);
}


/**
 * Drawing of cake and candle being blown out. 
*/
function draw() {

 // Background color 
  background("#f6c6d8");

  // Title
  push();
  textSize(30);
  textAlign(CENTER);
  stroke("#ff43b0");
  strokeWeight(2);
  fill("#2e1c1c");
  text("Make a Wish!", 320, 70);
  pop();

  // Cake 
  push();
  fill("#421b1b");
  stroke("#5c2938");
  strokeWeight(5);
  rect(140, 245, 360, 200);
  pop();

  // Cake icing
  push();
  fill("#f8e6ee");
  noStroke();
  rect(125, 225, 390, 45, 50);
  rect(130, 325, 380, 35, 50);

  // Icing drips
  ellipse(170, 255, 60, 60);
  ellipse(320, 255, 60, 60);
  ellipse(470, 255, 60, 60);
  pop();

  // Sprinkles
  push();
  strokeWeight(4);

  // Pink
  stroke("#e85d8a");
  line(160, 240, 170, 245);
  line(280, 245, 290, 240);
  line(420, 240, 430, 245);

  // Blue
  stroke("#6bb7d9");
  line(200, 250, 210, 245);
  line(350, 240, 360, 245);
  line(470, 250, 480, 245);

  // Yellow
  stroke("#f5c542");
  line(240, 235, 250, 240);
  line(390, 250, 400, 245);
  pop();
}

  