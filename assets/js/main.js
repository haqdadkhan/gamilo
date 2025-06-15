"user strict";

$(document).ready(function () {
	//menu header bar
	$(".header-bar").on("click", function (e) {
		$(".main-menu, .header-bar").toggleClass("active");
	});
	$(".main-menu li a").on("click", function (e) {
		$(".main-menu, .header-bar").removeClass("active");
		var element = $(this).parent("li");
		if (element.hasClass("open")) {
			element.removeClass("open");
			element.find("li").removeClass("open");
			element.find("ul").slideUp(300, "swing");
		} else {
			element.addClass("open");
			element.children("ul").slideDown(300, "swing");
			element.siblings("li").children("ul").slideUp(300, "swing");
			element.siblings("li").removeClass("open");
			element.siblings("li").find("li").removeClass("open");
			element.siblings("li").find("ul").slideUp(300, "swing");
		}
	});
	//menu header bar
	$(".banner__left__wrap").owlCarousel({
		loop: true,
		margin: 20,
		smartSpeed: 2500,
		autoplayTimeout: 3000,
		autoplay: false,
		nav: true,
		dots: true,
		responsiveClass: true,
		navText: [
			'<i class="fa-solid fa-chevron-right"></i>',
			'<i class="fas fa-chevron-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 1,
			},
			767: {
				items: 1,
			},
			991: {
				items: 1,
			},
			1199: {
				items: 1,
			},
			1399: {
				items: 1,
			},
		},
	});
	$(".battle__wrap").owlCarousel({
		loop: true,
		margin: 20,
		smartSpeed: 2500,
		autoplayTimeout: 3000,
		autoplay: false,
		nav: true,
		dots: true,
		responsiveClass: true,
		navText: [
			'<i class="fa-solid fa-chevron-right"></i>',
			'<i class="fas fa-chevron-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 1,
			},
			767: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1199: {
				items: 2,
			},
			1399: {
				items: 3,
			},
		},
	});
	$(".bonus__wrapper").owlCarousel({
		loop: true,
		margin: 20,
		smartSpeed: 2500,
		autoplayTimeout: 3000,
		autoplay: false,
		nav: true,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="fa-solid fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			400: {
				items: 2,
			},
			500: {
				items: 3,
			},
			767: {
				items: 3,
			},
			991: {
				items: 4,
			},
			1200: {
				items: 5,
			},
			1399: {
				items: 6,
			},
		},
	});
	$(".porvider__wrapper").owlCarousel({
		loop: true,
		margin: 20,
		smartSpeed: 2500,
		autoplayTimeout: 3000,
		autoplay: false,
		nav: true,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="fa-solid fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			400: {
				items: 1,
			},
			500: {
				items: 2,
			},
			767: {
				items: 2,
			},
			991: {
				items: 3,
			},
			1199: {
				items: 3,
			},
			1399: {
				items: 3,
			},
		},
	});



	//Magnifiq pupup
	$('.picture-btn').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	$('.play-btn').magnificPopup({
		type: 'iframe',
		callbacks: {

		}
	});
	//Magnifiq pupup

	// password hide
	$(".toggle-password, .toggle-password2, .toggle-password3, .toggle-password4, .toggle-password5, .toggle-password6, .toggle-password7, .toggle-password8, .toggle-password9").click(function () {
		$(this).toggleClass("fa-eye fa-eye-slash");
		var input = $($(this).attr("id"));
		if (input.attr("type") == "password") {
			input.attr("type", "text");
		} else {
			input.attr("type", "password");
		}
	});

	//menu top fixed bar
	var fixed_top = $(".header-section");
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 220) {
			fixed_top.addClass("menu-fixed animated fadeInDown");
			fixed_top.removeClass("slideInUp");
			$("body").addClass("body-padding");
		} else {
			fixed_top.removeClass("menu-fixed fadeInDown");
			fixed_top.addClass("slideInUp");
			$("body").removeClass("body-padding");
		}
	});
	//menu top fixed bar

	// click even scroll bar
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 300) {
			$(".scrollToTop").fadeIn();
		} else {
			$(".scrollToTop").fadeOut();
		}
	});
	// click even scroll bar

	// scroll top bottom bar
	$(".scrollToTop").on("click", function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			700
		);
		return false;
	});
	// scroll top bottom bar

	// wow animation
	new WOW().init();
	// wow animation

	//preloader
	setTimeout(function () {
		$('.preloader').fadeToggle();
	}, 1600);
	//preloader

	//--Nice Select--//
	$('select').niceSelect();

});


