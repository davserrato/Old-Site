/*-----------------------------------------------------------------------------------
 /*
 /* Init JS
 /*
 -----------------------------------------------------------------------------------*/

jQuery(document).ready(function($) {

    /*----------------------------------------------------*/
    /* FitText Settings
     ------------------------------------------------------ */

    setTimeout(function() {
        $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
    }, 100);


    /*----------------------------------------------------*/
    /* Smooth Scrolling
     ------------------------------------------------------ */

    $('.smoothscroll').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function () {
            window.location.hash = target;
        });
    });


    /*----------------------------------------------------*/
    /* Highlight the current section in the navigation bar
     ------------------------------------------------------*/

    var sections = $("section");
    var navigation_links = $("#nav-wrap a");

    sections.waypoint({

        handler: function(event, direction) {

            var active_section;

            active_section = $(this);
            if (direction === "up") active_section = active_section.prev();

            var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

            navigation_links.parent().removeClass("current");
            active_link.parent().addClass("current");

        },
        offset: '35%'

    });


    /*----------------------------------------------------*/
    /*	Make sure that #header-background-image height is
     /* equal to the browser height.
     ------------------------------------------------------ */

    $('header').css({ 'height': $(window).height() });
    $(window).on('resize', function() {

        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
    });


    /*----------------------------------------------------*/
    /*	Fade In/Out Primary Navigation
     ------------------------------------------------------*/

    $(window).on('scroll', function() {

        var h = $('header').height();
        var y = $(window).scrollTop();
        var nav = $('#nav-wrap');

        if ( (y > h*.10) && (y < h *.95) && ($(window).outerWidth() > 768 ) ) {
            nav.fadeOut('fast');
        } else {
            if (y < h*.10) {
                nav.removeClass('opaque').fadeIn('fast');
            }
            else {
                nav.addClass('opaque').fadeIn('fast');
            }
        }
    });


    /*----------------------------------------------------*/
    /*	Modal Popup
     ------------------------------------------------------*/

    $('.item-wrap a').magnificPopup({

        type:'inline',
        fixedContentPos: false,
        removalDelay: 200,
        showCloseBtn: false,
        mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });


    /*----------------------------------------------------*/
    /*	Flexslider
     /*----------------------------------------------------*/
    $('.flexslider').flexslider({
        namespace: "flex-",
        controlsContainer: ".flex-container",
        animation: 'slide',
        controlNav: true,
        directionNav: false,
        smoothHeight: true,
        slideshowSpeed: 7000,
        animationSpeed: 600,
        randomize: false
    });

    /*----------------------------------------------------*/
    /*	contact form
     ------------------------------------------------------*/

    $('form#contactForm button.submit').click(function() {

        $('#image-loader').fadeIn();

        var contactName = $('#contactForm #contactName').val();
        var contactEmail = $('#contactForm #contactEmail').val();
        var contactSubject = $('#contactForm #contactSubject').val();
        var contactMessage = $('#contactForm #contactMessage').val();

        var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
            '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;

        $.ajax({

            type: "POST",
            url: "inc/sendEmail.php",
            data: data,
            success: function(msg) {

                // Message was sent
                if (msg == 'OK') {
                    $('#image-loader').fadeOut();
                    $('#message-warning').hide();
                    $('#contactForm').fadeOut();
                    $('#message-success').fadeIn();
                }
                // There was an error
                else {
                    $('#image-loader').fadeOut();
                    $('#message-warning').html(msg);
                    $('#message-warning').fadeIn();
                }

            }

        });
        return false;
    });


});

/*----------------------------------------------------*/
/*	Skill Bar Start Delay
 ------------------------------------------------------*/

function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation1() {
    var $elem1 = $('.bars .bar-expand1');

    // If the animation has already been started
    if ($elem1.hasClass('start1')) return;

    if (isElementInViewport($elem1)) {
        // Start the animation
        $elem1.addClass('start1');
    }
}

function checkAnimation2() {
    var $elem2 = $('.bars .bar-expand2');

    // If the animation has already been started
    if ($elem2.hasClass('start2')) return;

    if (isElementInViewport($elem2)) {
        // Start the animation
        $elem2.addClass('start2');
    }
}

function checkAnimation3() {
    var $elem3 = $('.bars .bar-expand3');

    // If the animation has already been started
    if ($elem3.hasClass('start3')) return;

    if (isElementInViewport($elem3)) {
        // Start the animation
        $elem3.addClass('start3');
    }
}

function checkAnimation4() {
    var $elem4 = $('.bars .bar-expand4');

    // If the animation has already been started
    if ($elem4.hasClass('start4')) return;

    if (isElementInViewport($elem4)) {
        // Start the animation
        $elem4.addClass('start4');
    }
}

// Capture scroll events
$(window).scroll(function(){
    checkAnimation1();
    checkAnimation2();
    checkAnimation3();
    checkAnimation4();
});






