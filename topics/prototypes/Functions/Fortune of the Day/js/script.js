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
let ballY = 360;
let ballSize = 400;

// Variables for the fortune
let fortune1 = "Good luck is coming your way!";
let fortune2 = "A surprise awaits you.";
let fortune3 = "Trust your instincts today.";
let fortune4 = "Someone knows more than what they let on.";
let fortune5 = "Your hard work will pay off.";
let fortune6 = "A creature will run into you and bring you wisdom."
let fortune7 = "The universe recommends taking a break"
let fortune8 = "An unanswered question will soon make sense."
let fortune9 = "You will gain wealth in some way very soon."
let fotune10 = "Someone or something is waiting to be discovered."
let dailyFortune = "";

// Variables for revealing the fortune
let fortuneRevealed = false;
let ballColour = "#A879E8";

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

    // Crystal ball
    drawCrystalBall(ballX, ballY, ballSize);

    // Game instructions 
    drawInstructions(300, 50, 20);

    // Show the fortune inside the ball
    if (fortuneRevealed == true) {
        drawFortune(ballX, ballY, 18);
    }
}

/**
 * Game instructions
 */
function drawInstructions(x, y, size) {
    push();

    fill("#ffffff");
    noStroke();
    textAlign(CENTER, CENTER);
    textFont("monospace");
    textStyle(BOLD);
    textSize(size);

    // First line
    text("Click and drag your mouse across the crystal ball", x, y);

    // Second line
    text("to reveal your fortune!", x, y + 30);

    pop();
}
/**
 * Draw the fortune inside the crystal ball
 */
function drawFortune(x, y, size) {
    push();

    fill("#FFFFFF");
    noStroke();
    textAlign(CENTER, CENTER);
    textFont("monospace");
    textSize(size);

    // Display the fortune
    text(dailyFortune, x - 140, y - 40, 280, 100);

    pop();
}

/**
 * Draw the crystal ball
 */
function drawCrystalBall(x, y, size) {
    // Outer glow
    push();
    stroke("#ffa8f1");
    fill(ballColour);
    ellipse(x, y, size + 20, size + 20);

    // Main ball
    fill("#A879E8");
    ellipse(x, y, size, size);

    // Light reflection
    fill("#DCC5FF");
    ellipse(x - size / 4, y - size / 4, size / 4, size / 4);
    pop();
}









