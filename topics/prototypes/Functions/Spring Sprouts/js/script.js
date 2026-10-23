/**
 * Spring Sprouts 
 * Athanasia (Sia) Iliopoulos
 * 
 * This will be an interactive plant that you grow until it turns into a flower. 
 * 
 */

"use strict";

/**
 * Canvas for sprouting plant and scene 
*/
function setup() {
    createCanvas(500, 500);
}


/**
 * Background and drawing for the sprouting plant 
*/
function draw() {
    background("#8ddbf6");

    // Draw the Ground
    drawGround(0, 400, 500);

    // Draw the Flowerpot
    drawPot(250, 350, 150);
}

/**
 * Ground Function
 */
function drawGround(x, y, size) {
    // Ground Function
    push();

    // Ground Appearance
    noStroke();
    fill("#78B86A");
    rect(x, y, size, size * 0.2);

    pop();
}


