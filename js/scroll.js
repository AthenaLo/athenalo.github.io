/* Smooth scrolling to anchor using jQuery */
$(document).ready(function() {
  $("a.nav").click(function() {
    $('html body').animate({
      scrollTop: $( $(this).attr('href').match(/index.html(.*)/)[1] ).offset().top
    }, 500);
    return false;
  });
});
