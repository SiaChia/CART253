/**
 * Sugar Rush! 
 * Athanasia (Sia) ILiopoulos
 * 
 * This will be a mini game to click as many cookies as possible before the timer runs out. 
 * 
 */

"use strict";

// Variables for cookie game
let gameStarted = false;
let cookiesClicked = 0;
let timeLeft = 10;
let startTime;

/**
 * Canvas for cookie game
*/
function setup() {
    createCanvas(500, 500);
}


/**
 * This will be a drawing of my cookie game and background colour
*/
function draw() {
    background("#fd9bb2");

    // Title Screen
    push();
    textAlign(CENTER, CENTER);
    textFont("monospace");
    noStroke();
    fill("#673b1f");
    textSize(48);
    text("Sugar Rush!", 250, 100);
    pop();

    // Game instructions
    push();
    textFont("monospace");
    textAlign(CENTER, CENTER);
    noStroke();
    fill("#754323");
    textSize(18);
    text("Click the cookies before time runs out!", 250, 200);
    pop();

    // Click to start button
    push();
    rectMode(CENTER);
    noStroke();
    fill("#754323");
    rect(250, 290, 180, 55, 15);
    fill("#fd9bb2");
    textFont("monospace");
    textAlign(CENTER, CENTER);
    textSize(20);
    text("Click to Start", 250, 290);
    pop();
}


