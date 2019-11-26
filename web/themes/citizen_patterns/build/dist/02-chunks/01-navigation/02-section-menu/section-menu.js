"use strict";(function(a,b){function c(){var b=a(window).outerWidth();980>b?!a(".section-menu-toggle").attr("aria-controls")&&(a(".section-menu-toggle").attr({"aria-controls":"section-menu-wrapper","aria-expanded":"false"}),a("#section-menu-wrapper").attr("aria-hidden","true")):(a(".section-menu-toggle").removeAttr("aria-controls aria-expanded role"),a("#section-menu-wrapper").removeAttr("aria-hidden"))}b.behaviors.sectionMenu={attach:function attach(b){a(".block--system-menu.section-menu",b).once("section-menu").each(function(){//mobile toggle
//need doc ready because active-class script fires after theme scripts
a(".section-menu-toggle").click(function(b){b.preventDefault(),980>a(window).outerWidth()&&(a(this).is(".active-nav")?a(this).attr("aria-expanded","false").removeClass("active-nav").find("i").removeClass("fa-times-circle").addClass("fa-bars").closest("#section-menu-title").next("#section-menu-wrapper").attr("aria-hidden","true").slideUp(500):a(this).attr("aria-expanded","true").addClass("active-nav").find("i").removeClass("fa-bars").addClass("fa-times-circle").closest("#section-menu-title").next("#section-menu-wrapper").attr("aria-hidden","false").slideDown(500))}),a(window).on("resize",_.debounce(c,10)).trigger("resize"),a(document).ready(function(){//set button roles, tab indexes and keypresses on sidebar links
a("#section-menu-wrapper ul li").each(function(){//find active links and set the active trail
//find active-trail li and add aria expanded role to the expander
a("ul",this).length&&!a(".expander:first",this).length&&a(this).addClass("parent").prepend("<a href=\"#\" class=\"expander\" aria-expanded=\"false\" role=\"button\" aria-label=\"Section Submenu Expander\"></a>").find(" > a:not(.expander)").next("ul").attr("aria-hidden","true"),a(".is-active",this).removeAttr("href").siblings("ul").slideDown(100).attr("aria-hidden","false").end().parentsUntil("#section-menu-wrapper > ul").addClass("active-trail expanded"),a("li.active-trail > .expander").attr("aria-expanded","true").siblings("ul").attr("aria-hidden","false")}),a(document).on("click","#section-menu-wrapper .expander",function(b){b.preventDefault(),"false"==a(this).attr("aria-expanded")?a(this).attr("aria-expanded","true").siblings("ul").slideDown(300).attr("aria-hidden","false").end().closest("li").addClass("expanded"):a(this).attr("aria-expanded","false").siblings("ul").slideUp(300).attr("aria-hidden","true").end().closest("li").removeClass("expanded")})})})}//end section menu function
}})(jQuery,Drupal);
//# sourceMappingURL=section-menu.js.map
