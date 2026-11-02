/**
 * Balloon Pop
 * Athanasia (Sia) Iliopoulos
 * 
 * This will be a game where you catch as many balloons as you pop as many balloons as you can before the time runs out. 
 * 
 * 
 */

"use strict";


// Balloon variables
let balloonX = [];
let balloonY = [];
let balloonSize = [];
let balloonSpeed = [];
let balloonColor = [];

let colours = ["#fe698e", "#a37afb", "#FFE066", "#80c0ff", "#85e492"];

// Score
let score = 0;

/**
 * Canvas setup for balloon pop game
 */
function setup() {
    createCanvas(600, 500);

    // Create 5 balloons
    for (let balloonNumber = 0; balloonNumber < 10; balloonNumber++) {
        createBalloon();
    }
}

/**
 * Drawing background and balloons
 */
function draw() {
    background("#000000");

    moveBalloons();
    drawBalloons();
}

/**
 * Create a balloon and store its information
 */
function createBalloon() {
    balloonX.push(random(50, 550));
    balloonY.push(450);
    balloonSize.push(random(40, 70));
    balloonSpeed.push(random(1, 3));
    balloonColor.push(random(colours));
}

/**
 * Draw multiple balloons
 */
function drawBalloons() {

    for (let balloonNumber = 0; balloonNumber < balloonX.length; balloonNumber++) {

        push();
        fill(balloonColor[balloonNumber]);
        noStroke();
        ellipse(
            balloonX[balloonNumber],
            balloonY[balloonNumber],
            balloonSize[balloonNumber],
            balloonSize[balloonNumber]
        );
        pop();
    }
}

/**
 * Move balloons upwards
 */
function moveBalloons() {

    for (let balloonNumber = 0; balloonNumber < balloonX.length; balloonNumber++) {

        // Move balloon upwards
        balloonY[balloonNumber] = balloonY[balloonNumber] - balloonSpeed[balloonNumber];

    }
}

