/**
 * Floating Ghost
 * Athanasia (Sia) Iliopoulos 
 * 
 * This prototype will be me exploring variables. It will be a canvas and the object will be a ghost floating in the sky. 
 */

"use strict" 

let ghostX = 320;
let ghostY = 240;

/**
 * Canvas for Floating Ghost 
*/
function setup() {
 createCanvas(640, 480);
 
}


/**
 * Ghost drawing
*/
function draw() {
 background("#002147")

    // Ghost movement 
    ghostX = mouseX;
    ghostY = mouseY;
    
    //land
    push();
    noStroke()
    fill("#05131f");
    rect(0, 400, 640, 80); 
    pop();

    //Tree 1 
    push();
    noStroke()
    fill("#05131f")
    rect(80, 320, 25, 80); 
    ellipse(92, 280, 100, 100,); 
    pop(); 

    //Tree 2
    push();
    noStroke()
    fill("#05131f")
    rect(300, 320, 25, 80); 
    ellipse(312, 280, 100, 100,); 
    pop(); 

    //Tree 3
    push();
    noStroke()
    fill("#05131f")
    rect(520, 320, 25, 80); 
    ellipse(532, 280, 100, 100,); 
    pop(); 
    
     //Moon outside circle part 
    push();
    fill("#fcefb7")
    ellipse(520, 100, 80, 80); 
    
    //Moon inside circle part
    push();
    noStroke();
    fill("#002147"); 
    ellipse(505, 90, 70, 80);
    
   //Ghost Body 
    push();
    fill("#FFFFFF");
    noStroke(); 
    ellipse(ghostX, ghostY, 150, 150); 
    rect(ghostX - 75, ghostY + 15, 150, 60); 
    pop();

    //Eyes 
    push();
    fill("#000000")
    ellipse(290, 230, 22, 30); 
    ellipse(350, 230, 22, 30);
    pop();

    //Mouth
    push();
    fill("#000000");
    ellipse(320, 270, 12, 18)
    pop(); 

    //blush
    push();
    fill("#fec5e5")
    noStroke(); 
    ellipse(275, 245, 20, 10); 
    ellipse(365, 245, 20, 10); 
    pop();






   
    

}