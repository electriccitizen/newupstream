'use strict';(function(a,b){b.behaviors.stackTable={attach:function attach(b){a('.layout-container table',b).once('responsive_table').each(function(){a(this).cardtable({myClass:'responsive-table'}),a(document).ajaxComplete(function(){a('.layout-container table').cardtable({myClass:'responsive-table'})})})}},b.behaviors.removeEmpty={attach:function attach(b){a('#superfish-main',b).once('removeEmpty').each(function(){a(document).ready(function(){a('ul.sf-hidden',this).each(function(){a('li',this).length||(a(this).closest('li').removeClass('menuparent'),a(this).siblings('a').removeClass('menuparent'),a(this).remove())})})})}},b.behaviors.removeEmptyRegions={attach:function attach(b){a('.layout > .layout__region:not(.ui-sortable)',b).once('removeEmpty').each(function(){a(this).children().length||a(this).remove()})}},b.behaviors.backToTop={attach:function attach(b){a('html.js',b).once('backTop').each(function(){a(window).scroll(function(){var b=.8*a(window).height();a(this).scrollTop()>b?a('.back-anchor').fadeIn(200):a('.back-anchor').fadeOut(200)}),a('.back-anchor a').click(function(b){b.preventDefault(),a('html, body').animate({scrollTop:a('body').offset().top-10})})})}}})(jQuery,Drupal);
//# sourceMappingURL=global.js.map
