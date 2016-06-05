$(document).ready(function(){
  var headerHeight = $(".panel#about .banner-row").outerHeight();
  var selfieHeight = $(".panel#about .selfie").outerHeight(includeMargin=true);
  var descriptionHeight = $(".panel#about .description").outerHeight(includeMargin=true);
  var extraPadding = 75;

  $(window).resize(function(){
    headerHeight = $(".panel#about .banner-row").outerHeight();
    selfieHeight = $(".panel#about .selfie").outerHeight(includeMargin=true);
    descriptionHeight = $(".panel#about .description").outerHeight(includeMargin=true);

    $(".panel#about").height(function(){
      // Stacked view
      if (window.matchMedia('(max-width: 950px)').matches) {
        return headerHeight + selfieHeight + descriptionHeight + extraPadding;
      // Wide view
      } else {
        return headerHeight + Math.max(selfieHeight, descriptionHeight) + 1.5*extraPadding;
      }
    });
  });

  $(".panel#about").height(function(){
    // Stacked view
    if (window.matchMedia('(max-width: 950px)').matches) {
      return headerHeight + selfieHeight + descriptionHeight + extraPadding;
    // Wide view
    } else {
      return headerHeight + Math.max(selfieHeight, descriptionHeight) + 1.5*extraPadding;
    }
  });
});
