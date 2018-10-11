(function($) {
    var obj1 = {
        init: function(opt) {
            this.opt = opt;
            this.creatDom();
            this.bindEvent();
        },
        creatDom: function() {
            var self = this;
            var opt = self.opt;
            var wrap = opt.father;
            var len = opt.tabList.length;
            var tabHtml = '';
            var oDiv = $('<div class="artists-des"></div>')
            var conDiv = $('<div class="art-content"></div>')
            var oSpan = $('<span class="header"></span>');
            var oUl = $('<ul class ="art-tabs"></ul>');
            for (var i = 0; i < len; i++) {
                tabHtml += '<li><a href="#" title="tab' + (i + 1) + '"> ' + opt.tabList[i] + ' </a></li > '
            }
            oUl.html(tabHtml);
            oDiv.append(oSpan.text(opt.title))
                .append(oUl)
                .append(conDiv.html(opt.tabCon))
            wrap.append(oDiv);
            for (var i = 0; i < len; i++) {
                $($('.conBox')[i]).addClass('tab' + (i + 1));
            }
            $('.art-content').find('.conBox:first').addClass('current');
            $('.art-tabs').find('a').eq(0).addClass('activeTab');
        },
        bindEvent: function() {
            $('.art-tabs').on('click', 'a', function(e) {
                e.preventDefault();
                var id = $(this).attr('title');
                //id = 'tab' + (i + 1)
                $('.activeTab').removeClass('activeTab');
                $(this).addClass('activeTab');
                $('.current').removeClass('current');
                $('.' + id).addClass('current');
            })
        }
    }


    $.fn.extend({
        tab1: function(option) {
            option.father = this || $('body');
            obj1.init(option);
        }
    })
}(jQuery))