/**
 * Baloon Pop
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
 *  * Canvas setup for balloon pop game
*/
function setup() {
    createCanvas(600, 500);
}


/**
 * Drawing for balloon pop game and background
*/
function draw() {
    background("#8ecaff");
}

function createBalloon() {
    balloonX.push(random(50, 550)); // Random x position for the balloon
    balloonY.push(550); // Start the balloon at the bottom of the canvas
    balloonSize.push(random(40, 70)); // Random size for the balloon
    balloonSpeed.push(random(1, 3)); // random speed for the balloon
    balloonColour.push(random(colours)); // Random colours from the colours I chose earlier

}