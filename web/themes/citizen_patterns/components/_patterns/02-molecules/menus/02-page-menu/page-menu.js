(function($, Drupal) {
Drupal.behaviors.pageMenu = {
	attach: function (context, settings) {
		$(".block--system-menu.page-menu", context).once('page-menu').each(function(){  
			//mobile toggle
			$('.page-menu-toggle').click(function(e){
				e.preventDefault();
		      if($(window).outerWidth() < 760){
		        if($(this).is('.active-nav')){
		          $(this).attr('aria-expanded', 'false').removeClass('active-nav').find('i').removeClass('fa-times-circle').addClass('fa-bars').closest('#page-menu-title').next('#page-menu-wrapper').attr('aria-hidden', 'true').slideUp(500);
		        }else{
		          $(this).attr('aria-expanded', 'true').addClass('active-nav').find('i').removeClass('fa-bars').addClass('fa-times-circle').closest('#page-menu-title').next('#page-menu-wrapper').attr('aria-hidden', 'false').slideDown(500);
		        }
		      }
			});

			$(window).on('resize',  _.debounce( mobilePagenav, 10 )).trigger('resize');
					
			//need doc ready because active-class script fires after theme scripts
			$(document).ready(function(){
				$('#page-menu-wrapper ul li').each(function(){

					//find nested lists and set their parents and expanders
					if(($('ul', this).length) && (!$('.expander:first', this).length) ){
					  $(this).addClass('parent').prepend('<a href="#" class="expander" aria-expanded="false" role="button"></a>').find(' > a:not(.expander)').next('ul').attr('aria-hidden', 'true');
					}

					//find active links and set the active trail
					$('.is-active', this).attr('aria-expanded', 'true').siblings('ul').slideDown(100).attr('aria-hidden', 'false').end().parentsUntil('#page-menu-wrapper > ul').addClass('active-trail expanded');

					//find active-trail li and add aria expanded role to the expander
					$('li.active-trail > .expander').attr('aria-expanded', "true").siblings('ul').attr('aria-hidden', 'false');
				});

				//set button roles, tab indexes and keypresses on sidebar links
				$(document).on('click','#page-menu-wrapper .expander',function(e){
					e.preventDefault();
          $(this).closest('li').toggleClass('expanded');
          if($(this).attr('aria-expanded') == 'false'){
            $(this).attr('aria-expanded', "true").siblings('ul').slideDown(500).attr('aria-hidden', 'false').end().closest('li').removeClass('expanded');
          }else{
            $(this).attr('aria-expanded', "false").siblings('ul').slideUp(500).attr('aria-hidden', 'true');
          }
				});

			});
		});
	}
}//end page menu function

function mobilePagenav() {
  var wwidth = $(window).outerWidth();
  if (wwidth < 980) {
    //add aria roles to menu title and wrapper if not already set by click above 
    if(!$('.page-menu-toggle').attr('aria-controls')){
      $('.page-menu-toggle').attr({
        'aria-controls': 'page-menu-wrapper', 
        'aria-expanded': 'false', 
        'role': 'button'
      });
      $('#page-menu-wrapper').attr('aria-hidden', 'true');
    } 
  }else{
    //strip all aria roles & prevent click
    $('.page-menu-toggle').removeAttr('aria-controls aria-expanded role');
    $('#page-menu-wrapper').removeAttr('aria-hidden');
  }
};


})(jQuery, Drupal);
