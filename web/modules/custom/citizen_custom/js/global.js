(function($, Drupal) {

/* SELECT2
----------------------- */
Drupal.behaviors.mobileSelect = {
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

/* CUSTOM ENVIRONMENT INDICATOR
-------------------------- */
Drupal.behaviors.envIndicator = {
  attach: function (context, settings) {
    $("nav#toolbar-bar", context).once('localeID').each(function(){
      var env = document.location.origin;
      if(env.indexOf("docksal") > -1){
        $(this).addClass('local').append('<div class="toolbar-tab env"><span class="toolbar-item">Local</span></div>');
      }else if(env.indexOf("dev-") > -1){
        $(this).addClass('dev').append('<div class="toolbar-tab env"><span class="toolbar-item">Dev</span></div>');
      }else if(env.indexOf("test-") > -1){
        $(this).addClass('test').append('<div class="toolbar-tab env"><span class="toolbar-item">Test</span></div>');
      }else{
        $(this).addClass('live').append('<div class="toolbar-tab env"><span class="toolbar-item">Live</span></div>');
      }
    });
  }
};

})(jQuery, Drupal);
