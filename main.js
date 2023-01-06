AOS.init();
$(document).ready(function () {
  $(".pd-slider").slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    prevArrow:
      '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow:
      '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
  });
  $(".slider").slick({
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    prevArrow:
      '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow:
      '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
  });
});
$(".slide-nav").on("click", function (e) {
  e.preventDefault();
  // get current slide
  var current = $(".flex--active").data("slide"),
    // get button data-slide
    next = $(this).data("slide");

  $(".slide-nav").removeClass("active");
  $(this).addClass("active");

  if (current === next) {
    return false;
  } else {
    $(".slider__warpper")
      .find(".flex__container[data-slide=" + next + "]")
      .addClass("flex--preStart");
    $(".flex--active").addClass("animate--end");
    setTimeout(function () {
      $(".flex--preStart")
        .removeClass("animate--start flex--preStart")
        .addClass("flex--active");
      $(".animate--end")
        .addClass("animate--start")
        .removeClass("animate--end flex--active");
    }, 800);
  }
});
function closeButton(){
  var close = document.getElementById("play");
  close.style.display = "none";
  var vid = document.getElementById("video");
  vid.play();
}
// Scroll to the top
let mybutton = document.getElementById("btnTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    // mybutton.style.display = "block";
    mybutton.style.visibility = "visible";
    mybutton.style.animation = "Thuphong 0.5s";
  } else {
    mybutton.style.animation = "Thuphong-2 0.5s";
    // mybutton.style.display = "none";
    mybutton.style.visibility = "hidden";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}





