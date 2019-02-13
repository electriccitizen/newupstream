
(function($, Drupal) {

//Swipebox script for lightbox images.
Drupal.behaviors.gallery = {
	attach: function (context, settings) {

		$(".Lightbox", context).once('lightboxes').each(function(){
			$('.featherlight-gal', this).featherlightGallery({
				previousIcon: '<',
				nextIcon: '>',
				galleryFadeIn: 300,
				openSpeed: 300
			});
		});



//Swipebox script for lightbox images.
$(".paragraph--type--slideshow", context).once('slider').each(function(){
  $('.field-oc-image-multi', this).slick({
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000
  });
});

    }
}

})(jQuery, Drupal);
