var mickey = document.getElementById("mickey");
var goofy = document.getElementById("goofy");
var text = document.getElementById("text");

mickey.addEventListener("click",function(){
    text.innerHTML = "This is Mickey, He's a savage";
});

goofy.addEventListener("click",function(){
        text.innerHTML = "This is Goofy, He's Mickey's homie";

});