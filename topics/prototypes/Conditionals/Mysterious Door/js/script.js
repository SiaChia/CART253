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

  // Floor
  push();
  stroke("#160e0f");
  strokeWeight(2);
  fill("#251517");
  rect(0, 390, 640, 90);
  pop();

  // Door frame
  push();
  noStroke();
  strokeWeight(2);
  fill("#331d1d");
  rect(190, 70, 260, 330);
  pop();

 // Closed door condition
  if(doorOpen==false){

 // Closed door
 push();
 stroke("#241315");
  strokeWeight(6);
  fill("#472a2a");
  rect(210, 90, doorWidth, doorHeight);
  pop();

 }
}
