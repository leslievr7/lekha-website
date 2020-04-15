// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById("landinglogo").style.cssText = "width: 10%; opacity: 1; top: 5%;";
		document.getElementById("landinglogo").src = "img/Logo_small.svg";
	} else {
		document.getElementById("landinglogo").style.cssText = "width: 49.5%; opacity: 0;";
		document.getElementById("landinglogo").src = "img/Logo.svg";
	}
}

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
  });

//Randomize the placeholder text
$(function(){
	var list = ['Do you like ginger in your chai?','What do you call a crocodile in Hindi?','Favourite Bollywood actor?','Aapka naam?','Aapki naam?','Yahan kuchh likh de, Thakur.','Full names of Shankar-Ehsaan-Loy?','Mogambo khush hua ki nahin?','Kitne patr the?'],
      r = Math.floor(Math.random() * list.length);
	$('#textfield').prop('placeholder',list[r]);
});

//Randomize background text
$(function(){
	var list = ['X','O','G'],
		r = Math.floor(Math.random() * list.length);
	$('#letter_bg01').text(list[r]);
	
	var list2 = ['Q','B','A'],
		r = Math.floor(Math.random() * list2.length);
	$('#letter_bg02').text(list2[r]);
});


/*function parallax() {
    var s = document.getElementById("f01img01");
  var yPos = 0 - window.pageYOffset/5;  
  s.style.top = 170 + yPos + "%"; }

window.addEventListener("scroll", function(){
    parallax(); 
});*/

$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];
  
  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });
  
  window.addEventListener('scroll', function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }, {passive: true});
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
};

// Initialization
$(function(){
  $('[data-scroll-speed]').moveIt();
});