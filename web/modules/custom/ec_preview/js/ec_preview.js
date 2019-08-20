(function($, Drupal) {

/* PREVIEW ACTION & FIXED
----------------------- */
Drupal.behaviors.previewAction = {
	attach: function (context, settings) {
    $("#edit-ec-preview", context).once('has-preview').each(function(){
		  //trigger preview
		  $(document).on('click','#edit-ec-preview',function(e) {
		    e.preventDefault();
		    $('.responsive-preview-icon-active').trigger('click');
		  });

		 	$(window).on('scroll', function() {
      	if($('.layout-region-node-footer').isInViewport()){
      		$('#edit-ec-preview').removeClass('fixed-preview');
      	}else{
      		$('#edit-ec-preview').addClass('fixed-preview');
      	}
      });
		});
  }
};

$.fn.isInViewport = function() {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();
	return elementBottom > viewportTop && elementTop < viewportBottom;
};

})(jQuery, Drupal, drupalSettings);
