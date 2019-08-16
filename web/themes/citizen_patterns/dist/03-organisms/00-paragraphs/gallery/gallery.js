"use strict";(function(a,b){//Swipebox script for lightbox images.
b.behaviors.gallery={attach:function attach(b){//Featherlight
//Slider
a(".gallery-type.Lightbox",b).once("lightboxes").each(function(){a(document).ready(function(){a(".featherlight-gal",this).featherlightGallery({previousIcon:"<",nextIcon:">",galleryFadeIn:300,openSpeed:300})})}),a(".gallery-type.Slider",b).once("slider").each(function(){a(document).ready(function(){a(".field-image-multi",this).slick({adaptiveHeight:!0,autoplay:!0,autoplaySpeed:5e3})})})}}})(jQuery,Drupal);
//# sourceMappingURL=gallery.js.map
