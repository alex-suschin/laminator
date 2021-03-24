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

    $('.catalog-elem-pack').each(function() {
        var dg = $(this).find('i').text();
        // console.log(dg);
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
            console.log(newVal);
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
        console.log(varMetr);
        var price = $(this).find('.price i').text();
        var valCol = $(this).find('.quantity-num');
        var totalPrice = $(this).find('.catalog-elem-total-price b');
        var totalMetr = $(this).find('.catalog-elem-total-price i');
        console.log(price);
        var plus = $(this).find('.number-plus');
        valCol.on('change', function () {
            totalPrice.text($(this).val()*price);
            var metrSumm = $(this).val()*varMetr;
            var metrToPoint = metrSumm.toFixed(2);
            totalMetr.text(metrToPoint);
            console.log($(this).val()*price);
        });
    });



    // (function quantityProducts() {
    //     var $quantityArrowMinus = $('.catalog-elem').each(function() {
    //         $(this).find('.number-minus');
    //     });
    //     var $quantityArrowPlus = $('.catalog-elem').each(function() {
    //         $(this).find('.number-plus');
    //     });
    //     var $quantityNum = $('.catalog-elem').each(function() {
    //         $(this).find('.quantity-num');
    //     });

    //     $quantityArrowMinus.click(quantityMinus);
    //     $quantityArrowPlus.click(quantityPlus);

    //     function quantityMinus() {
    //         if ($quantityNum.val() > 1) {
    //             $quantityNum.val(+$quantityNum.val() - 1);
    //         }
    //     }

    //     function quantityPlus() {
    //         $quantityNum.val(+$quantityNum.val() + 1);
    //     }
    // })();

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





$(window).on('load resize', function() {

    var width = $(window).width();

    if (width > '1280') {
        $('.about-elem').hover(function() {
            $(this).toggleClass('active');
            $(this).children('.about-elem-hide').toggleClass('active');
        });
    }

    if (width < '992') {
        $('header').addClass('load');
        $('header .menu').appendTo($('.mobile-menu'));
        $('header .address').insertAfter($('.top-menu'));
        $('header .worktime').insertAfter($('.address'));

    }

    if (width > '991') {
        $('.mobile-menu .menu').appendTo('.header-top .container');
        $('.mobile-menu .address').insertAfter('.header-bottom .tel');
        $('.mobile-menu .worktime').insertAfter('.header-bottom .address');
    }
});
//# sourceMappingURL=../sourcemaps/main.js.map
