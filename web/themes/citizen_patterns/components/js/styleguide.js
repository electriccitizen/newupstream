

/* HIDE DEFAULT PATTERN LAB NAV & HEADER
---------------------------- */
$(".sg-colors").once('pl-script').each(function(){  
 	$('#sg-vp-wrap', window.parent.document).css({'top':'0','z-index':'5'});
 	$('#sg-gen-container,#sg-viewport', window.parent.document).css({'width':'100%'});
 	$('header.sg-header', window.parent.document).css({'opacity':'0'});
 	$('#sg-viewport', window.parent.document).css({'margin':'0 auto'});
});

/* CUSTOM STYLEGUIDE NAV
----------------------- */
$(document).ready(function(){
	$('.style-nav-toggle a').click(function(e){
		e.preventDefault();
		//open and shut the nav drawer
		if($('.style-nav-toggle.is-open').length){
		 	$('.style-nav-toggle').removeClass('is-open').closest('#styleguide-nav').animate({'left':'-205'}, 300);
		}else{
			$('.style-nav-toggle').addClass('is-open').closest('#styleguide-nav').animate({'left':'0'}, 300);
		}
	});

	//open sub groups on hover
	$('.parent-group').hover(function() {
    $(this).find('.sub-group-patterns').stop( true, true ).animate({'left':'200px'}, 300);
  }, function(){
  	$(this).find('.sub-group-patterns').stop( true, true ).animate({'left':'0'}, 300);
  });

  //scroll to link target on click and close the nav
  $('#pattern-groups a').each(function(){
  	var target = '#group-' + $(this).attr('data-group-target');
  	var device = $(this).attr('data-device');
  	$(this).click(function(e){
  		e.preventDefault();
  		$('.style-nav-toggle').removeClass('is-open').closest('#styleguide-nav').animate({'left':'-205'}, 300);
	  	$('.sub-group-patterns').animate({'left':'0'}, 300);
  		if($(target).length){
	  		$('html, body').animate({scrollTop: $(target).offset().top - 100});
  		}else{
  			if(device == 'mobile'){
  				$('#sg-viewport', window.parent.document).animate({'width':'520px'}, 300);
		  	}else if(device == 'tablet'){
		  		$('#sg-viewport', window.parent.document).animate({'width':'880px'}, 300);
		  	}else{
		  		$('#sg-viewport', window.parent.document).animate({'width':'100%'}, 300);
		  	}
  		}
  	});
  });
});

/* SF MOBILE FAKE
------------------- */
$('#superfish-main-toggle').click(function(){
	if(!$(this).is('.sf-expanded')){
		$(this).addClass('sf-expanded').find('.fas').removeClass('fa-bars').addClass('fa-times-circle');
		$('.sf-accordion').show().addClass('sf-expanded');
	}else{
		$(this).removeClass('sf-expanded').find('.fas').removeClass('fa-times-circle').addClass('fa-bars');
		$('.sf-accordion').hide().removeClass('sf-expanded');
		$('li.sf-expanded').removeClass('sf-expanded').find('> ul').hide().addClass('sf-hidden');
	}
});

$(document).on('click', '.sf-accordion .sf-accordion-button', function(){
	var controller = $(this).closest('li');
	if(!$(controller).is('.sf-expanded')){
		$(controller).siblings().removeClass('sf-expanded').find('> ul').slideUp(300).addClass('sf-hidden');
		$(controller).addClass('sf-expanded').find('> ul.sf-hidden').slideDown(300).removeClass('sf-hidden');
	}else{
		$(controller).removeClass('sf-expanded').find('> ul').slideUp(300).addClass('sf-hidden');
	}
});

$(window).on('resize',  _.debounce( mobileMainMenu, 10 )).trigger('resize');

function mobileMainMenu() {
  var wwidth = $(window).outerWidth();
  if (wwidth < 980) {
    $("ul.sf-horizontal").removeClass('sf-horizontal').addClass('sf-accordion sf-accordion-with-buttons');
  }else{
    $("ul.sf-accordion").removeClass('sf-accordion sf-accordion-with-buttons').addClass('sf-horizontal');
  }
};

/* PARAGRAPHS
------------------ */

//toggle between galleries
$(".gallery-options select").change(function(){
	var chosen = $(this).find('option:selected').val();
	if(chosen == 'slider'){
		$('.paragraph--type--gallery.lightbox').fadeOut(300);
		$('.paragraph--type--gallery.slider .field-image-multi').slick('unslick');
		$('.paragraph--type--gallery.slider').delay(300).fadeIn(300);
		//need to reinitialize slick to get the correct height calculated
		setTimeout(function(){
			$('.paragraph--type--gallery.slider .field-image-multi').slick({
				adaptiveHeight: true,
				autoplay: true,
				autoplaySpeed: 5000
			});
		}, 100);
	}else{
		$('.paragraph--type--gallery.slider').fadeOut(300);
		$('.paragraph--type--gallery.lightbox').delay(300).fadeIn(300);
	}
});

//lightbox
$(".gallery-type.lightbox").each(function(){
	$(document).ready(function(){
		$('.featherlight-gal', this).featherlightGallery({
			previousIcon: '<',
			nextIcon: '>',
			galleryFadeIn: 300,
			openSpeed: 300
		});
	});
});
//Slider
$(".gallery-type.slider").each(function(){
	$(document).ready(function(){
		$('.field-image-multi', this).slick({
			adaptiveHeight: true,
			autoplay: true,
			autoplaySpeed: 5000
		});
	});
});
