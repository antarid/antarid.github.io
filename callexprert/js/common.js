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
		loop: true,
		margin: 0,
		nav: true,
		items: 1,
		onTranslated: animate,
	})

	$('.owl-carousel-feedbacks').owlCarousel({
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

	$('.owl-item.active .animate').each(function (element) {
		const animation = $(this).attr('data-anim');
		$(this).animateCss(animation);
	})

});
