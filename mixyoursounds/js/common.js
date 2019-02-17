function activateHeader(headerHeight) {
  if (window.innerHeight - headerHeight <= window.pageYOffset)
    document.querySelector('header').classList.add('active');
  else document.querySelector('header').classList.remove('active');
}

function openFlyingForm(packageName, price) {
  document.querySelector('.basket-title span').innerText = packageName;
  document.querySelector('.basket-cost span').innerText = price;
  document.querySelector('.basket-outer-container').style.display = 'flex';
}

function closeFlyingForm() {
  document.querySelector('.basket-outer-container').style.display = 'none';
}

$(function() {
  $.fn.moreLines = function(options) {
    'use strict';

    this.each(function() {
      var element = $(this),
        textelement = element.find('p'),
        baseclass = 'b-morelines_',
        basejsclass = 'js-morelines_',
        currentclass = 'section',
        singleline = parseFloat(element.css('line-height')),
        auto = 1,
        fullheight = element.outerHeight(true) + 10,
        settings = $.extend(
          {
            linecount: auto,
            baseclass: baseclass,
            basejsclass: basejsclass,
            classspecific: currentclass,
            buttontxtmore: 'more lines',
            buttontxtless: 'less lines',
            animationspeed: auto
          },
          options
        ),
        ellipsisclass =
          settings.baseclass + settings.classspecific + '_ellipsis',
        buttonclass = settings.baseclass + settings.classspecific + '_button',
        wrapcss = settings.baseclass + settings.classspecific + '_wrapper',
        wrapjs = settings.basejsclass + settings.classspecific + '_wrapper',
        wrapper = $('<div>')
          .addClass(wrapcss + ' ' + wrapjs)
          .css({'max-width': element.css('width')}),
        linescount = singleline * settings.linecount;

      element.wrap(wrapper);

      if (element.parent().not(wrapjs)) {
        if (fullheight > linescount) {
          element.addClass(ellipsisclass).css({
            'min-height': linescount,
            'max-height': linescount,
            overflow: 'hidden'
          });

          var moreLinesButton = $('<div>', {
            class: buttonclass,
            click: function() {
              element.toggleClass(ellipsisclass);
              $(this).toggleClass(buttonclass + '_active');

              if (element.css('max-height') !== 'none') {
                element
                  .css({height: linescount, 'max-height': ''})
                  .animate(
                    {height: fullheight},
                    settings.animationspeed,
                    function() {
                      moreLinesButton.html(settings.buttontxtless);
                    }
                  );
              } else {
                element.animate(
                  {height: linescount},
                  settings.animationspeed,
                  function() {
                    moreLinesButton.html(settings.buttontxtmore);
                    element.css('max-height', linescount);
                  }
                );
              }
            },

            html: settings.buttontxtmore
          });

          element.after(moreLinesButton);
        }
      }
    });

    return this;
  };

  $.fn.read_more = function(opts) {
    opts = opts || {};
    var textContent = opts.text || 'Číst více',
      hideContent = opts.text || 'Skrýt',
      linkClass = opts.class || 'read-more-link';

    return this.each(function(index, el) {
      var $el = $(el),
        $parent = $el.parent(),
        $link = $('<a href="#read-more">' + textContent + '</a>');

      textContent = $el.data('text') ? $el.data('text') : textContent;
      hideContent = $el.data('hide-text') ? $el.data('hide-text') : hideContent;

      $link.addClass(linkClass);
      $el.hide().addClass('is-hidden');
      $parent.append($link);

      $link.on('click', function(event) {
        event.preventDefault();

        if ($el.hasClass('is-hidden')) {
          $el.show().removeClass('is-hidden');
          $link.text(hideContent);
        } else {
          $el.hide().addClass('is-hidden');
          $link.text(textContent);
        }
      });
    });
  };

  $('.pack-features').each(function() {
    $(this).moreLines({
      animationspeed: 250,
      linecount: 4,
      buttontxtmore: '<i  class="fa fa-arrow-down"></i>',
      buttontxtless: '<i  class="fa fa-arrow-up"></i>'
    });
  });

  const headerHeight = document.querySelector('header').clientHeight;

  if (window.innerWidth >= 1200) {
    activateHeader(headerHeight);
    window.addEventListener('scroll', e => {
      activateHeader(headerHeight);
    });
  }
  document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.menu.absolute').classList.toggle('active');
    document.querySelector('#nav-icon3').classList.toggle('open');
  });

  document.querySelectorAll('.pack-container').forEach(pack => {
    const packName = pack.querySelector('.pack-name').innerText;
    const packPrice = pack.querySelector('.pack-price').innerText;

    pack.querySelector('.button').addEventListener('click', () => {
      openFlyingForm(packName, packPrice);
    });
  });

  document.querySelector('.basket .close').addEventListener('click', () => {
    closeFlyingForm();
  });

  document.querySelectorAll('.scroll-to').forEach(menuItem => {
    menuItem.addEventListener('click', e => {
      const target = `section.${menuItem.attributes.target.value}`;
      if (menuItem.attributes.target.value === 'top')
        $('html, body').animate(
          {
            scrollTop: 0
          },
          1000
        );
      else
        $('html, body').animate(
          {
            scrollTop: $(target).offset().top - headerHeight + 1
          },
          1000
        );
    });
  });
});
