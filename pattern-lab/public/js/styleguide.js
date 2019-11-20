

/* HIDE DEFAULT PATTERN LAB NAV & HEADER
---------------------------- */
$(".sg-colors").once('pl-script').each(function(){  
 	$('#sg-vp-wrap', window.parent.document).css({'top':'0','z-index':'5'});
 	$('#sg-gen-container,#sg-viewport', window.parent.document).css({'width':'100%'});
});

/* CUSTOM STYLEGUIDE NAV
----------------------- */
$(document).ready(function(){
	$('.style-nav-toggle a').click(function(e){
		e.preventDefault();
		//open and shut the nav drawer
		if($('.style-nav-toggle.is-open').length){
		 	$('.style-nav-toggle').removeClass('is-open').closest('#styleguide-nav').animate({'left':'-210'}, 300);
		}else{
			$('.style-nav-toggle').addClass('is-open').closest('#styleguide-nav').animate({'left':'0'}, 300);
		}
	});

	//open sub groups on hover
	$('.parent-group').hover(function() {
    $(this).find('.sub-group-patterns').stop( true, true ).animate({'left':'210px'}, 300);
  }, function(){
  	$(this).find('.sub-group-patterns').stop( true, true ).animate({'left':'0'}, 300);
  });
});