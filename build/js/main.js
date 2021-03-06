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

    $(window).on('load', function() {
        let phones = [
            { 'mask': '+7 \\ \\ ###-###-##-##' }
        ];

        $('input[type=tel]').inputmask({
            mask: phones,
            greedy: false,
            definitions: {
                '#': {
                    validator: '[0-9]',
                    cardinality: 1
                }
            }
        });
    });

    $(document).scroll(function() {
        let scroll = $(window).scrollTop();
        if (scroll >= 300) {
            $('.anchor-up').addClass('active');
        } else {
            $('.anchor-up').removeClass('active');
        }

    });

    $("a.btn-catalog-anchor, .raiting a").click(function() {
        elementClick = $(this).attr("href")
        destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination - 120 }, 700);
        return false;
    });

    $(".anchor-up").click(function() {
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
            breakpoint: 706,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 2,
                swipeToSlide: true,
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
            var totalPriceFixed = ($(this).val() * price * varMetr).toFixed(0);
            totalPrice.text(totalPriceFixed);
            var metrSumm = $(this).val() * varMetr;
            var metrToPoint = metrSumm.toFixed(2);
            totalMetr.text(metrToPoint);
        });
    });

    $('.card-desc').each(function() {
        var varMetrCard = $(this).find('.card-square b').text();
        var priceCard = $(this).find('.price i').text();
        var valColCard = $(this).find('.quantity-num');
        var totalPriceCard = $(this).find('.card-total-price b');
        var totalMetrCard = $(this).find('.card-total-price i');
        valColCard.on('change', function() {
            var totalPriceCardFixed = ($(this).val() * priceCard * varMetrCard).toFixed(0);
            totalPriceCard.text(totalPriceCardFixed);
            var metrSummCard = $(this).val() * varMetrCard;
            var metrToPointCard = metrSummCard.toFixed(2);
            totalMetrCard.text(metrToPointCard);
        });
    });



    $('.cart-item').each(function() {
        var varMetrCart = $(this).find('.cart-total-price i').text();
        var priceCart = $(this).find('.price i').text();
        var valColCart = $(this).find('.quantity-num');
        var totalPriceCart = $(this).find('.cart-total-price b');
        var totalMetrCart = $(this).find('.cart-total-price i');



        valColCart.on('change', function() {
            var totalPriceCartFixed = ($(this).val() * priceCart * varMetrCart).toFixed(0);
            totalPriceCart.text(totalPriceCartFixed);
            var metrSummCart = $(this).val() * varMetrCart;
            var metrToPointCart = metrSummCart.toFixed(2);
            totalMetrCart.text(metrToPointCart);
        });
    });





    function calcCart() {
        var st = 0;
        var priceDeliv = $('.cart-summ-deliv span i').text();
        var priceDelivNum = +priceDeliv;
        $('.cart-item').each(function() {
            var i = $('.cart-variant--quantity_input', this);
            var up = $(i).data('unit-price');
            var boxMetr = $(i).data('box-metr');
            var q = $(i).val();
            st = st + (up * q * boxMetr);
        });

        $('.cart-summ span i').text(st);
        $('.cart-total-summ span i').text(st + priceDelivNum);
    }



    $('.cart-variant--quantity_input').on("change", function() {
        calcCart();
    });

    $('.label-courier input').click(function() {
        $('.cart-summ-deliv span i').text('250');
        calcCart();
        $('.city-delivery .nice-select').hide();
        $('.city-delivery input').hide();
        $('.input-curier').show();
    });

    $('.label-stock input').click(function() {
        $('.cart-summ-deliv span i').text('0');
        calcCart();
        $('.city-delivery .nice-select').show();
        $('.city-delivery input').show();
        $('.input-curier').hide();
    });

    calcCart();





    $('.del-cart').click(function() {
        $(this).parents('.cart-item').remove();
        calcCart();
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
        focusOnSelect: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                variableWidth: false
            }
        }]
    });

    $('.rewiews-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: true,
        infinite: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                variableWidth: false,
                slidesToShow: 1,
                dots: true
            }
        }]
    });

    $('.cards-slider .catalog-elems').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: false,
        dots: true,
        swipeToSlide: true,
        adaptiveHeight: true,
        responsive: [{
                breakpoint: 601,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    centerMode: false,
                    infinite: true,
                    variableWidth: false
                }
            },
            {
                breakpoint: 836,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    centerMode: false,
                    infinite: true,
                    variableWidth: false
                }
            },
            {
                breakpoint: 1761,
                settings: {
                    slidesToShow: 6,
                    variableWidth: true,
                    centerMode: true,
                    infinite: true,
                    swipeToSlide: true
                }
            }
        ]
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 5000,
        from: 250,
        to: 1800,
        grid: false,
        onChange: function(data) {
            $('.start-price').val(data.from);
            $('.finish-price').val(data.to_pretty);
        }
    });


    $('.range-slider-input').keyup(function() {
        let inputId = $(this).attr('id');
        let inputValue = $(this).val();
        let my_range = $(".js-range-slider").data("ionRangeSlider");
        if (inputId === 'slider-input-from') {
            my_range.update({
                from: inputValue
            });
        } else {
            my_range.update({
                to: inputValue
            });
        }
    });

    $('.js-show-filter').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).siblings('.filter-item-hide').slideDown();
        } else {
            $(this).siblings('.filter-item-hide').slideUp();

        }
    });

    $('.cat-products a').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });

    $('.btn-filter-open').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.filters').slideToggle();
    });

    $('.serach-form input, .search-vn input, .search-mobile input').autocomplete({
        minChars: 2,
        maxHeight: 410,
        lookupLimit: 13,
        lookup: productsbase
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


$('.btn-rewiew').click(function(e) {
    e.preventDefault();
    $('#popup-wrap-rewiew').addClass('popup-active');
    $('#popup-rewiew').addClass('popup-active');
});

$('.close-rew-popup').click(function(e) {
    e.preventDefault();
    $('#popup-wrap-rewiew').removeClass('popup-active');
    $('#popup-rewiew').removeClass('popup-active');
});

$(document).click(function(event) {
    if (!$(event.target).closest("#popup-rewiew,.btn-rewiew").length) {
        $("body").find("#popup-wrap-rewiew").removeClass("popup-active");
        $("body").find("#popup-rewiew").removeClass("popup-active");
    }
});


$(window).on('load resize', function() {

    var width = $(window).width();

    if (width > '1199') {
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
    }

    if (width > '1024') {
        $('[data-fancybox]').fancybox();
    }

    if (width < '1025') {
        $.fancybox.destroy();
    }

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

    if (width > '705') {
        $('.card-brand-rait').prependTo($('.card-desc'));
    }

    if (width < '706') {
        $('.card-brand-rait').insertAfter($('.card-id'));
    }

    if (width > '991') {
        $('.mobile-menu .menu').appendTo('.header-top .container');

    }
});


var productsbase = [
    '?????????????? Ideal Look Id 04 ?????? ??????????',
    '???????????? 587',
    '???????????????? BS102',
    '???????????? Deluxe 3',
    '?????????????? Ultra 5',
    '???????????????? 734',
    '???????????? Ideal Id 08',
    '?????????????? Super',
    '???????????????? Default'
];
//# sourceMappingURL=../sourcemaps/main.js.map
