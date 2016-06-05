$(document).ready(function(){
  var hamburgerOpened = false;

  $(".hamburger").click(function() {
    if (hamburgerOpened) {
      $(".mobile-nav-links").addClass("hide-mobile-nav-links");
      hamburgerOpened = false;
    } else {
      $(".mobile-nav-links").removeClass("hide-mobile-nav-links");
      hamburgerOpened = true;
    }
  });

  $(".mobile-nav-links .nav-link").click(function() {
    $(".mobile-nav-links").addClass("hide-mobile-nav-links");
    hamburgerOpened = false;
  });

  $(".mobile-nav-links").bind("clickoutside", function(event) {
    clickedElement = event.target.nodeName;
    if (hamburgerOpened && clickedElement != "I") {
      $(".mobile-nav-links").addClass("hide-mobile-nav-links");
      hamburgerOpened = false;
    }
  });
});
