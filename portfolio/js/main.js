$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});

$(document).ready(function () {

	$('.first-button').on('click', function () {
  
	  $('.animated-icon1').toggleClass('open');
	});
	$('.second-button').on('click', function () {
  
	  $('.animated-icon2').toggleClass('open');
	});
	$('.third-button').on('click', function () {
  
	  $('.animated-icon3').toggleClass('open');
	});
  });