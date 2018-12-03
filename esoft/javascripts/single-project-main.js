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


$(function ($) {



    //Detecting viewpot dimension
     var vH = $(window).height();
     var vW = $(window).width();
     



  //Parallax INIT
  //Initialize Each Parallax Layer  
  function parallaxInit() {
    $('.parallax, .parallax-layer').each(function() {
        $(this).parallax("30%", 0.1);
    });
  } 

  if( !device.tablet() && !device.mobile() ) {

      //Activating Parallax effect if non-mobile device is detected
      $(window).bind('load', function () {
        parallaxInit();             
      });


  } else  {
        
      //Dectivate Parallax effect if mobile device is detected (bg image is displayed)
      $('.parallax, .parallax-layer').addClass('no-parallax');
        
      }


  // One Slide Owl with Pagination but no Navigation

      $(".one-section-owl-pag-no-nav").owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay:false,
        autoplayTimeout:3000,
        autoplaySpeed:500,
        navSpeed:500,
        dots:true,
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


var pro_cnt_sec = $('.project-page-carousel .content-section').outerHeight();
$('.project-page-carousel .img-section').height(pro_cnt_sec);


// Social button section

var social_no = $('.button-over').length;
  var social_size = (100 / social_no);
  $('.button-over').css('width',social_size+'%');


// Mobile Navigation Scripts

    $('.mobile-nav .mobile-nav-link-container').slideUp();

    var mobile_nav_slider = false;
    $('.mobile-nav .mobile-nav-clicker').click(function() {
      if(mobile_nav_slider == false)
    {
      $('.mobile-nav .mobile-nav-link-container').slideDown();
      $('.mobile-nav-clicker i').addClass('mobile-nav-active');
      mobile_nav_slider = true;
    }
    else
    {
      $('.mobile-nav .mobile-nav-link-container').slideUp();
      $('.mobile-nav-clicker i').removeClass('mobile-nav-active');
      mobile_nav_slider = false;
    }
    });




});
// $(function ($)  : ends

  

})();
//  JSHint wrapper $(function ($)  : ends







  

