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

  // Door panels
  push();
  noFill();
  stroke("#2c181a");
  strokeWeight(5);
  rect(230, 115, 180, 100);
  rect(230, 235, 180, 125);
  pop();

 // Door knob 
  push();
  fill("#d1a84c");
  stroke("#5c451b");
  strokeWeight(3);
  ellipse(390, 250, 35, 35);
  pop(); 
    
  } else {
 
 // Black inside of the doorway 
  push();
  noStroke();
  fill("#000000");
  rect(210, 90, doorWidth, doorHeight);
  pop();
 
  
 //Creepy eyes 
 // Eyes
  push();
  fill("#eee8e3");
  noStroke();
  ellipse(270, 220, 45, 30);
  ellipse(370, 220, 45, 30);
  pop(); 

 // Pupils
  push();
  noStroke();
  fill("#d80101");
  ellipse(270, 220, 15, 20);
  ellipse(370, 220, 15, 20);
  pop(); 
 }
}
function mousePressed() {
if (mouseX > 210 && mouseX < 430 &&
mouseY > 90 && mouseY < 390) {
doorOpen = true; 
} 

}


