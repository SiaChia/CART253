/**
 * Grow a Pumpkin!
 * Athanasia (Sia) Iliopoulos 
 * 
 * This is a mini game where you have to grow a pumpkin by scrolling. You will have 5 seconds to grow the pumpkin. 
 * 
 */

  // Pumpkin size
 let pumpkinSize = 100;

 // Game screen variables
 let gameStarted = false;
 let gameOver =false;
 let won = false;

 // Timer 
 let startTime = 0;
 let timeLeft = 5; 

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
    stroke("#963b00");
    fill("#eb6912");
    ellipse(320, 280, pumpkinSize, pumpkinSize * 0.8);
    pop(); 

  // Lines on the pumpkin
     noFill();
     stroke("#963b00");
     strokeWeight(3); 
     arc(320, 280, pumpkinSize * 0.3, pumpkinSize * 0.8, HALF_PI, PI + HALF_PI);
     arc(320, 280, pumpkinSize * 0.6, pumpkinSize * 0.8, HALF_PI, PI + HALF_PI);
     arc(320, 280, pumpkinSize * 0.3, pumpkinSize * 0.8, -HALF_PI, HALF_PI);
     arc(320, 280, pumpkinSize * 0.6, pumpkinSize * 0.8, -HALF_PI, HALF_PI);

    // Pumpkin stem 
    push();
    stroke("#38321e");
    fill("#554c30");
    quad(320 - pumpkinSize * 0.1, 280 - pumpkinSize * 0.35, 320 + pumpkinSize * 0.1, 280 - pumpkinSize * 0.35, 320 + pumpkinSize * 0.06, 280 - pumpkinSize * 0.65, 320 - pumpkinSize * 0.03, 280 - pumpkinSize * 0.7);
    pop(); 
 }
 // Grow pumpkin with mouse wheel 
 function mouseWheel() {
  pumpkinSize = pumpkinSize + 1;
  return false;
 }
 
    
 
