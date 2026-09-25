/**
 * The Witch's Cauldron 
 * Athanasia (Sia) Iliopoulos 
 * 
 * This is a Witch's cauldron that will be bubbling with several different colours spewing out. 
 * 
 */

"use strict";

// Bubble smoke effect action

 let bubble = {
  x: 280,
  y: 280,
  size: 15,
};

let bubble2 = {
  x: 320,
  y: 270,
  size: 25,
};
  
let bubble3 = {
  x: 360,
  y: 280,
  size: 10,
};

let bubble4 = {
  x: 300,
  y: 250,
  size: 18,
};

let bubble5 = {
  x: 350,
  y: 240,
  size: 12,
};

//Potion color
let potionColor;


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
  pop();

  // Potion inside cauldron
    potionColor =color(
    random(100, 255),
    random(50, 150),
    random(150, 255),
    );
    push();
    noStroke();
    fill(potionColor);
    ellipse(320, 340, 250, 50);
    pop();


  //Bubble effect 
  
  //Bubble 1 
  push();
  noStroke();
  fill(random(100, 255), random(50, 200), random(150, 255));
  ellipse(bubble.x, bubble.y, bubble.size);
  pop();

  //Bubble 2
  push();
  noStroke();
  fill(random(100, 255), random(50, 200), random(150, 255));
  ellipse(bubble2.x, bubble2.y, bubble2.size);
  pop(); 
  
  
  // Bubble movement
  
  //bubble 1
  bubble.x += random(-2, 2);
  bubble.y += random(-1, -0.2);

  //bubble 2
  bubble2.x += random(-2, 2);
  bubble2.y += random(-1, -0.2); 





}
  



