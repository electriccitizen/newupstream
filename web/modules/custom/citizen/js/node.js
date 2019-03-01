(function($, Drupal) {

Drupal.behaviors.admin_bkimage = {
	attach: function (context, settings) {
		$(".field--name-field-paragraphs", context).once('style').each(function(){  
			$(document).ajaxComplete(function() {
				$('.field--name-field-background-style').each(function(){
					var styler = $(this);
					var chosen = $('select', this).find("option:selected").val();
					if(chosen != 'image'){
						styler.next('.field--name-field-background-image').slideUp(300);
					}else{
						styler.next('.field--name-field-background-image').slideDown(300);
					}
					$(this).find('select').change(function(){
						//alert('changed');
						var choice = $(this).find("option:selected").val();
						if(choice != 'image'){
							styler.next('.field--name-field-background-image').slideUp(300);
						}else{
							styler.next('.field--name-field-background-image').slideDown(300);
						}
					});
				});
			});
		});
	}
};



})(jQuery, Drupal);