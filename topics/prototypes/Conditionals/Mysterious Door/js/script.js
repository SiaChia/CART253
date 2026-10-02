/**
 * Mysterious Door 
 * Athanasia (Sia) Iliopoulos 
 * 
 * This is a mysterious door that when you click on it, it will open and have creepy eyes on the other side. 
 * 
 */

"use strict";

// Variables for door and eyes 
let doorOpen=false;
let doorWidth=220;
let doorHeight=300;
let eyeSize=20;


/**
 * Sets up the canvas for Mysterious door with creepy eyes.
 */
function setup() {
createCanvas(640, 480);

}


/**
 * Draws the Mysterious door and its creepy eyes.
  */
function draw() {

  // Background colour of canvas 
  background("#412131");

  
  // Title screen thing
  push();
  fill("#c8b8c4");
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(20);
  

  // Floor
  push();
  stroke("#160e0f");
  strokeWeight(2);
  fill("#251517");
  rect(0, 390, 640, 90);
  pop();

  // Door frame
  push();
  stroke("#0e0a09");
  strokeWeight(2);
  fill("#331d1d");
  rect(210, 90, doorWidth, doorHeight);
  pop();

// Door Closed
drawDoorClosed(); {






}


}
