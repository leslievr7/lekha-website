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

/*
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });*/

//Randomize the placeholder text
$(function(){
  var list = ['Do you like ginger in your chai?','What do you call a crocodile in Hindi?','Which is your favourite Bollywood actor?','Aapka naam?','Aapki naam?','Yahan kuchh likh de, Thakur.','Full names of Shankar-Ehsaan-Loy?','Mogambo khush hua ki nahin?','Picture abhi baaki hain, mere dost.','Tumse ho payega.','Kitne patr the?'],
      r = Math.floor(Math.random() * list.length);
  $('#textfield').prop('placeholder',list[r]);
});




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