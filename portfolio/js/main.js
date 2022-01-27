$(document).ready(function () {
  $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function () {
    $(this).toggleClass("open");
    $("#navbar-list").css("width", $(this).hasClass("open") ? "100%" : 0);
  });
});

var tl = new TimelineMax({});
tl.set("#nav-icon1", { clearProps: "all" }).set("#nav-icon1 span", {
  clearProps: "all",
});

tl.fromTo(
  ".hero_bg",
  1,
  { opacity: 0 },
  { opacity: 1, ease: Power2.easeInOut },
  "+=0.5"
)
  .fromTo(
    ".Hello p",
    1,
    { x: 90, opacity: 0 },
    { x: -0, opacity: 0.7, ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(
    ".Hello h2",
    1,
    { x: 70, opacity: 0 },
    { x: -0, opacity: 1, ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(
    ".Hello h1",
    1,
    { x: 50, opacity: 0 },
    { x: -0, opacity: 0.85, ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(
    ".navbar-brand",
    1,
    { x: 10, opacity: 0 },
    { x: 0, opacity: 1, ease: Power4.easeInOut },
    "-=1.5"
  )
  .fromTo(
    "#nav-icon1",
    1,
    { x: -10, opacity: 0, transition: "0s" },
    { x: 0, opacity: 1, transition: "0s", ease: Power4.easeInOut },
    "-=1.5"
  )
  .fromTo(
    ".down_button",
    1,
    { top: '88%', opacity: 0, },
    { top: '92%', opacity: 1, ease: Power2.easeInOut },
    "-=0.5"
  )
  .fromTo(
    "#resume",
    1,
    { opacity: 0, },
    { opacity: 1, ease: Power2.easeInOut },
    "-=1.5"
  )