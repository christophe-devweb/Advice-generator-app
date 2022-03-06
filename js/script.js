'use strict';
var urlapi = "https://api.adviceslip.com/advice";
var conseil = document.querySelector("#conseil");
var id = document.querySelector("#id");
var de = document.querySelector("#de");
    
function lance() {
  fetch(urlapi , {cache: "no-cache"})
    .then((response) => response.json())
    .then(function(details) {
      id.innerHTML = details.slip.id;
    conseil.innerHTML = details.slip.advice;
    })
}     

document.addEventListener('DOMContentLoaded',function(){

  lance(); 
  de.addEventListener("click" , lance);

});