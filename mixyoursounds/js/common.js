function activateHeader(headerHeight) {
  if (window.innerHeight - headerHeight <= window.pageYOffset)
    document.querySelector('header').classList.add('active');
  else document.querySelector('header').classList.remove('active');
}

$(function() {
  const headerHeight =
    window.innerWidth <= 1200
      ? document.querySelector('header').clientHeight + 250
      : document.querySelector('header').clientHeight;

  activateHeader(headerHeight);

  window.addEventListener('scroll', e => {
    activateHeader(headerHeight);
  });

  document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.menu.absolute').classList.toggle('active');
    document.querySelector('#nav-icon3').classList.toggle('open');
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
