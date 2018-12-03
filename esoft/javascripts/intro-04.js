// MAIN.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is main JS file that contains custom JS scipts and initialization used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: noname.
// Author: Designova.
// Version 1.0 - Initial Release
// Website: http://www.designova.net 
// Copyright: (C) 2014 
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(document).ready(function() {



    //Detecting viewpot dimension
     var vH = $(window).height();
     var vW = $(window).width();
     

  

  
   

// home 04 carousel


// var owlone = $(".one-section-owl-nav-no-pag");
$(".home-04-kenburns-container").imagesLoaded( function() {

  var titles = ["Epic Day at Refugio",
          "Colors of Spring",
          "First Flowers"
          ];

  
  
  
  
if( !device.tablet() && !device.mobile() ) {

      //Adjusting Intro Components Spacing based on detected screen resolution
    $('#kenburns_slideshow').css('height',vH-80); 
    $('#intro-04').css('height',vH-20);  
    // Kenburns slide show init
    $('#kenburns_slideshow').Kenburns({
        images: [
          "images/home/01.jpg",
          "images/home/02.jpg",
          "images/home/03.jpg"
        ],
        scale:0.78,
        duration:6000,
        fadeSpeed:800,
        ease3d:'cubic-bezier(0.445, 0.050, 0.550, 0.950)'
      });       

  } else  {
     
      //Adjusting Intro Components Spacing based on detected screen resolution
    $('#kenburns_slideshow').css('height',vH);

      }


});  


});


})();
//  JSHint wrapper $(function ($)  : ends







  

