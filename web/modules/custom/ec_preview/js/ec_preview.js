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
		});
  }
};

})(jQuery, Drupal, drupalSettings);
