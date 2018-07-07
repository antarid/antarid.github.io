$(function () {

	document.querySelector('#contact-us-button').addEventListener('click', function () {
		console.log('here');
		document.querySelector('.form-container').classList.add('active');
		document.querySelector('.blur').classList.add('active');
	});

	document.querySelector('#close-button').addEventListener('click', function () {
		document.querySelector('.form-container').classList.remove('active');
		document.querySelector('.blur').classList.remove('active');
	});

	document.querySelector('#menu-toggle-button').addEventListener('click', function () {
		document.querySelector('header .menu').classList.toggle('active');
	});



	function onResize() {
		const windowWidth = document.body.clientWidth;
		const popupWidth = document.querySelector('.popup').clientWidth;
		document.querySelectorAll('.popup-blockchain').forEach(function (element) {
			element.style.transform = 'translateX(' + ((+ (windowWidth) / 2) + 50) + 'px)';
		})
		document.querySelectorAll('.popup').forEach(function (element) {
			element.style.transform = 'translateX(' + (- ((windowWidth) / 2) - 50) + 'px)';
		})
	}

	window.onresize = onResize;
	onResize();

	document.querySelectorAll('.blockchain-control').forEach(function (control) {
		control.addEventListener('click', function () {
			if (control.classList.contains('active')) {
				document.querySelector('.popup-blockchain.previous').classList.remove('previous');
				document.querySelector('.popup-blockchain.active').classList.add('previous');
				document.querySelector('.popup-blockchain.previous').classList.remove('active');
				control.classList.remove('active');
				return;
			}
			if (document.querySelector('.popup-blockchain.active')) {
				document.querySelector('.popup-blockchain.previous').classList.remove('previous');
				document.querySelector('.popup-blockchain.active').classList.add('previous');
				document.querySelector('.popup-blockchain.previous').classList.remove('active');
			}
			setTimeout(function () {
				document.querySelectorAll('.popup-blockchain').forEach(function (element) {
					if (element.attributes['data-name'] && element.attributes['data-name'].value === control.attributes['data-name'].value)
						element.classList.add('active');

				});
			}, 200);
			document.querySelectorAll('.blockchain-control').forEach(function (control) {
				control.classList.remove('active');
			})
			control.classList.add('active');
		});
	});

	document.querySelectorAll('.control').forEach(function (control) {
		control.addEventListener('click', function () {
			if (control.classList.contains('active')) {
				document.querySelector('.popup.previous').classList.remove('previous');
				document.querySelector('.popup.active').classList.add('previous');
				document.querySelector('.popup.previous').classList.remove('active');
				control.classList.remove('active');
				return;
			}
			if (document.querySelector('.popup.active')) {
				document.querySelector('.popup.previous').classList.remove('previous');
				document.querySelector('.popup.active').classList.add('previous');
				document.querySelector('.popup.previous').classList.remove('active');
			}
			setTimeout(function () {
				document.querySelectorAll('.popup').forEach(function (element) {
					if (element.attributes['data-name'] && element.attributes['data-name'].value === control.attributes['data-name'].value)
						element.classList.add('active');
				});
			}, 200);
			document.querySelectorAll('.control').forEach(function (control) {
				control.classList.remove('active');
			})
			control.classList.add('active');
		});
	});



});
