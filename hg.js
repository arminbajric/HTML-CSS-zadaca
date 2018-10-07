// JavaScript Document
$(document).ready(function(){


$('body').css('display', 'none');
$('body').fadeIn(1500);

});
	var images = [
  "http://1.bp.blogspot.com/_EAViqbzwc_s/TOZ1a38SSsI/AAAAAAAACUs/10BA5z6nosI/s1600/Leaning+Tower%252C+Pisa%252C+Italy+-+1600x1200+-+ID+20080+-+PREMIUM.jpg",
  "http://www.globaltouristspots.com/wp-content/uploads/empire-state-building-fi.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Leeds_Rathaus.jpg/1200px-Leeds_Rathaus.jpg"
];

	var i = 1;
setInterval(function() {
      
	$('body').css('background-image', 'url(' + images[i] + ')');
      i = i + 1;
      if (i === images.length) {
        i =  0;
      }
}, 3500);