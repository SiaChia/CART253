/**
 * Grow a Pumpkin!
 * Athanasia (Sia) Iliopoulos 
 * 
 * This is a mini game where you have to grow a pumpkin by scrolling. You will have 10 seconds to grow the pumpkin. 
 * 
 */

  // Pumpkin size
 let pumpkinSize = 100;

"use strict";

/**
 * This will be the canvas for the growing pumpkin game. 
*/
function setup() {
createCanvas(640, 500);
}


/**
 * This will be the drawing of the pumpkin and the backrgoudn colour. 
*/
 function draw() {
 //Background colour
    background("#87c9ff");

    //Pumpkin
    push();
    noStroke()
    fill("#eb6912");
    ellipse(320, 280, pumpkinSize, pumpkinSize * 0.8);
    pop(); 
 
    
 



}