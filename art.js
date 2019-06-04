/* global draw ellipse rect p processing width height size mouseY mouseX*/
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

background(212, 0, 55);

//the spin
var ang = 30;

//the x and y of the vertex 
var pointX = 200;
var pointY = 150;

draw = function() {
    
    
    //make it get bigger and spin
    pointX -= 0;
    ang ++;
    
    //it makes it in the center
    pushMatrix();
    translate(200,200);
    rotate(ang);
    
    for(var i = 0; i > 100; i += 100){
        stroke(0,20,200-pointX);
        pushMatrix();
        pushMatrix();
        rotate(i + 100);
        translate(-200,200);
        beginShape();
        //the vertex that draws the swirl
        vertex(10, 10);
        vertex(pointY,pointX);
        
        endShape();
        popMatrix();
        popMatrix();
        
    }
     if (mouseY < 150){
        ellipse(mouseX, mouseY, 40, 40);
   }
   else{
      rect(mouseX, mouseY, 40, 40);
   }

     if (mouseX < 80){
        ellipse(mouseX, mouseY, 40, 40);
   }
   else{
      line(mouseX, mouseY, 40, 40);
   }
    if (mouseX > 50){
        ellipse(mouseX, mouseY, 40, 40);
   }
   else{
        rect(mouseX, mouseY, 40, 40);
        fill(220, 165, 255)
    
   }
   
     if (mouseY > 90){
       fill(234, 190, 348);
   }
   else{
       fill(i/5, 444, 176);
   }
  
   
    popMatrix();
};


  
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
