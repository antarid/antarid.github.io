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
     


     

  
   

if( !device.tablet() && !device.mobile() ) {
      
      $('#intro-05').height(vH);
      $('.home-05').height(vH-60);

 /* plays the BG Vimeo or Youtube video if non-mobile device is detected 81676731 */ 
       $.okvideo({ source: '155681147', //set your video source here
        volume: 10, 
        loop: true,
        hd:true, 
        adproof: true,
        annotations: false
      });
}

 else {
  
  $('.home-05').height(vH);

  /* displays a poster image if mobile device is detected*/ 
  $('.home-05').addClass('poster-img');
  
}





$('.sticky-hor-nav-section').waypoint(function (direction) {
        
     if (direction === 'down') {
        $('#okplayer, #okplayer-mask').css('visibility','hidden'); 

      } 
      else {
        $('#okplayer, #okplayer-mask').css('visibility','visible');        
      }

}, { offset: 65 });
  




});


})();
//  JSHint wrapper $(function ($)  : ends







  

