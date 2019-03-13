'use strict';

(function ($, Drupal) {

  /* RESPONSIVE TABLES WITH STACKTABLE
  ------------------------------------ */
  Drupal.behaviors.stackTable = {
    attach: function attach(context, settings) {
      $('.layout-container table', context).once('responsive_table').each(function () {
        $(this).cardtable({ myClass: 'responsive-table' });
        $(document).ajaxComplete(function () {
          $('.layout-container table').cardtable({ myClass: 'responsive-table' });
        });
      });
    }
  };

  /* SUPERSFISH
  ------------------ */
  Drupal.behaviors.removeEmpty = {
    attach: function attach(context, settings) {
      $("#superfish-main", context).once('removeEmpty').each(function () {
        $(document).ready(function () {
          $('ul.sf-hidden', this).each(function () {
            if (!$('li', this).length) {
              $(this).closest('li').removeClass('menuparent');
              $(this).siblings('a').removeClass('menuparent');
              $(this).remove();
            }
          });
        });
      });
    }

    /* LAYOUT 
    ------------------ */
  };Drupal.behaviors.removeEmptyRegions = {
    attach: function attach(context, settings) {
      $(".layout > .layout__region:not(.ui-sortable)", context).once('removeEmpty').each(function () {
        if (!$(this).children().length) {
          $(this).remove();
        }
      });
    }

    /* BACK TO TOP
    ------------------ */
  };Drupal.behaviors.backToTop = {
    attach: function attach(context, settings) {
      $("html.js", context).once('backTop').each(function () {
        $(window).scroll(function () {
          var back = $(window).height() * .8;
          if ($(this).scrollTop() > back) {
            $('.back-anchor').fadeIn(200);
          } else {
            $('.back-anchor').fadeOut(200);
          }
        });
        //scroll to toc
        $('.back-anchor a').click(function (e) {
          e.preventDefault();
          $('html, body').animate({
            scrollTop: $('body').offset().top - 10
          });
        });
      });
    }
  };
})(jQuery, Drupal);
//# sourceMappingURL=scripts-styleguide.js.map