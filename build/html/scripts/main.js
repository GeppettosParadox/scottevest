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
    $('.product-grid__filters button').on('click', function() {
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
<<<<<<< 946988f3b28ba14131cd5a98e15977259cb8ed8d
<<<<<<< d1a06fbe2672821ce61c6fced6baed3bdc58046f
<<<<<<< d4c43ec8ec47174d3bbcb0da21a0bc87e60d2dd1
=======
=======
<<<<<<< 705758db9d72c8e0afabe0f45433b7e087677264
>>>>>>> Adding build folder
=======
<<<<<<< fec46c701e6ec55dfea36dfe751e886bf24df275
<<<<<<< 705758db9d72c8e0afabe0f45433b7e087677264
=======
<<<<<<< 0ff859e55752ad821cf8d66bed0af366894ad9ab
=======
>>>>>>> Adds latest build
>>>>>>> Adds latest build

    $(window).scroll(function() {
        var $navBar = $('.nav-bar');
        if ($(this).scrollTop() > 45){
            $navBar.addClass("sticky");
            $navBar.slideDown(500);
        } else {
            $navBar.removeClass("sticky");
        }
    });
<<<<<<< 946988f3b28ba14131cd5a98e15977259cb8ed8d
<<<<<<< d1a06fbe2672821ce61c6fced6baed3bdc58046f
>>>>>>> Adds latest build
=======
<<<<<<< fec46c701e6ec55dfea36dfe751e886bf24df275
>>>>>>> Adds latest build
=======
=======
>>>>>>> Adding build folder
>>>>>>> Adding build folder
=======
>>>>>>> Adds latest build
>>>>>>> Adds latest build
});

$(window).load(function(){
  $(".xray-img").twentytwenty({
    default_offset_pct: 0.5, // How much of the before image is visible when the page loads
    orientation: 'horizontal' // Orientation of the before and after images ('horizontal' or 'vertical')
  });
});
