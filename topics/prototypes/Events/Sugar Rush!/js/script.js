/**
 * Sugar Rush! 
 * Athanasia (Sia) ILiopoulos
 * 
 * This will be a mini game to click as many cookies as you can before the timer runs out. 
 * 
 */

"use strict";

// Variables for cookie game
let gameStarted = false;
let cookiesClicked = 0;
let timeLeft = 10;
let startTime;
let gameOver = false;

// Cookie variables
let cookie1 = true;
let cookie2 = true;
let cookie3 = true;
let cookie4 = true;
let cookie5 = true;
let cookie6 = true;
let cookie7 = true;
let cookie8 = true;
let cookie9 = true;
let cookie10 = true;

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

    if (gameStarted === false) {

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

    } else {

        // Time Left for countdown
        if (gameOver === false) {
            timeLeft = 10 - (millis() - startTime) / 1000;

            if (timeLeft <= 0) {
                timeLeft = 0;
                gameOver = true;
            }
        }

        // Timer
        push();
        textFont("monospace");
        textAlign(CENTER, CENTER);
        noStroke();
        fill("#673b1f");
        textSize(32);

        if (gameOver === false) {
            text(ceil(timeLeft), 250, 40);
        } else {
            text("Time's up!", 250, 40);
        }
        pop();

        // Draw cookies while game is run
        if (gameOver === false) {

            if (cookie1 === true) {
                drawCookie(90, 130);
            }

            if (cookie2 === true) {
                drawCookie(250, 130);
            }

            if (cookie3 === true) {
                drawCookie(410, 130);
            }

            if (cookie4 === true) {
                drawCookie(130, 260);
            }

            if (cookie5 === true) {
                drawCookie(350, 320);
            }

            if (cookie6 === true) {
                drawCookie(250, 400);
            }

            if (cookie7 === true) {
                drawCookie(80, 390);
            }

            if (cookie8 === true) {
                drawCookie(420, 390);
            }

            if (cookie9 === true) {
                drawCookie(170, 190);
            }

            if (cookie10 === true) {
                drawCookie(330, 190);
            }
        }
    }
}
/** *
 * Draw Cookies
 */
function drawCookie(x, y) {
    push();
    noStroke();

    // Cookie base
    fill("#c68b59");
    circle(x, y, 70);

    // Chocolate chips
    fill("#4b2918");
    circle(x - 20, y - 10, 15);
    circle(x + 10, y - 18, 9);
    circle(x + 18, y + 8, 20);
    circle(x - 8, y + 18, 9);
    circle(x - 22, y + 10, 8);

    pop();
}

function mousePressed() {
    // Start the game
    if (gameStarted === false) {
        if (mouseX > 160 && mouseX < 340 &&
            mouseY > 262 && mouseY < 317) {

            gameStarted = true;
            startTime = millis();

        }
    }
    // Click cookies to make them disappear
    else if (gameOver === false) {

        if (cookie1 === true &&
            dist(mouseX, mouseY, 90, 130) < 35) {
            cookie1 = false;
        }

        if (cookie2 === true &&
            dist(mouseX, mouseY, 250, 130) < 35) {
            cookie2 = false;
        }

        if (cookie3 === true &&
            dist(mouseX, mouseY, 410, 130) < 35) {
            cookie3 = false;
        }

        if (cookie4 === true &&
            dist(mouseX, mouseY, 130, 260) < 35) {
            cookie4 = false;
        }

        if (cookie5 === true &&
            dist(mouseX, mouseY, 350, 320) < 35) {
            cookie5 = false;
        }

        if (cookie6 === true &&
            dist(mouseX, mouseY, 250, 400) < 35) {
            cookie6 = false;
        }

        if (cookie7 === true &&
            dist(mouseX, mouseY, 80, 390) < 35) {
            cookie7 = false;
        }

        if (cookie8 === true &&
            dist(mouseX, mouseY, 420, 390) < 35) {
            cookie8 = false;
        }

        if (cookie9 === true &&
            dist(mouseX, mouseY, 170, 190) < 35) {
            cookie9 = false;
        }

        if (cookie10 === true &&
            dist(mouseX, mouseY, 330, 190) < 35) {
            cookie10 = false;
        }
    }
}




