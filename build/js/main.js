$(function() {

    $('#hamburger-icon').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.mobile-menu').addClass('active');
            $('html').addClass('ov-hidden');
        } else {
            $('.menu-cat-mobile li a').removeClass('active');
            $('.sub-menu').hide();
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



    $('.partners-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        swipeToSlide: true,
        accessibility: false,
        responsive: [{
            breakpoint: 705,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 2,
                variableWidth: true,
                centerMode: true
            }
        }]
    });

    $('<div class="quantity-nav"><div class="quantity-button number-plus">+</div><div class="quantity-button number-minus">-</div></div>').insertAfter('.number input');
    $('.number').each(function() {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.number-plus'),
            btnDown = spinner.find('.number-minus'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });

    $('.catalog-elem').each(function() {
        var varMetr = $(this).find('.catalog-elem-pack b i').text().replace(',', '.');
        var price = $(this).find('.price i').text();
        var valCol = $(this).find('.quantity-num');
        var totalPrice = $(this).find('.catalog-elem-total-price b');
        var totalMetr = $(this).find('.catalog-elem-total-price i');
        valCol.on('change', function() {
            totalPrice.text($(this).val() * price);
            var metrSumm = $(this).val() * varMetr;
            var metrToPoint = metrSumm.toFixed(2);
            totalMetr.text(metrToPoint);
        });
    });

    $('.card-form').each(function() {
        var varMetrCard = $(this).find('.card-total-price i').text();
        var priceCard = $(this).find('.price i').text();
        var valColCard = $(this).find('.quantity-num');
        var totalPriceCard = $(this).find('.card-total-price b');
        var totalMetrCard = $(this).find('.card-total-price i');
        valColCard.on('change', function() {
            totalPriceCard.text($(this).val() * priceCard);
            var metrSummCard = $(this).val() * varMetrCard;
            var metrToPointCard = metrSummCard.toFixed(2);
            totalMetrCard.text(metrToPointCard);
        });
    });

    $('.product-order').click(function(e) {
        var butWrap = $(this).parents('.product-order-box');
        butWrap.append('<div class="animtocart"></div>');
        $('.animtocart').css({
            'position': 'absolute',
            'background': '#AA0B0B',
            'width': '35px',
            'height': '35px',
            'border-radius': '50%',
            'z-index': '9999999999',
            'left': e.pageX - 25,
            'top': e.pageY - 25,
        });
        var cart = $('.cart').offset();
        console.log(cart);
        $('.animtocart').animate({ top: cart.top + 'px', left: cart.left + 20 + 'px', width: 0, height: 0 }, 800, function() {
            $(this).remove();
        });
    });




    $('.link-sub>a').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).siblings('.sub-menu').slideToggle();
    });


    $('.card-slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.card-slider-thumbs'
    });
    $('.card-slider-thumbs').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.card-slider-big',
        dots: false,
        variableWidth: true,
        focusOnSelect: true
    });

    $('.rewiews-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: true
    });


});

$('.js-address').click(function(e) {
    e.preventDefault();
    $('#popup-wrap-map').addClass('popup-active');
    $('#popup-map').addClass('popup-active');
});


$('.close-map').click(function(e) {
    e.preventDefault();
    $('#popup-wrap-map').removeClass('popup-active');
    $('#popup-map').removeClass('popup-active');
});

$(document).click(function(event) {
    if (!$(event.target).closest("#popup-map,.js-address").length) {
        $("body").find("#popup-wrap-map").removeClass("popup-active");
        $("body").find("#popup-map").removeClass("popup-active");
    }
});



$(window).on('load resize', function() {

    var width = $(window).width();

    if (width > '1280') {
        $('.about-elem').hover(function() {
            $(this).toggleClass('active');
            $(this).children('.about-elem-hide').toggleClass('active');
        });
    }

    if (width < '992') {
        $('.top-menu').addClass('load');
        $('header .menu').appendTo($('.mobile-menu'));
        $('#popup-wrap-map').remove();

    }

    if (width > '991') {
        $('.mobile-menu .menu').appendTo('.header-top .container');
    }
});
//# sourceMappingURL=../sourcemaps/main.js.map
