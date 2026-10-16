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
 
 
  // Game rules for timer 
 if (gameStarted === true && gameOver === false) {
  timeLeft = 5 - floor((millis() - startTime) / 1000);
 
  if (timeLeft <= 0) {
    timeLeft = 0;
    gameOver = true;
    gameStarted = false;
    
    if (pumpkinSize >= 200) {
      won = true;
    } else {
      won = false;
    }
  }
}
 // Game instructions
  push();
 textAlign(CENTER);
  noStroke();
  fill("#263447");

  if (gameStarted === false && gameOver === false) {
    textSize(26);
    text("GROW A PUMPKIN!", 320, 40);
    textSize(16);
    text("Click to start!", 320, 90);
    text("Scroll your mouse wheel to grow the pumpkin.", 320, 65);
  }

  // Timer text
  if (gameStarted === true && gameOver === false) {
    textSize(24);
    text("Time: " + timeLeft, 320, 40);
    textSize(16);
    text("Keep scrolling!", 320, 70);
  }

  // Win or lose message
  if (gameOver === true) {
    textSize(30);

    if (won === true) {
      fill("#245b2a");
      text("YOU WIN!", 320, 90);
     
     } else {
      fill("#9b2222");
      text("You Lose!", 320, 90);

    }

    fill("#263447");
    textSize(16);
    text("Click to play again!", 320, 110);
    pop();
  }
}

// Event to Start or restart the game
function mousePressed() {
  if (gameStarted === false) {
    pumpkinSize = 100;
    timeLeft = 5;
    gameOver = false;
    won = false;
    gameStarted = true;
    startTime = millis();
  }
}

 // Event to grow pumpkin with mouse wheel 
 function mouseWheel() {
  if (gameStarted === true && gameOver === false) {
    pumpkinSize = pumpkinSize + 1;
  
  return false;
 }
 }


 
    
 
