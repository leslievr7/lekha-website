$(document).ready(function(){
var cursor = $(".cursor"); // Store the css .cursor in a variable

    $(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    }); //to make the cursor actually follow the mouse

    $(window)
        .mouseleave(function() {
            cursor.css({
                opacity: "0"
            });
        })
        .mouseenter(function() {
            cursor.css({
                opacity: "1"
            });
        }); //so that cursor appears/disappears when mouse enters/leaves
	
	$(".link")
        .mouseenter(function() {
            cursor.css({
                transform: "scale(3.5)"
            });
        })
        .mouseleave(function() {
            cursor.css({
                transform: "scale(1)"
            });
        }); //enlarges when hovered over any element with class .link

    $(".focus")
        .mouseenter(function() {
            cursor.css({
                transform: "scale(8)"
            });
        })
        .mouseleave(function() {
            cursor.css({
                transform: "scale(1)"
            });
        }); //enlarges when hovered over any element with class .focus

    $(window)
        .mousedown(function() {
            cursor.css({
                transform: "scale(.5)"
            });
        })
        .mouseup(function() {
            cursor.css({
                transform: "scale(1)"
            });
        }); //click animation
});