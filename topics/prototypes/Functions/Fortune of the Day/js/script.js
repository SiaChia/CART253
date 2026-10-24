/**
 * Fortune of the Day
 * Athanasia (Sia) Iliopoulos 
 * 
 * This will be a magic fortune telling ball that well tell you your new fortune everyday. 
 * 
 */

"use strict";

// Variables for crystal ball 
let ballX = 300;
let ballY = 250;
let ballSize = 400;


/**
 * This will be the canvas setup for my magic fortune ball
*/
function setup() {
    createCanvas(600, 600);
}


/**
 * This will be my drawing of the magic fortune ball and background
*/
function draw() {
    background("#f39cfd");

    // Draw the crystal ball

    drawCrystalBall(ballX, ballY, ballSize);
}

/**
 * Draw the crystal ball
 */
function drawCrystalBall(x, y, size) {
    // Outer glow
    push();
    stroke("#ffa8f1");
    fill("#7546A8");
    ellipse(x, y, size + 20, size + 20);

    // Main ball
    fill("#A879E8");
    ellipse(x, y, size, size);

    // Light reflection
    fill("#DCC5FF");
    ellipse(x - size / 4, y - size / 4, size / 4, size / 4);
    pop();
}
