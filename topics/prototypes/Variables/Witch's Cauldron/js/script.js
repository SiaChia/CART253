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
  y: 345,
  size: 15,
};

let bubble2 = {
  x: 320,
  y: 345,
  size: 25,
};
  
let bubble3 = {
  x: 360,
  y: 345,
  size: 10,
};

let bubble4 = { 
  x: 300,
  y: 345, 
  size: 18,
};

let bubble5 = {
  x: 350,
  y: 345,
  size: 12,
};

let bubble6 = {
  x: 250,
  y: 345,
  size: 14
};

let bubble7 = {
  x: 390,
  y: 345,
  size: 8
};

let bubble8 = { 
  x: 270, 
  y: 345,
  size: 8, 
};

let bubble9 = { 
  x: 340, 
  y: 345,
  size: 15, 
};

let bubble10 = { 
  x: 380, 
  y: 345,
  size: 9, 
};

let bubble11 = {  
  x: 310,  
  y: 345, 
  size: 13,  
};

let bubble12 = { 
  x: 410, 
  y: 345, 
  size: 13, 
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

  //Bubble 3 
  push();
  noStroke();
  fill(random(100, 255), random(50, 200), random(150, 255));
  ellipse(bubble3.x, bubble3.y, bubble3.size);
  pop(); 

  //Bubble 4 
  push(); 
  noStroke(); 
  fill(random(100, 255), random(50, 200), random(150, 255)); 
  ellipse(bubble4.x, bubble4.y, bubble4.size); 
  pop(); 

   // Bubble 5
  push(); 
  noStroke(); 
  fill(random(100, 255), random(50, 200), random(150, 255)); 
  ellipse(bubble5.x, bubble5.y, bubble5.size); 
  pop(); 
  
  // Bubble 6
  push();
  noStroke();
  fill(random(100, 255), random(50, 200), random(150, 255));
   ellipse(bubble6.x, bubble6.y, bubble6.size);
   pop();

   //Bubble 7 
   push();
  noStroke();
  fill(random(100, 255), random(50, 200), random(150, 255));
   ellipse(bubble7.x, bubble7.y, bubble6.size);
   pop();

   // Bubble 8
   push();
   noStroke();
   fill(random(100, 255), random(50, 200), random(150, 255));
   ellipse(bubble8.x, bubble8.y, bubble8.size);
   pop();

   // Bubble 9
    push();
    noStroke();
    fill(random(100, 255), random(50, 200), random(150, 255));
    ellipse(bubble9.x, bubble9.y, bubble9.size);
    pop();

    //Bubble 10
    push();
    noStroke();
    fill(random(100, 255), random(50, 200), random(150, 255));
    ellipse(bubble10.x, bubble10.y, bubble10.size);
     pop();

  // Bubble 11
  push();
  noStroke();
  fill(random(100, 255), random(50, 200), random(150, 255));
  ellipse(bubble11.x, bubble11.y, bubble11.size);
  pop();

   
// Bubble movement
  
  //bubble 1
  bubble.x += random(-2, 2);
  bubble.y += random(-0.1, -0.5);

  //bubble 2
  bubble2.x += random(-2, 2);
  bubble2.y += random(-1, 0.2); 

  //bubble 3 
  bubble3.x += random(-2, 2); 
  bubble3.y += random(-1, 0.1); 

  //bubble 4

  bubble4.x += random(-2, 2); 
  bubble4.y += random(-1.5, 0.2); 

  //bubble 5
  bubble5.x += random(-2, 2); 
  bubble5.y += random(-0.5, -0.2); 

  //bubble 6 
  bubble6.x += random(-2, 2);
  bubble6.y += random(-1, 0.5);

  bubble7.x += random(-2, 2);
  bubble7.y += random(-0.1, -0.5);

  bubble8.x += random(-2, 2);
  bubble8.y += random(-0.2, -0.5);

  bubble9.x += random(-2, 2);
  bubble9.y += random(-0.8, 0.5);

  bubble10.x += random(-2, 2);
  bubble10.y += random(-1, -0.2);

  bubble11.x += random(-2, 2);
  bubble11.y += random(-0.7, -0.1);
 






}
  



