"use strict";(function(a,b){/* USER LOGIN PASSWORD SHOW
------------------------------------ */b.behaviors.userLogin={attach:function attach(b){a("#user-login-form",b).once("showPass").each(function(){a(".show-password").click(function(b){b.preventDefault(),a(this).is(".show")?(a(this).removeClass("show").text("Show"),a("#edit-pass").attr("type","password")):(a(this).addClass("show").text("Hide"),a("#edit-pass").attr("type","text"))})})}}})(jQuery,Drupal);
//# sourceMappingURL=_forms.js.map
