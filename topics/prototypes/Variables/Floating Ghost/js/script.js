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

     //stars
    push();
    noStroke()
    fill("#fcefb7")
    ellipse(100, 80, 5, 5);
    ellipse(200, 130, 5, 5);
    ellipse(350, 70, 5, 5);
    ellipse(450, 160, 5, 5);
    ellipse(580, 60, 5, 5);
    ellipse(50, 210, 5, 5);  
    ellipse(150, 280, 5, 5);
    ellipse(270, 190, 5, 5);
    ellipse(400, 250, 5, 5);
    ellipse(520, 300, 5, 5);
    ellipse(600, 220, 5, 5);
    ellipse(330, 320, 5, 5);
    
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

    // Ghost movement 
    ghostX = mouseX;
    ghostY = mouseY;


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
    ellipse(ghostX -30, ghostY -10, 22, 30); 
    ellipse(ghostX + 30, ghostY - 10, 22, 30);
    pop();

    //Mouth
    push();
    fill("#000000");
    ellipse(ghostX, ghostY + 30, 12, 18)
    pop(); 

    //blush
    push();
    fill("#fec5e5")
    noStroke(); 
    ellipse(ghostX - 45, ghostY + 5, 20, 10); 
    ellipse(ghostX + 45, ghostY + 5, 20, 10); 
    pop();






   
    

}