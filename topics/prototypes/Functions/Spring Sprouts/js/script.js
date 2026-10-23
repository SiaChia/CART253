/**
 * Spring Sprouts 
 * Athanasia (Sia) Iliopoulos
 * 
 * This will be an interactive plant that you grow until it turns into a flower. 
 * 
 */

"use strict";

// Plant variable
let plantSize = 50;

// Rain Variables
let rainY = 120;
let rainY2 = 130;
let rainY3 = 160;
let rainY4 = 145;
let rainY5 = 155;
let rainFalling = false;

// Flower Variable 
let flowerSize = 50;
let flowerGrew = false

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

    // Make the Cloud Rain
    if (rainFalling == true) {

        // Draw the Raindrops
        drawRaindrop(210, rainY, 25);
        drawRaindrop(230, rainY2, 25);
        drawRaindrop(250, rainY3, 25);
        drawRaindrop(270, rainY4, 25);
        drawRaindrop(290, rainY5, 25);

        // Check if Rain Touches the Flower
        if (rainY >= 270 && rainY <= 300 && flowerGrew == false) {
            flowerSize = flowerSize + 10;
            flowerGrew = true;
        }

        // Make the Raindrops Fall
        rainY = rainY + 2;
        rainY2 = rainY2 + 2;
        rainY3 = rainY3 + 2;
        rainY4 = rainY4 + 2;
        rainY5 = rainY5 + 2;

        // Check if the Raindrops Reach the Ground
        if (rainY >= 330) {
            rainFalling = false;

            // Reset the Raindrops
            rainY = 150;
            rainY2 = 130;
            rainY3 = 160;
            rainY4 = 140;
            rainY5 = 155;
        }
    }

    // Draw the Flower
    drawFlower(250, 270, flowerSize);

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

    // Bottom part of the Cloud
    ellipse(x, y + size * 0.1, size * 1.2, size * 0.40);

    // Fluffy Cloud Bumps
    ellipse(x - size * 0.35, y, size * 0.5, size * 0.5);
    ellipse(x - size * 0.15, y - size * 0.15, size * 0.6, size * 0.65);
    ellipse(x + size * 0.15, y - size * 0.2, size * 0.65, size * 0.7);
    ellipse(x + size * 0.4, y, size * 0.5, size * 0.5);
    pop();
}

// Raindrop Function
function drawRaindrop(x, y, size) {
    push();

    // Raindrop 
    noStroke();
    fill("#3898E8");
    ellipse(x, y, size * 0.5, size);

    pop();
}

// Mouse Pressed Function
function mousePressed() {

    // Start the Rain
    rainFalling = true;
    rainY = 150;
}

// Flower Function
function drawFlower(x, y, size) {
    push();

    // Flower Stem
    stroke("#278443");
    strokeWeight(4);
    line(x, y, x, y + size);

    // Flower Petals
    noStroke();
    fill("#f6f3f3");
    ellipse(x - size * 0.3, y, size * 0.5, size * 0.5);
    ellipse(x + size * 0.3, y, size * 0.5, size * 0.5);
    ellipse(x, y - size * 0.3, size * 0.5, size * 0.5);
    ellipse(x, y + size * 0.3, size * 0.5, size * 0.5);

    // Flower Center
    fill("#f3d265");
    ellipse(x, y, size * 0.35, size * 0.35);

    pop();
}
