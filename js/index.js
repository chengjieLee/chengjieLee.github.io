$('.navi .menu a').on('click', function () {
    $("html,body").animate({
        scrollTop: $($(this).attr('href')).offset().top - 10 + 'px'
    }, 550);
    return false;
})