(function($, window, document, undefined){
	
	$.fn.sliders = function(options) {

		var settings = $.extend({
			infinite: true,
			index: 0,
			slidesVisible: 1,
			slidesToScroll: 1,
			arrows: true,
			swipeAble: true,
			pagination: true,
			autoplay: true,
			autoplaySpeed: 5000
		}, options);
		
		return this.each(function () {
			var slides = $(this).children(".slide");
			
			if (settings.autoplay && settings.slidesVisible == 1) {
				start = function() {
					slides[0].style.display = "block";

					setInterval(function () {
						for (i = 0; i < slides.length; i++) {
							if (slides[i].style.display == "block") {
								if (i < slides.length - 1) {
									slides[i].style.display = "none";
									slides[i+1].style.display = "block";
								} else {
									slides[i].style.display = "none";
									slides[0].style.display = "block";
								}
								return;
							}
						}	
					}, settings.autoplaySpeed);
				};
				start();
			} else {slides[0].style.display = "block"}
		});
	};
	
}) (jQuery, window, document);

window.addEventListener("load", function() {
	$('.slider').sliders({autoplaySpeed: 2000});
	$('.slider1').sliders({autoplaySpeed: 2000});
	$('.slider2').sliders();
	$('.slider3').sliders({autoplay: false});
});



