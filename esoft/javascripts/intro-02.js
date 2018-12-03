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
     


     

  
   

// home owl carousel


// var owlone = $(".one-section-owl-nav-no-pag");
$(".one-section-owl-nav-no-pag").imagesLoaded( function() {
  
  $(".one-section-owl-nav-no-pag").owlCarousel({
      animateOut: 'bounceOutLeft',
      animateIn: 'fadeIn',
      loop:true,
      margin:0,
      nav:true,
      navText: [
      "<i class='main-owl-nav ion-chevron-left'></i>",
      "<i class='main-owl-nav ion-chevron-right'></i>"
      ],
      navRewind:true,
      autoplay:false,
      autoplayTimeout:12000,
      autoplaySpeed:1000,
      navSpeed:1000,
      dots:false,
      dotsSpeed:500,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });

  if( !device.tablet() && !device.mobile() ) {

      //Adjusting Intro Components Spacing based on detected screen resolution
      $('.one-section-owl-nav-no-pag-contaner').css('height',vH); 
      $('.home-wrap .home-container .item').css('height',vH-60);           

  } else  {
     
      //Adjusting Intro Components Spacing based on detected screen resolution
      $('.home-wrap .home-container .item').css('height',vH);

      }

});  


});


})();
//  JSHint wrapper $(function ($)  : ends







  

