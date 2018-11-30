$(function() {
  // $('.nav').on('click', function() {
  //   $('.nav').removeClass('active');
  //   $(this).addClass('active');
  // });

  $('.particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });

  $('.owl-carousel.dao').owlCarousel({
    dots: false,
    loop: false,
    margin: 0,
    items: 1,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
      768: {
        autoplay: false
      }
    },
    onTranslated: function(event) {
      if (event.item.index == 3) drawPlot();
      else $('#chartdiv').html('');
      const index = event.item.index % event.item.count;
      document.querySelectorAll('.nav').forEach((el, i) => {
        if (i == index % 4) {
          $('.nav').removeClass('active');
          el.classList.add('active');
        }
      });
    }
  });

  $('.toggle-menu').on('click', () => {
    $('ul.menu').toggleClass('active');
  });

  const padding = $('nav').innerHeight();

  $('.nav-item').each(function() {
    const ths = $(this);
    ths.on('click', function(e) {
      e.preventDefault();
      const to = 'section.' + ths.attr('href');
      $('html, body')
        .stop()
        .animate({
          scrollTop: $(to).offset().top - padding
        });
      $('ul.menu').removeClass('active');
    });
  });

  $('.logo').on('click', function() {
    $('html, body').animate({scrollTop: 0});
  });

  document.querySelectorAll('.nav').forEach(function(nav, index) {
    nav.addEventListener('click', function(e) {
      $('.nav').removeClass('active');
      nav.classList.add('active');
      $('.owl-carousel.dao').trigger('to.owl.carousel', [index]);
    });
  });

  function drawPlot() {
    AmCharts.makeChart('chartdiv', {
      type: 'pie',
      balloonText:
        "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
      innerRadius: '40%',
      alpha: 0.74,
      titleField: 'category',
      valueField: 'column-1',
      theme: 'default',
      labelText: '',
      allLabels: [],
      balloon: {},
      legend: {
        enabled: $(document).innerWidth() > 768,
        align: 'center',
        valueWidth: 120,
        markerType: 'circle',
        maxColumns: 2
      },
      titles: [],
      dataProvider: [
        {
          category: 'Emission',
          'column-1': '3200000000'
        },
        {
          category: 'PRESALE',
          'column-1': '400000000'
        },
        {
          category: 'ICO',
          'column-1': '1400000'
        },
        {
          category: 'Team',
          'column-1': '1200000'
        },
        {
          category: 'Reserve',
          'column-1': '200000000'
        },
        {
          category: 'Participants      ',
          'column-1': '16800000000'
        }
      ]
    });
  }

  $('.owl-carousel.team').owlCarousel({
    dots: false,
    loop: false,
    margin: 0,
    items: 1,
    nav: false,
    dots: false,
    responsive: {
      1200: {
        items: 5
      },
      992: {
        items: 4
      },
      768: {
        items: 3
      },
      400: {
        items: 2
      }
    }
  });

  $('.team-member .circled-img').each(function() {
    $(this).height($(this).width());
  });
  fetch('https://api.cryptonator.com/api/ticker/eth-usd')
    .then(res => res.json())
    .then(data => {
      const multiplicator = data.ticker.price;
      document.querySelectorAll('.package-param span').forEach(el => {
        el.innerHTML = (el.attributes.eth.value * multiplicator).toFixed(5);
      });
    });
});
