/**
 * Bone Quest 
 * Athanasia (Sia) Iliopoulos 
 * 
 * This will be a mini game of a dog on a quest trying to find his bone. 
 * 
 */

"use strict";


// Variables for dog 
let dogX = 500;
let dogY = 80;
let dogSpeed = 10;

// Bone Variables
let boneX = 150;
let boneY = 250;

// Game variables 
let gameStarted = false;
let bonefound = false;


/**
 * Canvas setup for dog trying to find a bone 
*/
function setup() {
    createCanvas(500, 500)
}

/**
 * This will be the colour of my background and the drawing of the dog and the bone
*/
function draw() {
    // Background colour 
    background("#54b44c")

    //Title screen
    if (gameStarted === false) {

        //Title screen text settings
        push();
        textAlign(CENTER, CENTER);
        noStroke();
        fill("#131e15");

        // Game Title
        textFont("monoSpace")
        textSize(40);
        text("BONE QUEST", 250, 80);

        // Game description
        textFont("monospace");
        textSize(18);
        text("Help the dog find its bone!", 250, 120);

        // Start Instructions
        textFont("monospace")
        textSize(18);
        text("CLick to Start", 250, 150)



        pop();





    }




}