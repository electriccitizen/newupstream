"use strict";(function(a,b){/* LAYOUT TABS
------------------------------------ */b.behaviors.layoutTabs={attach:function attach(b){a(".layout__region--tabs:not(.layout-builder__region)",b).once("isTabs").each(function(){a(".tabs-instructions").remove();var b=a(this).children();1<b.length&&(a(this).wrapInner("<div class=\"tabs-wrapper\"></div>"),a(".tabs-wrapper",this).prepend("<ul class=\"tabs-header\"></ul>"),b.each(function(){var b=a(".block-title",this).text(),c="tab"+Math.floor(100*Math.random()+1);a(".tabs-header").append("<li><a href=\"#\" class=\"tab-control\" aria-expanded=\"false\" aria-controls=\""+c+"\">"+b+"</a></li>"),a(this).wrapAll("<div id=\""+c+"\" class=\"tab-item\" aria-hidden=\"true\"></div>")}),a(".tab-item:first").attr("aria-hidden","false").addClass("open-tab"),a(".tab-control:first").attr("aria-expanded","true").addClass("active-tab")),a(".tab-control").click(function(b){if(b.preventDefault(),!a(this).is(".tab-control.active-tab")){var c=a(this).attr("aria-controls");a(".active-tab").removeClass("active-tab").attr("aria-expanded","false"),a(".open-tab").removeClass("open-tab").attr("aria-hidden","true").hide(),a(this).addClass("active-tab").attr("aria-expanded","true"),a(".tab-item#"+c).addClass("open-tab").attr("aria-hidden","false").fadeIn(500)}})})}}})(jQuery,Drupal);
//# sourceMappingURL=layouts.js.map
