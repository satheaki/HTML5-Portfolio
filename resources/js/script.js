$(document).ready(function() {
  /*Sticky Navigation*/
  $(".js-section-about").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
        $("nav-text").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60%"
    }
  );

  var originalImage = "";

  $(".project-container")
    .on("mouseover", function() {
      originalImage = $(this)
        .find("img")
        .attr("src");
      $(this)
        .find("img")
        .attr("src", "./resources/img/ServQuick.jpg");

      $(this)
        .find("a")
        .css("visibility", "visible");
    })
    .on("mouseout", function() {
      var anchor = $(this).find("a.btn-overlay");
      anchor.css("visibility", "hidden");

      $(this)
        .find("img")
        .attr("src", originalImage);
    });

  /*Scroll on buttons*/
  $(".js-scroll-to-about").click(function() {
    $("html, body").animate(
      {scrollTop: $(".js-section-about").offset().top},
      1000
    );
  });

  $(".js-scroll-to-skills").click(function() {
    $("html, body").animate(
      {scrollTop: $(".js-section-skills").offset().top},
      1000
    );
  });

  /*Navigation Scroll-third party*/
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
});
