 var input = document.getElementById('input');
 //array used for the buttons on the calculator 
 var calcbutton = document.getElementsByClassName("calcbutton");


// for loop to add an eventlistener to button
for (var i = 0; i < calcbutton.length; i++) {
  calcbutton[i].addEventListener("click", push)
}


//function for telling the calculator the actual fucntion of each button and what to do based of their value
 function push(evt) {

      var clicked = evt.target.innerHTML;

     if (clicked == '=') {
         // Calculate the answer (eval exacutes it)
         input.innerHTML = eval(input.innerHTML);

     }
     else if (clicked == 'AC') {
         // Clear the box
         input.innerHTML = '0';

     }
     else {
         if (input.innerHTML == '0') {
             input.innerHTML = clicked;

         }
         else {
             input.innerHTML += clicked;
         }
     }
 }
 
 