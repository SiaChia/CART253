/**
 * A Windy Fall Day
 * Athanasia (Sia) Iliopoulos
 * 
 * This will be an interactive fall scene where you drag your mouse to change the direction of fall leaves in the wind
 * 
 */

"use strict";

// Leaf variables
let leaves = [];

// Wind direction
let wind = 1;

/**
 * Canvas setup for scene
*/
function setup() {
    // Canvas
    createCanvas(640, 480);

    // Create leaves
    for (let i = 0; i < 100; i++) {
        createLeaf();
    }
}


/**
 * Drawing of fall scene
*/
function draw() {
    // Background 
    background("#ef8860");

    // Forest trees
    drawTree(0, 100, 120);
    drawTree(250, 80, 140);
    drawTree(520, 100, 120);


}
/**
 * Creates a leaf
 */

function createLeaf() {
    let leaf = {
        x: random(0, 800),
        y: random(0, 400),
        size: random(10, 25),
        speed: random(1, 3)
    };

    leaves.push(leaf);
}

/**
 * Draws large forest trees
 */
function drawTree(x, y, size) {
    push();

    // Tree trunk
    fill("#4b1d00");
    noStroke();
    rect(x, y, size, 480);

    // Tree top
    fill("#a0330f");
    noStroke();
    circle(x + size / 2, y, size * 3);

    pop();
}

