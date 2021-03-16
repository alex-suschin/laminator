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
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 700);
        return false;
    });

    $('.mobile-menu .top-menu a').click(function() {
        $('#hamburger-icon').removeClass('active');
        $('.mobile-menu').removeClass('active');
        $('html').removeClass('ov-hidden');
    });

    $('select').niceSelect();

});

$(window).on('load resize', function() {

    var width = $(window).width();

    if ((width > '700') && (width < '1000')) {

    }

    if (width < '992') {
        $('.header .menu').appendTo($('.mobile-menu'));
        $('.header .address').insertAfter($('.top-menu'));
        $('.header .worktime').insertAfter($('.address'));
        $('.header .nice-select').insertAfter($('.worktime'));
    }

    if (width > '991') {

    }



});