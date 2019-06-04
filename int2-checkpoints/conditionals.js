/* global draw ellipse rect p processing width height size mouseY mouseX*/
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//





draw = function() {
    
    background();
// changes shape if the mouse goes less then 250
 if (mouseY < 250){
        ellipse(mouseX, mouseY, 40, 40);
   }
   else{
      rect(mouseX, mouseY, 40, 40);
   }

   
   //changes color based on position
   if (mouseY > 250){
       fill(350, 125, 200);
   }
   else{
       fill(200, 340, 145)
   }
   
  if (mouseX < 50){
        ellipse(mouseX, mouseY, 40, 40);
   }
   else{
      line(mouseX, mouseY, 40, 40);
   }
   
   if (mouseX < 50){
        ellipse(mouseX, mouseY, 40, 40);
   }
   else{
        ellipse(mouseX, mouseY, 40, 40);
        fill(220, 165, 223)
    
   }
   
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
