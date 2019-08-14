(function($, Drupal) {

//highlight search results
Drupal.behaviors.dashboard = {
	attach: function (context, settings) {
	 	$(".user-tour").once('tSearch').each(function(){  
      $(function () {
        if (Cookies.get('userTour')) {
          $('.user-tour').remove()
        }
        else { 
          $('.user-tour').show()
        }
      });

      $(document).on('click','.tour-close',function(e){
        e.preventDefault();
        $(this).parent('.user-tour').fadeTo(10,0,function(){
          $(this).remove();
        });
        Cookies.set('userTour', '1', { expires: 1000 });
      });

		});
	}
}



})(jQuery, Drupal);



