/*****************************************************************************

============================   morkaftheme   =================================

******************************************************************************/

/*======== Document Ready Function ========*/
$(document).ready(function () {

    "use strict";

    /////////////// Preloader 
    var loader = $(".preloader");
    var wHeight = $(window).height();
    var wWidth = $(window).width();
    var o = 0;

    loader.css({
        top: wHeight / 2 - 2.5,
        left: wWidth / 2 - 200
    });

    do {
        loader.animate({
            width: o
        }, 10);
        o += 3;
    } while (o <= 400);
    if (o === 402) {
        loader.animate({
            left: 0,
            width: '100%'
        }),
        loader.animate({
            top: '0',
            height: '100vh'
        });
    }

    setTimeout(function () {
        $(".preloader-wrapper").fadeOut('fast');
        (loader).fadeOut('fast');
    }, 3000);


    //client-slide
    $('.client-slider').slick({
        prevArrow: '<span class="test-left_arrow"><i class="fa fa-angle-left "></i></span>',
        nextArrow: '<span  class="test-right_arrow"><i class="fa fa-angle-right "></i></span>',
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },

            {
                breakpoint: 800,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
              },

            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

    ]

    });

    //partner-slider
    $('.partner-slider').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
    },
            {
                breakpoint: 800,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
      },
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 481,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },

    ]

    });

    /*======== Window Load Function ========*/
    $(window).on('load', function () {

        /*======== Isotope Portfolio Setup ========*/
        if ($('.portfolio-items').length) {
            var $elements = $(".portfolio-items"),
                $filters = $('.portfolio-filter ul li');
            $elements.isotope();

            $filters.on('click', function () {
                $filters.removeClass('active');
                $(this).addClass('active');
                var selector = $(this).data('filter');
                $(".portfolio-items").isotope({
                    filter: selector,
                    hiddenStyle: {
                        transform: 'scale(.2) skew(30deg)',
                        opacity: 0
                    },
                    visibleStyle: {
                        transform: 'scale(1) skew(0deg)',
                        opacity: 1,
                    },
                    transitionDuration: '.5s'
                });
            });
        }

    });

    //work-image-slide
    $('.wrok-image-slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

    ]

    });
    
    //Blog page---> related blog slide
    $('.re-blg-slide').slick({
        prevArrow: '<span class="test-left_arrow"><i class="fa fa-angle-left "></i></span>',
        nextArrow: '<span  class="test-right_arrow"><i class="fa fa-angle-right "></i></span>',
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },

            {
                breakpoint: 800,
                settings: {
                    dots: false,
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
              },

            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

    ]

    });

    /*======== Active Current Link ========*/
    $('.nav-menu a').on('click', function () {
        if ($('.header-content.on').length) {
            $('.header-content').removeClass('on');
        }
    });

    /*======== Mobile Toggle Click Setup ========*/
    $('.header-toggle').on('click', function () {
        $('header .header-content').toggleClass('on');
    });

    /*======== Skills Progress Animation ========*/

    if ($('.skills').length > 0) {
        var el = new SimpleBar($('#resume')[0]).getScrollElement();
        $(el).on('scroll', function () {
            $('.progress .progress-bar').each(function () {
                var bottom_object = $(this).offset().top + $(this).outerHeight();
                var bottom_window = $(window).scrollTop() + $(window).height();
                var progressWidth = $(this).data('progress-value') + '%';
                if (bottom_window > bottom_object) {
                    $(this).css({
                        width: progressWidth
                    });
                    $(this).find('.progress-value').animate({
                        countNum: parseInt(progressWidth, 10)
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $(this).text(Math.floor(this.countNum) + '%');
                        },
                        complete: function () {
                            $(this).text(this.countNum + '%');
                        }
                    });
                }
            });

        });
    }
    /*
    	Gallery popup
    */
    if (/\.(?:jpg|jpeg|gif|png)$/i.test($('.gallery-item:first a').attr('href'))) {
        $('.gallery-item a').magnificPopup({
            gallery: {
                enabled: true
            },
            type: 'image',
            closeBtnInside: false,
            mainClass: 'mfp-fade'
        });
    }

    /*
    	Media popup
    */
    $('.has-popup-media').magnificPopup({
        type: 'inline',
        overflowY: 'auto',
        closeBtnInside: true,
        mainClass: 'mfp-fade popup-box-inline'
    });

    /*
    	Image popup
    */
    $('.has-popup-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        image: {
            verticalFit: true
        }
    });

    /*
    	Video popup
    */
    $('.has-popup-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        iframe: {
            patterns: {
                youtube_short: {
                    index: 'youtu.be/',
                    id: 'youtu.be/',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
        },
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        mainClass: 'mfp-fade',
        callbacks: {
            markupParse: function (template) {
                template.find('iframe').attr('allow', 'autoplay');
            }
        }
    });

    /*
    	Music popup
    */
    $('.has-popup-music').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        mainClass: 'mfp-fade'
    });

    /*
    	Gallery popup
    */
    $('.has-popup-gallery').on('click', function () {
        var gallery = $(this).attr('href');

        $(gallery).magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            mainClass: 'mfp-fade',
            removalDelay: 160,
            fixedContentPos: false,
            gallery: {
                enabled: true
            }
        }).magnificPopup('open');

        return false;
    });

});
