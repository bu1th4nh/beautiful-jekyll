$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.ctb').offset().top }, 'slow');
      return false;
    });
  });