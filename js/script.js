//Button to top
function backToTop() {
    let button = $('.to-top__btn');
    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000);
    })
}

backToTop();


//header fixed
jQuery("document").ready(function ($) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".header").css({
                'position': 'fixed',
                'background': '#000000'
            });
        } else {
            $(".header").css({
                'position': 'absolute',
                'background': 'transparent'
            });
        }

    })
});
