"use strict";(function(a,b){b.behaviors.accordion={attach:function attach(b){a(".accordion-item",b).once("accordion").each(function(){//open and shut accordions on click
a(".accordion-header a",this).click(function(b){b.preventDefault();var c=a(this).parent(".accordion-header");c.closest(".accordion-item.accord-active").length?(a(".accord-active").removeClass("accord-active"),c.next().slideUp(300).attr("aria-hidden","true").end().find("a").attr("aria-expanded","false")):(a(".accord-active").find(".field-long-text").slideUp(300).attr("aria-hidden","true").end().removeClass("accord-active").find(".accordion-header a").attr("aria-expanded","false"),c.parent(".accordion-item").addClass("accord-active").end().next().slideDown(300).attr("aria-hidden","false").end().find("a").attr("aria-expanded","true"),setTimeout(function(){var b=a(window).scrollTop(),c=a(".accord-active").offset().top;b>c&&a("html, body").animate({scrollTop:a(".accord-active").offset().top-100})},510))})})}}})(jQuery,Drupal);
//# sourceMappingURL=accordion.js.map
