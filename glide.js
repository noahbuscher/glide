var scrollMotion = null;
var power = 0;
var current = 0;
var old = 0;

$('body,html').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup', function(e){
    if ( e.which > 0 || e.type == "mousedown" || e.type == "mousewheel") {
        var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
        if (isMac === false) {
            if ($(window).scrollTop() === 0 || $(window).scrollTop() + window.innerHeight == $(document).height()) {
                power = 15;
            } else {
                power += 15;
            }
        }
    }
});

$(window).scroll(function() {
    current = $(window).scrollTop();

    if (scrollMotion === null) {
        scrollMotion = setInterval(function(){scroll();}, 8);
    }

    if (power === 0 || $(window).scrollTop() >= $(window).height() || $(window).scrollTop() === 0) {
        clearInterval(scrollMotion);
        scrollMotion = null;
        power = 0;
    }
});

function scroll() {
    var current = $(window).scrollTop();

    if (power > 0  && $(window).scrollTop() <= $(window).height()) {
        if (current < old) {
            $(window).scrollTop(current - power);
        } else {
            $(window).scrollTop(current + power);
        }
    } else {
        clearInterval(scrollMotion);
        scrollMotion = null;
    }
    
    power -= 1;
    old = current;
}