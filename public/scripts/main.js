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
});

$(window).load(function(){
  $(".xray-img").twentytwenty({
    default_offset_pct: 0.5, // How much of the before image is visible when the page loads
    orientation: 'horizontal' // Orientation of the before and after images ('horizontal' or 'vertical')
  });
});
