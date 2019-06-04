var skrt = document.getElementById("skrt");
skrt.style.position = "absolute";

skrt.addEventListener("mousemove", function(){
    skrt.style.top = Math.random() * 300 + "px";
    skrt.style.left = Math.random() * 300 + "px";
    

});

function display_random_image() 
{
     var theImages = [{
        src: "95790200-you-suck-rubber-stamp-grunge-design-with-dust-scratches-effects-can-be-easily-removed-for-a-clean-cr.jpg",
        width: "240",
        height: "160"
    }, {
        src: "4daface228b79d3a21bd126e465493fb-unicorn-dabbing-cartoon.jpg",
        width: "320",
        height: "195"
    
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
}