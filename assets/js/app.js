$(document).ready(function(){
  $(".button-collapse").sideNav();
});

$("#about").smoove({
  offset  : '20%',
});

$("#skills").smoove({
  offset  : '20%',
});

$("#portfolio").smoove({
  offset  : '20%',
});

$("#contact").smoove({
  offset  : '20%',
});

$('.back-to-top').css({"display" : "none"});

$(document).ready(function() {
  var offset = 250; 
  var duration = 300; 
jQuery(window).scroll(function() { 
  if (jQuery(this).scrollTop() > offset) {
jQuery('.back-to-top').fadeIn(duration);
  } else { 
jQuery('.back-to-top').fadeOut(duration); 
  } 
});
 
jQuery('.back-to-top').click(function(event) { 
event.preventDefault(); 
jQuery('html, body').animate({scrollTop: 0}, duration);
return false; 
}) 
});