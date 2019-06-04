/* global draw ellipse rect p processing width height size strokeweight stroke fill */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos = 0;
var yPos = 0;

var weight = 4;
fill(200, 0, 150);
ellipse(200, 200, 300, 300);
fill(100, 0, 150);
ellipse(200, 370, 300, 300);
fill(100, 0, 150);
ellipse(200, 20, 300, 300);
draw = function() {

// Draw circles from upper left corner to bottom right
stroke(100, 6, 104);
fill(500, 210, 247);
ellipse(xPos,yPos,30,30);
xPos = xPos + 30;
yPos = yPos + 30;
weight

// Draw circles from upper right corner to bottom left 
stroke(100, 6, 104);
fill(500, 210, 247);
ellipse(height -xPos,yPos,30,30);
xPos = xPos + 30;
yPos = yPos + 30;

stroke(100, 6, 104);
fill(500, 410, 147);
ellipse(xPos,yPos,50,50);
xPos = xPos + 10;
yPos = yPos + 10;

stroke(100, 6, 104);
fill(500, 410, 147);
ellipse(height -xPos,yPos,50,50);
xPos = xPos + 10;
yPos = yPos + 10;

};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
