$.fn.read_more = function (opts) {
	opts = opts || {};
	var textContent = opts.text || 'Číst více',
		hideContent = opts.text || 'Skrýt',
		linkClass = opts.class || 'read-more-link';

	return this.each(function (index, el) {
		var $el = $(el),
			$parent = $el.parent(),
			$link = $('<a href="#read-more">' + textContent + '</a>');

		textContent = $el.data('text') ? $el.data('text') : textContent;
		hideContent = $el.data('hide-text') ? $el.data('hide-text') : hideContent;

		$link.addClass(linkClass);
		$el.hide().addClass('is-hidden');
		$parent.append($link);

		$link.on('click', function (event) {
			event.preventDefault();

			if ($el.hasClass('is-hidden')) {
				$el.show()
					.removeClass('is-hidden');
				$link.text(hideContent);
			} else {
				$el.hide()
					.addClass('is-hidden');
				$link.text(textContent);
			}

		});
	});

};

$.fn.extend({
	animateCss: function (animationName, callback) {
		var animationEnd = (function (el) {
			var animations = {
				animation: 'animationend',
				OAnimation: 'oAnimationEnd',
				MozAnimation: 'mozAnimationEnd',
				WebkitAnimation: 'webkitAnimationEnd',
			};

			for (var t in animations) {
				if (el.style[t] !== undefined) {
					return animations[t];
				}
			}
		})(document.createElement('div'));

		this.addClass('animated ' + animationName).one(animationEnd, function () {
			$(this).removeClass('animated ' + animationName);

			if (typeof callback === 'function') callback();
		});

		return this;
	},
});

function animate() {
	$('.owl-item.active .animate').each(function (element) {
		const animation = $(this).attr('data-anim');
		$(this).animateCss(animation);
	})
}

function updateHeaderMovedStyle() {
	var scrollPosition = $(document).scrollTop();
	if (scrollPosition > 0)
		$('header').addClass('moved');
	else
		$('header').removeClass('moved');
}

function onScroll(event) {
	updateHeaderMovedStyle();
	var scrollPosition = $(document).scrollTop();
	$('nav a').each(function () {
		var currentLink = $(this);
		var refElement = $(currentLink.attr("href"));
		if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
			$('nav ul li a').removeClass("active");
			currentLink.addClass("active");
		}
		else {
			currentLink.removeClass("active");
		}
	});
}

$(function () {

	$(document).on("scroll", onScroll);

	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");

		$('a').each(function () {
			$(this).removeClass('active');
		})
		$(this).addClass('active');

		var target = this.hash;
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 500, 'swing', function () {
			updateHeaderMovedStyle();
			window.location.hash = target;
			$(document).on("scroll", onScroll);
		});
	});

	$('.owl-carousel-main').owlCarousel({
		autoplay: true,
		dots: false,
		loop: true,
		margin: 0,
		nav: true,
		items: 1,
		onTranslated: animate,
	})

	$('.owl-carousel-feedbacks').owlCarousel({
		dots: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2,
			},
			1200: {
				items: 3
			}
		}

	})


	const navTitles = [];
	$('.steps-carousel').owlCarousel({
		autoplay: true,
		nav: true,
		loop: true,
		dots: true,
		items: 1,
		onInitialize: function () {
			document.querySelectorAll('.step h2').forEach(el => {
				const title = el.attributes['data-nav-title'].value;
				navTitles.push(title);
			});
		},
		onInitialized: function () {
			let maxHeight = 0;
			document.querySelectorAll('.step .row').forEach(el => { maxHeight = Math.max(maxHeight, el.clientHeight) });
			document.querySelectorAll('.step .row').forEach(el => { el.style.height = maxHeight + 'px' });
			const navs = document.querySelectorAll('.steps-carousel .owl-dot span');
			navs.forEach((nav, index) => nav.innerHTML = navTitles[index]);
		}
	});

	$('.steps-carousel').on('mousedown', function () {
		$('.steps-carousel').trigger('stop.owl.autoplay');
	});

	$('.owl-item.active .animate').each(function (element) {
		const animation = $(this).attr('data-anim');
		$(this).animateCss(animation);
	})


	const width = $('.feedback .logo').width();
	$('.feedback .logo').height(width)

	$('p.review').each(function () {
		$(this).moreLines({
			animationspeed: 250,
			linecount: 4,
			buttontxtmore: '<i style="margin:auto;" class="fa fa-arrow-down"></i>',
			buttontxtless: '<i style="margin:auto;" class="fa fa-arrow-up"></i>'
		});
	});

});
