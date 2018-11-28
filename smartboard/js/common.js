$(function() {
  // $('.nav').on('click', function() {
  //   $('.nav').removeClass('active');
  //   $(this).addClass('active');
  // });

  $('.owl-carousel.dao').owlCarousel({
    dots: false,
    loop: false,
    margin: 0,
    items: 1,
    nav: false,
    dots: false,
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

  document.querySelectorAll('.nav').forEach(function(nav, index) {
    nav.addEventListener('click', function(e) {
      $('.nav').removeClass('active');
      nav.classList.add('active');
      $('.owl-carousel.dao').trigger('to.owl.carousel', [index]);
    });
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
  },
  onTranslated: function(event) {
    const index = event.item.index % event.item.count;
    document.querySelectorAll('.nav').forEach((el, i) => {
      if (i == (index + 2) % 4) {
        $('.nav').removeClass('active');
        el.classList.add('active');
      }
    });
  }
});

$('.team-member .circled-img').each(function() {
  $(this).height($(this).width());
});
