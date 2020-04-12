// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById("landinglogo").style.cssText = "width: 8%; opacity: 1; top: 5.5%;";
		document.getElementById("landinglogo").src = "img/Logo_small.svg";
	} else {
		document.getElementById("landinglogo").style.cssText = "width: 49.5%; opacity: 0;";
		document.getElementById("landinglogo").src = "img/Logo.svg";
	}
}







//-----CUSTOM CURSOR
/*
// 01 store the .cursor in a simple variable called cursor
$(document).ready(function(){
 var cursor = $('.cursor');
});
// 02 Make it follow the mouse
$(document).ready(function(){
 var cursor = $('.cursor');

 $(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });
});
*/