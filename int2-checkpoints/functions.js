/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//




colormickey = function(x, y){
    


ellipse(x, y, 40, 40);
fill(random(225),random(225),random(225));
ellipse(x-20, y-22, 29, 29);
ellipse(x+20, y-22, 29, 29);
fill();
ellipse(x+7, y-5, 5, 10);
ellipse(x+7, y-3, 2, 4);
ellipse(x-7, y-5, 5, 10);
ellipse(x-7, y-3, 2, 4);
fill(random(225),random(225),random(225));
ellipse(x, y+4, 10, 5);
fill();
ellipse(x, y+13, 10, 3);

}
mouseClicked = function(){

colormickey(mouseX, mouseY);   

}





draw = function() {

    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
