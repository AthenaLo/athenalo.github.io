$(document).ready(function(){
  $('.vf-solution-carousel').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    customPaging: function(slider, i) {
      return '<i class="fa fa-circle dot" aria-hidden="true"></i>';
    }
  }).on('afterChange', function(event, slick, currentSlide, nextSlide){
    next_active = $('.slick-active').parent().next().children('.dot');
    $('.dot').removeClass('slick-active');
    next_active.addClass('slick-active');
  }); 

  $('.vf-solution-carousel li').click(function() {
    // Clear all highlighted dots before adding new highlight
    $('.dot').removeClass('slick-active');
    $(this).find('.dot').addClass('slick-active');
  });

  // Ensure active slide is always first slide upon page load
  $('.dot:first').addClass('slick-active');
});
