$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('p.ok').offset().top }, 'slow');
      return false;
    });
  });