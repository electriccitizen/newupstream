(function($, Drupal) {
Drupal.behaviors.pageMenu = {
	attach: function (context, settings) {
		$(".block--system-menu.page-menu", context).once('page-menu').each(function(){  
			//mobile toggle
			$('.page-menu-toggle').click(function(e){
				e.preventDefault();
				if($('.page-menu-toggle.open').length){
					$('#page-menu-wrapper').slideUp(300).attr('aria-hidden', 'true');
					$('.page-menu-toggle').find('i').removeClass('fa-times-circle').addClass('fa-bars').end().attr('aria-expanded', 'false').removeClass('open');
				}else{
					$('#page-menu-wrapper').slideDown(300).attr('aria-hidden', 'false');
					$('.page-menu-toggle').find('i').removeClass('fa-bars').addClass('fa-times-circle').end().attr('aria-expanded', 'true').addClass('open');
				}
			});
					
			//need doc ready because active-class script fires after theme scripts
			$(document).ready(function(){
				$('#page-menu-wrapper ul li').each(function(){			
					//find active links and set the active trail
					$('.is-active', this).parentsUntil('#page-menu-wrapper > ul').addClass('active-trail expanded');

					//find nested lists and set their parents and expanders
					if(($('#page-menu-wrapper > ul', this).length) && (!$('.expander:first', this).length) ){
					  $(this).addClass('parent').prepend('<button class="expander" aria-expanded="false"></button>');
					}


					//find active-trail li and add aria expanded role
					$('li.active-trail > .expander').attr('aria-expanded', "true");
				});

				//set button roles, tab indexes and keypresses on sidebar links
				$('#page-menu-wrapper a').each(function(i){
					//find heirarchies in the menu and add a class to each link
					$(this).addClass('level-' + $(this).parents('.page-menu ul').length);
					$(this).attr('tabindex', '0');
					$(this).attr('role', 'button');
					$(this).focusin(function(e){
						$(this).keydown(function(e) {
							if((e.which === 13) && (e.target === this)){  //on enter
								document.location = $('a:first-child', this).attr('href');
							}
						});
					});
				});

				//change expanded class and aria-roles on expander click
				$('.expander').click(function(){
					$(this).closest('li').toggleClass('expanded');
					if($(this).attr('aria-expanded') == 'false'){
						$(this).attr('aria-expanded', "true");
					}else{
						$(this).attr('aria-expanded', "false");
					}
				});
			});

			
		});
	}
}
})(jQuery, Drupal);
