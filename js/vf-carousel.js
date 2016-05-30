$(document).ready(function(){
  $('.vf-solution-carousel').slick({
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    customPaging: function(slider, i) {
      return '<i class="fa fa-circle dot" aria-hidden="true"></i>';
    }
  });

  $('.vf-solution-carousel li').click(function() {
    // Clear all highlighted dots before adding new highlight
    $('.dot').removeClass('slick-active');
    $(this).find('.dot').addClass('slick-active');
  });

  // Ensure active slide is always first slide upon page load
  $('.dot:first').addClass('slick-active');
});
