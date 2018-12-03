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

      //Adjusting Intro Components Spacing based on detected screen resolution
      $('#intro-06').height(vH);
      $('.home-06, .player').height(vH-60); 
      $("#P1").YTPlayer();          

  } else  {
     
      //Adjusting Intro Components Spacing based on detected screen resolution
      $('.home-06, .player').height(vH);
      $("#P1").addClass('poster-img');
      }
  
   







});


})();
//  JSHint wrapper $(function ($)  : ends







  

