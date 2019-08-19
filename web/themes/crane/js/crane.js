(function($, Drupal) {

/* SELECT2
----------------------- */
Drupal.behaviors.advancedSelect = {
	attach: function (context, settings) {
    $("select", context).once('selects').each(function(){
    	$( 'form:not(.entity-embed-dialog):not(.entity-form-display-form):not(.entity-view-display-form):not(.layout-builder-add-block):not(.layout-builder-update-block) select,.sg-pattern-example select' ).select2({
    		placeholder: "Select an option"
    	});
      $(".path-node .js-form-type-select", context).once('selectAccessiblity').each(function(){
        $(document).ready(function(){
          $('.select2-search__field').each(function(){
            var label = $(this).closest('.select2-container').siblings('label').text();
            $(this).attr('aria-label',label).removeAttr('role');
          });
        });
      });
   	});
   }
};

})(jQuery, Drupal);
