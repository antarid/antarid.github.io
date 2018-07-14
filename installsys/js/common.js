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

function eqHeight(selector) {
	let maxHeight = 0;
	document.querySelectorAll(selector).forEach(function (el) {
		maxHeight = Math.max(maxHeight, el.clientHeight);
	});
	document.querySelectorAll(selector).forEach(function (el) {
		el.style.height = maxHeight + 'px';
	});
}

var contacts = [
	{
		coordinates: { lat: 53.881113, lng: 27.593619 },
		name: 'офис Арлекс',
		address: 'Беларусь, г.Минск, Партизанский пр-т, 8к11',
		country: 'Главный офис',
		phones: ['+375 29 678 88 61', '+38 044 453 56 67'],
		email: 'export@arleks.com',
		site: ''
	}
]

const styles = [
	{
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#f5f5f5"
			}
		]
	},
	{
		"elementType": "labels.icon",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#616161"
			}
		]
	},
	{
		"elementType": "labels.text.stroke",
		"stylers": [
			{
				"color": "#f5f5f5"
			}
		]
	},
	{
		"featureType": "administrative.land_parcel",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#bdbdbd"
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#eeeeee"
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#757575"
			}
		]
	},
	{
		"featureType": "poi.park",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#e5e5e5"
			}
		]
	},
	{
		"featureType": "poi.park",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#9e9e9e"
			}
		]
	},
	{
		"featureType": "road",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#ffffff"
			}
		]
	},
	{
		"featureType": "road.arterial",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#757575"
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#dadada"
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#616161"
			}
		]
	},
	{
		"featureType": "road.local",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#9e9e9e"
			}
		]
	},
	{
		"featureType": "transit.line",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#e5e5e5"
			}
		]
	},
	{
		"featureType": "transit.station",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#eeeeee"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#c9c9c9"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#9e9e9e"
			}
		]
	}
];

const apiKey = "AIzaSyCyv1xF1DteSG3SafAy-20EqYYftsqKt6U";

function initMap() {

	var map = new google.maps.Map(document.querySelector('.map-container'), {
		zoom: 6,
		mapTypeControl: false,
		streetViewControl: false,
		fullscreenControl: false,
		center: { lat: 53.9, lng: 27.56667 },
		styles
	});

	document.querySelectorAll('.info-windows .info-window').forEach(function (project) {
		const address = project.querySelector('.address').innerHTML;
		fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + address.split(' ').join('+') + '&key=' + apiKey)
			.then(function (res) { return res.json() })
			.then(function (data) {
				const coords = data.results[0].geometry.location;
				const marker = new google.maps.Marker({
					title: address,
					position: coords,
					map: map,
					icon: 'https://raw.githubusercontent.com/antarid/antarid.github.io/master/admore/img/clients/logo1.png'
				});
				const infowindow = new google.maps.InfoWindow({
					content: project.outerHTML
				});
				marker.addListener('click', function () {
					infowindow.open(map, marker);
				});
			});
	})

}

function onScroll(event) {
	var scrollPosition = $(document).scrollTop();
	if (document.body.clientWidth > 768) {
		$('.nav-item').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));
			const padding = document.querySelector('header').clientHeight;
			if (refElement.position().top <= scrollPosition + padding && refElement.position().top + refElement.height() > scrollPosition - padding) {
				$('.nav-item').removeClass("active");
				currentLink.addClass("active");
			}
			else {
				currentLink.removeClass("active");
			}
		});
	}
}

function eventListenersSetup() {
	$(document).on("scroll", onScroll);

	var active;

	const padding = document.querySelector('header').clientHeight - 1;


	$('.hidden-button-to-contacts').on('click', function () {
		$('html, body').stop().animate({
			'scrollTop': $('#footer').offset().top - padding
		});
	});

	if (document.body.clientWidth > 768) {
		$('.nav-item').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");

			if ((active = document.querySelector('.nav-item.active')))
				active.classList.remove('active');

			$(this).addClass('active');

			var target = this.hash;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top - padding
			}, 500, 'swing', function () {
				$(document).on("scroll", onScroll);
			});
		});
	}
}

function carouselsSetup() {
	$('.home-owl-carousel').owlCarousel({
		dots: false,
		loop: true,
		margin: 0,
		nav: false,
		autoplay: true,
		items: 1,
	});

	$('.owl-carousel.testimonials').owlCarousel({
		dots: false,
		loop: true,
		margin: 0,
		items: 1,
		nav: false,
	});

	$('.owl-carousel.services').owlCarousel({
		dots: false,
		loop: true,
		margin: 0,
		items: 1,
		nav: false,
		dots: true,
		dotsContainer: 'ul.services-carousel-navs'
	});
	document.querySelectorAll('ul.services-carousel-navs li').forEach(function (nav, index) {
		nav.addEventListener('click', function (e) {
			e.preventDefault();
			$('.owl-carousel.services').trigger('to.owl.carousel', [index]);
		});
	});

}

function formSetup() {
	document.querySelector('#send').addEventListener('click', function (e) {
		e.preventDefault();

		const name = document.querySelector('#name').value;
		const email = document.querySelector('#email').value;
		const phone = document.querySelector('#phone').value;
		const message = document.querySelector('#message').value;

		document.querySelector('.response').innerHTML = 'Спасибо,' + name + ', наш специалист свяжется с вами в ближейшее время.';
		$('.response').animateCss('bounceInUp');

		console.log(name, email, phone, message);
	});
}

$(function () {
	eventListenersSetup();
	carouselsSetup();
	formSetup();
	eqHeight('.client-logo');
	eqHeight('.service-image');

});
