(function($, Drupal) {

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
