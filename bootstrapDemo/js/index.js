$('.navigation a').on('click', function() {
    $("html,body").animate({
        scrollTop: $($(this).attr('href')).offset().top - 30 + 'px'
    }, 650);
    return false;
})