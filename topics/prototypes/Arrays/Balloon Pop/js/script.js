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