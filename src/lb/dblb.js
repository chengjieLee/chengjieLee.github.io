(function($) {

    function Slider(options) {
        this.opt = options || {};
        //用wrap存下要插入的父级元素
        this.wrap = this.opt.father;
        this.init();
        this.bindEvent();
        //     //自动轮播
        this.autoSlider();
    };

    Slider.prototype.init = function() {
        this.nowIndex = 0;
        this.timer = undefined;
        this.lock = true;
        this.image = this.opt.image;
        this.len = this.image.length - 1;
        this.picWidth = parseInt(this.wrap.css('width'));
        this.createDom();
    };

    Slider.prototype.createDom = function() {
        var len = this.len;
        var str = '';
        var imgBox = $('<ul class="slider"></ul>');
        var dot = $('<div class="dot"></div>')
        var list = $('<ul></ul>');
        var dotList = '';
        var btn = '<div class="btn">\
                    <div class ="left">&lt</div>\
                    <div class ="right">&gt</div>\
                    </div>';

        for (var i = 0; i < len; i++) {
            str += '<li><a href = "javaScript:void(0)"><img src =  ' + this.image[i] + '  ></a></li>';
            dotList += '<li></li>';
        }
        str += '<li><a href = "javaScript:void(0)"><img src =  ' + this.image[0] + '  ></a></li>'
        $(dotList).appendTo(list);
        //向wrap里面添加元素
        this.wrap.append(imgBox.html(str))
            .append($(btn))
            .append(dot.append(list));
        //第一个小圆点默认被选择
        $('.dot li').eq(0).addClass('select');
    };

    Slider.prototype.bindEvent = function() {
        var self = this;
        $('.dot li').add('.left').add('.right').on('click', function() {
            if ($(this).attr('class') == 'left') {
                self.move('left');
            } else if ($(this).attr('class') == 'right') {
                self.move('right');
            } else {
                self.move($(this).index());
            }
        })
        self.wrap.on('mouseenter', function() {
            clearTimeout(self.timer);
        }).on('mouseleave', function() {
            self.autoSlider();
        })
    };

    Slider.prototype.move = function(dir) {
        var self = this;
        var len = this.len;
        var picWidth = this.picWidth;
        if (self.lock) {
            self.lock = false;
            if (dir == 'left' || dir == 'right') {
                if (dir == 'left') {

                    if (self.nowIndex == 0) {
                        $('.slider').css({
                            'left': -len * picWidth + 'px'
                        });
                        self.nowIndex = len - 1;

                    } else {
                        self.nowIndex--;
                    }

                } else if (dir == 'right') {

                    if (self.nowIndex == len - 1) {
                        $('.slider').animate({
                            'left': -len * picWidth + 'px'
                        }, function() {
                            $(this).css('left', 0);
                            self.autoSlider();
                            self.lock = true;
                        })
                        self.nowIndex = 0;

                    } else {
                        self.nowIndex++;
                    }
                }

            } else {
                self.nowIndex = dir;
            }
            self.slider();

            self.changeStyle();
        }
    };
    Slider.prototype.slider = function() {
            var self = this;
            var picWidth = this.picWidth;
            $('.slider').animate({
                'left': -(self.nowIndex * picWidth) + 'px'
            }, function() {
                self.autoSlider();
                self.lock = true;
            })
        }
        //改变小圆点
    Slider.prototype.changeStyle = function() {
        $('.select').removeClass('select');
        $('.dot li').eq(this.nowIndex).addClass('select');
    }

    Slider.prototype.autoSlider = function() {
        var self = this;
        clearTimeout(self.timer);
        self.timer = setTimeout(function() {
            self.move('right');
        }, 1500)
    }

    $.fn.extend({
        sliderImg: function(options) {
            options.father = this || $('body');
            new Slider(options);
        }
    })
}(jQuery))