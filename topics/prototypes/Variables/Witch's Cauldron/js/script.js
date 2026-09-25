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
  background("#201811");

  //Table 
  push();
  stroke("#573726");
  strokeWeight(7); 
  fill("#3d261a"); 
  rect(0, 370, 640, 110);
  pop(); 


  //bottom part of cauldron
  push();
  noStroke();
  fill("#120e1f");
  ellipse(320, 390, 270, 180);
  pop(); 

  //top of Cauldron 
  push();
  stroke("#2f2944");
  strokeWeight(10); 
  fill("#0b0913");
  ellipse(320, 340, 270, 70);
  pop()




}
  



