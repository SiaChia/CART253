/**
 * The Witch's Cauldron 
 * Athanasia (Sia) Iliopoulos 
 * 
 * This is a Witch's cauldron that will be bubbling with several different colours spewing out. 
 * 
 */

"use strict";

/**
 * Canvas for the Cauldron 
*/
function setup() {
createCanvas(640, 480);
}


/**
 * Drawing of cauldron spewing out different colours. 
*/
function draw() {

   // Canvas Colour 
  background("#0f1158");

  //Table 
  push();
  stroke("#573726");
  strokeWeight(7); 
  fill("#3d261a"); 
  rect(0, 370, 640, 110);
  pop(); 
}