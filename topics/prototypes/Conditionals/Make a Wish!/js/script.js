/**
 * Make a Wish!
 * Athanasia (Sia) Iliopoulos 
 * 
 * This is a birthday cake where you can blow out a candle on your birthday and make a wish.
 * 
 */

"use strict";
// Variables for the flame
let flamesize = 35; 

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
}