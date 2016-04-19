function setWhatsInsideIcons(slider, nextSlide) {
    $('.whats-inside__icon', slider)
        .css('transform', 'scale(0.66, 0.66)')
        .css('opacity', '.66')
    ;
    $('.whats-inside__icon[data-slick-index="' + nextSlide + '"]', slider)
        .css('transform', 'scale(1, 1)')
        .css('opacity', '1')
    ;
    $('.whats-inside__icon[data-slick-index="' + (nextSlide + 1) + '"], .whats-inside__icon[data-slick-index="' + (nextSlide - 1) + '"]', slider)
        .css('transform', 'scale(0.75, 0.75)')
        .css('opacity', '.8')
    ;
    $('.whats-inside__icon[data-slick-index="' + (nextSlide + 2) + '"], .whats-inside__icon[data-slick-index="' + (nextSlide - 2) + '"]', slider)
        .css('transform', 'scale(0.66, 0.66)')
        .css('opacity', '.66')
    ;
}

$(document).ready(function () {
    $('.tab-picker button').on('click', function() {
        var $button = $(this);
        var $category = $(this).attr('data-productcat');
        var $products = $button.closest('.product-grid').find('.product-grid__product');
        $button
            .siblings()
            .addBack()
            .removeClass('active')
        ;
        $button
            .addClass('active')
        ;
        $products.addClass('hide');
        if ($category !== '') {
            $products.filter('[data-productcat="' + $category + '"]')
                .removeClass('hide')
            ;
        } else {
            $products.removeClass('hide');
        }
    });

    var $whats_inside_icons = $('.whats-inside__icons');

    $whats_inside_icons.slick({
        speed: 500,
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 7,
        centerMode: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5
                }
            }
        ]
    });

    setWhatsInsideIcons($whats_inside_icons, 0);

    $whats_inside_icons.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        setWhatsInsideIcons(this, nextSlide);
    });

    $('.whats-inside__icon', $whats_inside_icons).on('click', function() {
        var $index = $(this).attr('data-slick-index');
        $whats_inside_icons.slick('slickGoTo', $index, false);
    });

    $('.explore-product--more button').on('click', function() {
        $('.explore-product--hidable')
            .css('display', 'block')
            .delay(330)
            .removeClass('explore-product--hidden')
        ;
        $('.explore-product--more')
            .addClass('explore-product--hidden')
            .delay(330)
            .css('display', 'none')
        ;
        $('.explore-product--less')
            .removeClass('explore-product--hidden')
            .delay(330)
            .css('display', 'block')
        ;
    });

    $('.explore-product--less button').on('click', function() {
        $('.explore-product--hidable')
            .addClass('explore-product--hidden')
            .css('display', 'none')
        ;
        $('.explore-product--less')
            .css('display', 'none')
            .addClass('explore-product--hidden')
        ;
        $('.explore-product--more')
            .css('display', '')
            .removeClass('explore-product--hidden')
        ;
    });

    $('.size-options button').on('click', function() {
        $(this).siblings().andSelf().removeClass('active');
        $(this).addClass('active');
    });

    $('.color-options button').on('click', function() {
        $(this).siblings().andSelf().removeClass('active');
        $(this).addClass('active');
    });

    $('.qty-options button').on('click', function() {
        var qty = $(this).siblings('input')[0];
        var $qty_value = parseInt($(qty).val());
        if ($(this).hasClass('add')) {
            $qty_value = $qty_value + 1;
        }
        if ($(this).hasClass('sub') && $qty_value > 1) {
            $qty_value = $qty_value - 1;
        }
        $(qty).val($qty_value).attr('value', $qty_value);
    });

    $(window).scroll(function() {
        var $navBar = $('.nav-bar');
        if ($(this).scrollTop() > 131){
            $navBar.addClass("sticky");
            $navBar.slideDown(500);
        } else {
            $navBar.removeClass("sticky");
        }
    });
});

$(window).load(function(){
  $(".xray-img").twentytwenty({
    default_offset_pct: 0.5, // How much of the before image is visible when the page loads
    orientation: 'horizontal' // Orientation of the before and after images ('horizontal' or 'vertical')
  });
});
