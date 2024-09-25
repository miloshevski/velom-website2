$(document).ready(function () {
  $(".tab-link").click(function (event) {
    $(".tab-link").removeClass("active");
    $(this).addClass("active");
  });
});
// Function to toggle the side menu
function toggleSideMenu() {
  const menu = $(".side-menu");
  menu.toggleClass("hidden");
}

function playSound() {
  const clickSound = new Audio("../majmune.mp3");

  clickSound.currentTime = 0;
  clickSound.play();
}
let lastScrollTop = 0;

$(window).on("scroll", function () {
  let currentScroll = $(this).scrollTop();

  if (currentScroll > lastScrollTop) {
    // Scrolling down, hide the navbar
    $("#navbar").css("top", "-55px");
  } else {
    // Scrolling up, show the navbar
    $("#navbar").css("top", "0px");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For mobile or negative scrolling
});
