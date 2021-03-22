$(function() {

    $('#hamburger-icon').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.mobile-menu').addClass('active');
            $('html').addClass('ov-hidden');
        } else {
            $('.mobile-menu').removeClass('active');
            $('html').removeClass('ov-hidden');
        }
    });

    $("a.btn-catalog-anchor").click(function() {
        elementClick = $(this).attr("href")
        destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 700);
        return false;
    });

    $('.mobile-menu .top-menu a').click(function() {
        $('#hamburger-icon').removeClass('active');
        $('.mobile-menu').removeClass('active');
        $('html').removeClass('ov-hidden');
    });

    $('select').niceSelect();

    $('.catalog-elem-fav').click(function() {
        $(this).toggleClass('active');
    });

    $('.about-elem').hover(function() {
        $(this).toggleClass('active');
        $(this).children('.about-elem-hide').toggleClass('active');
    });

});

$(window).on('load resize', function() {

    var width = $(window).width();

    if (width < '992') {
        $('.header').addClass('load');
        $('.header .menu').appendTo($('.mobile-menu'));
        $('.header .address').insertAfter($('.top-menu'));
        $('.header .worktime').insertAfter($('.address'));
        $('.header .city-box').insertAfter($('.worktime'));
    }

    if (width > '991') {
        $('.mobile-menu .menu').appendTo('.header-top .container');
        $('.mobile-menu .city-box').prependTo('.header-bottom .container');
        $('.mobile-menu .address').insertAfter('.header-bottom .tel');
        $('.mobile-menu .worktime').insertAfter('.header-bottom .address');
    }
});