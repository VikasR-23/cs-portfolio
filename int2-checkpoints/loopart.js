/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

xPos = 0
yPos = 0

background(150, 200, 300);

for(var shoot = 0; shoot < width; shoot+=50){
    for(var dab = 0; dab < height; dab+=50){
        var size = random(40);
        var drip = random(300);
        var sauce = random(150);
        var ice = random(250);
        fill(drip, sauce, ice)
      rect(shoot,dab, size, size);  

    
    }
    

    
}


draw = function() {

    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
