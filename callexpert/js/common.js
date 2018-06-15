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

$(function () {

	$('.owl-carousel-main').owlCarousel({
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
	$('.steps-carousel').owlCarousel({
		nav: true,
		dots: true,
		loop: true,
		items: 1,
		onInitialized: function () {
			document.querySelectorAll('.steps-carousel .owl-dot span').forEach(function (element, index) {
				element.innerHTML = index + 1;
			});
		}
	});

	$('.owl-item.active .animate').each(function (element) {
		const animation = $(this).attr('data-anim');
		$(this).animateCss(animation);
	})


	const width = $('.feedback .logo').width();
	$('.feedback .logo').height(width)
	console.log(width);

	$('.feedbacks p').moreLines({
		animationspeed: 250,
		linecount: 3,
		buttontxtmore: '<i style="margin:auto;" class="fa fa-arrow-down"></i>',
		buttontxtless: '<i style="margin:auto;" class="fa fa-arrow-up"></i>'
	});


});
