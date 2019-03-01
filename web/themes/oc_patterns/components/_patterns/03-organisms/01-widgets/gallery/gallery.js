
(function($, Drupal) {

	//Swipebox script for lightbox images.
	Drupal.behaviors.gallery = {
		attach: function (context, settings) {
			//Featherlight
			$(".gallery-type.Lightbox", context).once('lightboxes').each(function(){
				$('.featherlight-gal', this).featherlightGallery({
					previousIcon: '<',
					nextIcon: '>',
					galleryFadeIn: 300,
					openSpeed: 300
				});
			});
			//Slider
			$(".gallery-type.Slider", context).once('slider').each(function(){
				$('.field-image-multi', this).slick({
					adaptiveHeight: true,
					autoplay: true,
					autoplaySpeed: 5000
				});
			});
		}
	}

})(jQuery, Drupal);
