    var dotBox = document.getElementsByClassName('dot-box')[0];
        (function(){
            for(var i=0;i<81;i++){ 
                var dot = document.createElement('li');
    dotBox.appendChild(dot);
    var dotX = parseInt(Math.random()*1360);
    var dotY = parseInt(Math.random()*650);
    var opacity = Math.random();
    dot.style.cssText='left:' + dotX + 'px; top:'+ dotY +'px ;opacity:'+ opacity;
}
})()
        var obj={
        init: function(){
                var oLi = $('.dot-box li:nth-child(5n-3)');
                setInterval(function(){
        oLi.fadeToggle();
    },700);
    this.bindEvent();
},
            bindEvent:function(){
        $('.header-item').on('click', function (e) {
            var mCase = e.target.title;
            var mCase = mCase.charAt(mCase.length - 1);
            if (mCase) {
                $('.tab' + mCase).addClass('active')
                    .siblings('.box-item').removeClass('active');
                $(this).addClass('active')
                    .siblings('.header-item').removeClass('active');
            }
        })
    }
}
obj.init()
$('.navi .menu a').on('click', function () {
    $("html,body").animate({
        scrollTop: $($(this).attr('href')).offset().top - 10 + 'px'
    }, 550);
    return false;
})