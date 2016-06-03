$(document).ready(function(){
  $('.solution-carousel').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    customPaging: function(slider, i) {
      return '<i class="fa fa-circle dot" aria-hidden="true"></i>';
    }
  }).on('afterChange', function(event, slick, newSlideIdx){
    dotSelector = "ul.slick-dots li:eq(" + newSlideIdx + ")";
    new_active = $(dotSelector).children('.dot');
    $('.dot').removeClass('slick-active');
    new_active.addClass('slick-active');
  }); 

  $('.vf-solution-carousel li').click(function() {
    // Clear all highlighted dots before adding new highlight
    $('.dot').removeClass('slick-active');
    $(this).find('.dot').addClass('slick-active');
  });

  // Ensure active slide is always first slide upon page load
  $('.dot:first').addClass('slick-active');
});
