/**
 * Balloon Pop
 * Athanasia (Sia) Iliopoulos
 * 
 * This will be a drawing where you can pop ballloons before they dissapear.  
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

// Colours for balloon (randomly selected)
let colours = ["#fe698e", "#a37afb", "#FFE066", "#80c0ff", "#85e492"];

// This is to make balloon dissapear when clicked
let balloonVisible = [];


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
    balloonVisible.push(true);
}

/**
 * Draw multiple balloons
 */
function drawBalloons() {

    for (let balloonNumber = 0; balloonNumber < balloonX.length; balloonNumber++) {

        if (balloonVisible[balloonNumber] === true) {

            push();
            fill(balloonColor[balloonNumber]);
            noStroke();
            ellipse(
                balloonX[balloonNumber],
                balloonY[balloonNumber],
                balloonSize[balloonNumber],
                balloonSize[balloonNumber]
            );

            // Draw balloon string
            stroke("#f6f0f0");
            strokeWeight(2);

            line(
                balloonX[balloonNumber],
                balloonY[balloonNumber] + balloonSize[balloonNumber] / 2,
                balloonX[balloonNumber],
                balloonY[balloonNumber] + balloonSize[balloonNumber] + 40
            );

            pop();
        }
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

/**
* Check if a balloon is clicked
*/
function mousePressed() {

    for (let balloonNumber = 0; balloonNumber < balloonX.length; balloonNumber++) {

        // Check if mouse is touching the balloon
        if (
            balloonVisible[balloonNumber] === true &&
            mouseX > balloonX[balloonNumber] - balloonSize[balloonNumber] / 2 &&
            mouseX < balloonX[balloonNumber] + balloonSize[balloonNumber] / 2 &&
            mouseY > balloonY[balloonNumber] - balloonSize[balloonNumber] / 2 &&
            mouseY < balloonY[balloonNumber] + balloonSize[balloonNumber] / 2
        ) {

            // Make balloon disappear
            balloonVisible[balloonNumber] = false;
        }
    }
}
