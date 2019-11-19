(function($, Drupal) {

//pattern lab specific scripts go here
Drupal.behaviors.plScripts = {
  attach: function (context, settings) {
    $(".sg-colors").once('pl-script').each(function(){  
     	$('#sg-vp-wrap', window.parent.document).css({'top':'0','z-index':'5'});
     	$('#sg-gen-container,#sg-viewport', window.parent.document).css({'width':'100%'});
    });
  }
}

})(jQuery, Drupal);
