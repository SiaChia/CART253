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
  background("#001b15");

  // Title
  push();
  textSize(30);
  textAlign(CENTER);
  fill("#b7ffe2");
  text("Make a Wish!", 320, 70);
  pop();
}