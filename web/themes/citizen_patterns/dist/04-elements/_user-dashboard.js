"use strict";(function(a,b){//highlight search results
b.behaviors.dashboard={attach:function attach(){a(".user-tour").once("tSearch").each(function(){a(function(){Cookies.get("userTour")?a(".user-tour").remove():a(".user-tour").show()}),a(document).on("click",".tour-close",function(b){b.preventDefault(),a(this).parent(".user-tour").fadeTo(10,0,function(){a(this).remove()}),Cookies.set("userTour","1",{expires:1e3})})})}}})(jQuery,Drupal);
//# sourceMappingURL=_user-dashboard.js.map
