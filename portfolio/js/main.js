$(document).ready(function () {
  $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function () {
    $(this).toggleClass("open");
    $("#navbar-list").css("width", $(this).hasClass("open") ? "100%" : 0);
  });
});
