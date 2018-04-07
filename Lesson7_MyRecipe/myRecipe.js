/*
    Program Name: myRecipe Display Application
    Author: Hannah Wait
    Date: 4/6/2018
    Filename: myRecipe.js
*/

/*global $ */

//displays the next element after the current target 
function display(event) {
      
    $(event.currentTarget).next().slideDown("fast")
    $(event.currentTarget).height("2em")
    
}//end of display

//attach event listener to h3 elements to invoke display function when clicked 

$("h3").click(display);