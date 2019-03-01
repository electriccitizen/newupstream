(function($, Drupal) {
/* distinguish video from other oc media */
Drupal.behaviors.ocMediaEmbedded = {
	attach: function (context, settings) {
		$('.citizen-media .field-media-video-embed-field', context).once('isVideo').each(function(){  
			$(this).closest('.citizen-media').addClass('has-video');
		});
	}
};
})(jQuery, Drupal);
