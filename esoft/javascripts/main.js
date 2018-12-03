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

(function() {
  'use strict';

  $(document).ready(function() {
    $('a').on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== '') {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top
          },
          1800,
          function() {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      } // End if
    });
  });

  //Detecting viewpot dimension
  var vH = $(window).height();
  var vW = $(window).width();

  $(window).bind('load', function() {
    // Navigation To work From Other Page
    var locationUrl = $(location).attr('href');
    var targetLocation = locationUrl.split('#');
    var targetId = '#' + targetLocation[1];
    setTimeout(function() {
      $('.main-horizontal-nav li a[href=' + targetId + ']').trigger('click');
    }, 100);

    // Waypoint function For Fixed Navigation
    setTimeout(function() {
      $('.sticky-hor-nav-section').waypoint(
        function(direction) {
          if (direction === 'down') {
            $('.main-horizontal-nav').addClass('main-horizontal-nav-fixed');
          } else {
            $('.main-horizontal-nav').removeClass('main-horizontal-nav-fixed');
          }
        },
        {offset: 60}
      );
    }, 300);

    //Equi-heigh Divs
    if (vW > 100) {
      var maxHeight = -1;

      $('.equal-height-one').each(function() {
        maxHeight =
          maxHeight > $(this).outerHeight() ? maxHeight : $(this).outerHeight();
      });

      $('.equal-height-one').each(function() {
        $(this).outerHeight(maxHeight);
      });
    }

    //About Section Slider

    $('.bxslider').bxSlider({
      // mode:'fade',
      pagerCustom: '#bx-pager',
      adaptiveHeight: 'ture'
    });

    var page_no = $('.synced-bx-page a').length;
    var page_size = 100 / page_no - 1;
    $('.synced-bx-page a').css('width', page_size + '%');

    $('.tile-block .img-section').imagesLoaded(function() {
      var tile_img_ht = $('.tile-block .img-section').outerHeight();
      $('.tile-block .content-section').height(tile_img_ht);
    });
  });

  //Parallax INIT
  //Initialize Each Parallax Layer
  function parallaxInit() {
    $('.parallax, .parallax-layer').each(function() {
      $(this).parallax('30%', 0.1);
    });
  }

  if (!device.tablet() && !device.mobile()) {
    //Activating Parallax effect if non-mobile device is detected
    parallaxInit();
  } else {
    //Dectivate Parallax effect if mobile device is detected (bg image is displayed)
    $('.parallax, .parallax-layer').addClass('no-parallax');
  }

  // Portfolio isotope Init

  var $container = $('#container');

  $container.imagesLoaded(function() {
    $container.isotope({
      itemSelector: '.element',
      layoutMode: 'masonry'
    });
  });

  var $optionSets = $('#options .option-set'),
    $optionLinks = $optionSets.find('a');

  $optionLinks.click(function() {
    var $this = $(this);
    // don't proceed if already selected
    if ($this.hasClass('selected')) {
      return false;
    }
    var $optionSet = $this.parents('.option-set');
    $optionSet.find('.selected').removeClass('selected');
    $this.addClass('selected');

    // make option object dynamically, i.e. { filter: '.my-filter-class' }
    var options = {},
      key = $optionSet.attr('data-option-key'),
      value = $this.attr('data-option-value');
    // parse 'false' as false boolean
    value = value === 'false' ? false : value;
    options[key] = value;
    if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
      // changes in layout modes need extra logic
      changeLayoutMode($this, options);
    } else {
      // creativewise, apply new options
      $container.isotope(options);
    }

    return false;
  });

  $('a.hidden-content').each(function() {
    var txt_ht = $(this)
      .find('.text')
      .height();
    $(this)
      .find('.text')
      .css('height', 0);
    $(this).hover(
      function() {
        $(this)
          .find('.text')
          .css('height', txt_ht);
      },
      function() {
        $(this)
          .find('.text')
          .css('height', 0);
      }
    );
  });

  // Portfolio LightBox Script

  var i = 0;
  $('.lightbox-content').each(function() {
    var lig_bx_ticker = '#lightbox_' + i;
    var lig_bx_ticker_dock = 'lightbox_' + i;
    $(this).attr('data-featherlight', lig_bx_ticker);
    $(this)
      .siblings('.lightbox-content-dock')
      .attr('id', lig_bx_ticker_dock);
    i += 1;
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 100,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

  // Intermediate Section

  // One Slide Owl with Pagination but no Navigation

  $('.one-section-owl-pag-no-nav').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    autoHeight: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 500,
    navSpeed: 500,
    dots: true,
    dotsSpeed: 500,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  // Team Section

  $('.team-each-wrap').imagesLoaded(function() {
    $('.team-each-wrap').each(function() {
      var team_ht_set = $(this)
        .find('.img-container')
        .outerHeight();
      $(this).height(team_ht_set);
      $(this)
        .find('.team-block')
        .height(team_ht_set);
    });
  });

  // Team Gallery Section

  var team_gal_cnt = $('.team-gallery-content').height();
  $('.team-gallery-secton .lightbox-section,.team-gallery-content').outerHeight(
    team_gal_cnt
  );

  $('.team-gallery-secton a.gallery').featherlightGallery({
    previousIcon: '<',
    nextIcon: '>'
  });

  // Contact Form Ajax Section

  $('#contactForm').submit(function() {
    $('.md-content').hide();
    $('.launch_modal').trigger('click');
    //alert(1);
    $.ajax({
      type: $('#contactForm').attr('method'),
      url: $('#contactForm').attr('action'),
      data: $('#contactForm').serialize(),
      success: function(data) {
        if (data == 'success') {
          $('#contactForm').each(function() {
            this.reset();
          });

          $('#contactForm input#name').attr(
            'placeholder',
            $('#contactForm input#name').data('placeholder')
          );
          $('#contactForm input#name').removeClass('error-msg');

          $('#contactForm input#email').attr(
            'placeholder',
            $('#contactForm input#email').data('placeholder')
          );
          $('#contactForm input#email').removeClass('error-msg');

          $('#contactForm #msg').attr(
            'placeholder',
            $('#contactForm textarea#msg').data('placeholder')
          );
          $('#contactForm #msg').removeClass('error-msg');

          $('.md-content').show();
        } else {
          $('.md-content').show();
          $('.md-content h3').html('Something went wrong!');
          $('.md-content p').html('Please try again.');
        }
      }
    });
    return false;
  });

  // Social button section

  var social_no = $('.button-over').length;
  var social_size = 100 / social_no;
  $('.button-over').css('width', social_size + '%');

  // Navigation Scripts

  // Mobile Navigation Scripts

  $('.mobile-nav .mobile-nav-link-container').slideUp();

  var mobile_nav_slider = false;
  $('.mobile-nav .mobile-nav-clicker').click(function() {
    if (mobile_nav_slider == false) {
      $('.mobile-nav .mobile-nav-link-container').slideDown();
      $('.mobile-nav-clicker i').addClass('mobile-nav-active');
      mobile_nav_slider = true;
    } else {
      $('.mobile-nav .mobile-nav-link-container').slideUp();
      $('.mobile-nav-clicker i').removeClass('mobile-nav-active');
      mobile_nav_slider = false;
    }
  });

  // Navigation activator & Navigation Highlighter for Main Nav

  var page_stack = $.makeArray();
  var stack_top = 0;
  var current_nav = '';
  $('.page-section-entry').waypoint(
    function(direction) {
      if (direction === 'down') {
        if ($('.both-nav ul li a[href=#' + $(this).attr('id') + ']').html()) {
          $('.both-nav ul li > a').removeClass('both-nav-active');
          $('.both-nav ul li a[href=#' + $(this).attr('id') + ']').addClass(
            'both-nav-active'
          );
          stack_top = stack_top + 1;
          page_stack[stack_top] = $(this).attr('id');
        }
      } else {
        if (page_stack[stack_top] == $(this).attr('id')) {
          stack_top = stack_top - 1;
          $('.both-nav ul li > a').removeClass('both-nav-active');
          $('.both-nav ul li a[href=#' + page_stack[stack_top] + ']').addClass(
            'both-nav-active'
          );
        }
      }
    },
    {offset: 150}
  );
})();
//  JSHint wrapper $(function ($)  : ends
