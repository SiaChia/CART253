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
    drawPot(250, 370, 150);

    // Draw dirt in pot 
    drawDirt(250, 325, 120)

    // Draw the Cloud
    drawCloud(250, 100, 150);
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

// Flowerpot Function
function drawPot(x, y, size) {
    push();

    // Flowerpot Body
    noStroke();
    fill("#C87552");
    ellipse(x, y, size, size * 0.8);

    // Flowerpot Rim
    fill("#A9573B");
    ellipse(x, y - size * 0.3, size * 1, size * 0.2);

    pop();
}

// Dirt Function
function drawDirt(x, y, size) {
    push();

    // Dirt Appearance
    noStroke();
    fill("#65432F");
    ellipse(x, y, size * 0.85, size * 0.15);

    pop();
}
// Cloud Function
function drawCloud(x, y, size) {
    push();

    // Cloud Appearance
    noStroke();
    fill("#FFFFFF");

    // Bottom par of the Cloud
    ellipse(x, y + size * 0.1, size * 1.2, size * 0.40);

    // Fluffy Cloud Bumps
    ellipse(x - size * 0.35, y, size * 0.5, size * 0.5);
    ellipse(x - size * 0.15, y - size * 0.15, size * 0.6, size * 0.65);
    ellipse(x + size * 0.15, y - size * 0.2, size * 0.65, size * 0.7);
    ellipse(x + size * 0.4, y, size * 0.5, size * 0.5);

    pop();
}