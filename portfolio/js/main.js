$(document).ready(function () {
  $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function () {
    $(this).toggleClass("open");
    $("#navbar-list").css("width", $(this).hasClass("open") ? "100%" : 0);
  });
});

// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".art_works img", {
//   x: 400,
//   scrollTrigger: {
//     trigger: ".artworks",
//     start: "bottom bottom",
//     end: "top 100px",
//   },
// });

// const anim = gsap.to(".artworks img", {
//   x: 400,
//   duration: 3,
// });

// ScrollTrigger.create({
//   trigger: ".art_works",
//   animation: anim,
// });

var tl = new TimelineMax({});

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
    { x: -0, opacity: 0.6, ease: Power2.easeInOut },
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
    { top: "88%", opacity: 0 },
    { top: "92%", opacity: 1, ease: Power2.easeInOut },
    "-=0.5"
  )
  .fromTo(
    "#resume",
    1,
    { opacity: 0 },
    { opacity: 1, ease: Power2.easeInOut },
    "-=1.5"
  )
  .fromTo(
    ".twoD",
    1,
    { opacity: 0 },
    { opacity: 1, ease: Power2.easeInOut },
    "-=1.5"
  )
  .fromTo(
    ".artwork_des",
    1,
    { opacity: 0 },
    { opacity: 1, ease: Power2.easeInOut },
    "-=1.5"
  );

// .from(".w3-border", { opacity: 0, duration: 1.5 })

// Video Timestamps
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player1", {
    videoId: "YDVlvEJTeKw",
  });
}
function setCurrentTime(slideNum) {
  var object = [57, 91];
  player.seekTo(object[slideNum]);
}

// Facebook video control
const fb_vid_url = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FBBCCbyEcoWorld%2Fvideos%2F656959062058503%2F&show_text=false&width=560&"
function fb_set_time(time){
  // let temp_url = `${fb_vid_url}t=${time}` 
  // document.querySelector('#player2').setAttribute('src', temp_url)
  my_video_player.seek(174);
  my_video_player.play();
}