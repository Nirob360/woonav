// A $( document ).ready() block.
$(document).ready(function () {
    "use strict";

  // active navigation menu 
    $('.logo-area .fa-bars ,.remove-icon').click(function () {
        $( ".main-menu" ).toggleClass("main-menu-show");       

    })
    $(".nav-item .nav-link").click(function () {
        $( ".main-menu" ).removeClass("main-menu-show"); 

    })
        
        


    
});


