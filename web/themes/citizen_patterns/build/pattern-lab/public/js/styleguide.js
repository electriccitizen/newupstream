

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

/* PAGE SECTION MENU
------------------- */
$(document).ready(function(){
	$('#section-menu-wrapper a.is-active').parentsUntil('#section-menu-wrapper > ul').addClass('active-trail expanded');
});
$('.section-menu-toggle').click(function(){
  if($(window).outerWidth() < 980){
    if($(this).is('.active-nav')){
      $(this).removeClass('active-nav').find('i').removeClass('fa-times-circle').addClass('fa-bars').closest('#section-menu-title').next('#section-menu-wrapper').slideUp(500);
    }else{
      $(this).addClass('active-nav').find('i').removeClass('fa-bars').addClass('fa-times-circle').closest('#section-menu-title').next('#section-menu-wrapper').slideDown(500);
    }
  }
});
$('#section-menu-wrapper .expander').click(function(){
	var controller = $(this).closest('li');
  if(!$(controller).is('.expanded')){
		$(controller).siblings().removeClass('expanded').find('> ul').slideUp(300);
		$(controller).addClass('expanded').find('> ul').slideDown(300);
	}else{
		$(controller).removeClass('expanded').find('> ul').slideUp(300);
	}
});

/* ANCHOR NAVIGATION
------------------- */
$('.toc-toggle').click(function(){
	console.log('anchors');
	var controller = $(this).closest('#toc-title');
  if(!$(controller).is('.active-nav')){
		$(controller).addClass('active-nav').next().slideDown(300);
	}else{
		$(controller).removeClass('active-nav').next().slideUp(300);
	}
});

/* FILTERS
------------------- */
$('input[type="submit"]').click(function(e){
	e.preventDefault();
});

/* PAGER
------------------- */
$('#chunks-pager .count-shim').each(function(){  
	//add pager counter to results
	var count = $('.count-shim').html();
	$('.pager__current').append('<span>' + count + '</span>');
	if(count > 7){
		$('nav.pager').addClass('results-pager');
		$('.results-count').prependTo('.pager').wrap('<div class="results-count-wrapper"></div>');
		$('.pager__number,.results-count').show();
	}else{
		$('.pager__current').show();
	}
});
$('#pager-numbers').change(function(){
	var pCount = $(this).val();
	$('.count-shim').html(pCount);
	var count = $('.count-shim').html();
	$('.pager__current').find('span').remove().end().append('<span>' + count + '</span>');
	var perPage = $('.per-page').html();
	var total = pCount * perPage;
	$('.total-items').html(total);
	if(count > 7){
		$('nav.pager').addClass('results-pager');
		if(!$('.results-count-wrapper').length){
			$('.results-count').prependTo('.pager').wrap('<div class="results-count-wrapper"></div>');
		}
		$('.pager__number,.results-count,.results-count-wrapper').show();
		$('.pager__current').hide()
	}else{
		$('nav.pager').removeClass('results-pager');
		$('.pager__current').show();
		$('.pager__number,.results-count,.results-count-wrapper').hide();
	}
});

/* SEARCH
------------------- */
$('.t-search').click(function(){
	$('#search-form-wrapper').slideDown(300);
	$('.t-search-close').delay(300).fadeIn(300);
});
$('.t-search-close').click(function(){
	$('.t-search-close').fadeOut(300);
	$('#search-form-wrapper').slideUp(300);
});

/* NEWSLETTER
------------------- */
$('.block-newsletter .modal-trigger').click(function(){
	$('#newsletter-modal').show(0).find('.modal-inner').fadeIn(400);
});
$('.block-newsletter .modal-close').click(function(){
	$('#newsletter-modal').find('.modal-inner').fadeOut(400).end().hide(0);
});


/* PARAGRAPHS
------------------ */
//accordions
$('.accordion-header a').click(function(){
  var activeHeader = $(this).parent('.accordion-header');
  if(activeHeader.closest('.accordion-item.accord-active').length){
    $('.accord-active').removeClass('accord-active');
    activeHeader.next().slideUp(300);
  }else{
    $('.accord-active').find('.field-long-text').slideUp(300).end().removeClass('accord-active');
    activeHeader.parent('.accordion-item').addClass('accord-active').end().next().slideDown(300);
  }
});

//toggle image sizes
$(".image-options select").change(function(){
	var chosen = $(this).find('option:selected').val();
	$('#composites-pl-image .image-wrapper').fadeOut(300).queue(function(next){
		$('#composites-pl-image .image-wrapper').removeClass('default full large medium small').addClass(chosen).dequeue();
	});
	$('#composites-pl-image .image-wrapper').fadeIn(600);
});


//toggle between galleries
$(".gallery-options select").change(function(){
	var chosen = $(this).find('option:selected').val();
	if(chosen == 'slider'){
		$('#composites-pl-gallery .paragraph--type--gallery.lightbox').fadeOut(500);
		$('#composites-pl-gallery .paragraph--type--gallery.slider').delay(500).removeClass('in-active');
	}else{
		$('#composites-pl-gallery .paragraph--type--gallery.slider').addClass('in-active');
		$('#composites-pl-gallery .paragraph--type--gallery.lightbox').fadeIn(500);
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

// Links & Files
$(document).ready(function(){  
	//hide any items past the default number displayed
	var count = $('#lf-numbers').val();
	var lastShown = $('#composites-pl-links-files .lf-item[data-item="' + count + '"]');
	lastShown.nextAll().hide();
});
$('#lf-numbers').change(function(){
	//when the current number displayed changes, show it and all previous and hide all the rest
	var count = $('#lf-numbers').val();
	var lastShown = $('#composites-pl-links-files .lf-item[data-item="' + count + '"]');
	lastShown.fadeIn(200).prevAll().fadeIn(200).end().nextAll().fadeOut(200);
	//reset the multi-col class depending on the count
	if(count < 5){
		$('#composites-pl-links-files .links-files').removeClass('multi-col');
	}else{
		$('#composites-pl-links-files .links-files').addClass('multi-col');
	}
});
