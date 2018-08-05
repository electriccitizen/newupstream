(function($, Drupal) {

/* Apply select2*/
Drupal.behaviors.mobileSelect = {
	attach: function (context, settings) {
      $("select", context).once('selects').each(function(){  
      	$( 'form:not(.entity-embed-dialog):not(.entity-form-display-form):not(.entity-view-display-form):not(.layout-builder-add-block):not(.layout-builder-update-block) select,.sg-pattern-example select' ).select2({
      		placeholder: "Select an option"
      	});
   	});
   }
};


})(jQuery, Drupal);