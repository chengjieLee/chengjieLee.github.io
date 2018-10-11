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
            var oDiv = $('<div class="side-con-des"></div>')
            var conDiv = $('<div class="art-content2"></div>')
            var oSpan = $('<span class="header"></span>');
            var oUl = $('<ul class ="side-con-tabs"></ul>');
            for (var j = 0; j < len; j++) {
                tabHtml += '<li><a href="#" title2="tabT' + (j + 1) + '"> ' + opt.tabList[j] + ' </a></li > '
            }
            oUl.html(tabHtml);
            oDiv.append(oSpan.text(opt.title))
                .append(oUl)
                .append(conDiv.html(opt.tabCon))
            wrap.append(oDiv);
            for (var j = 0; j < len; j++) {
                $($('.conBox2')[j]).addClass('tabT' + (j + 1));
            }
            $('.art-content2').find('.conBox2:first').addClass('current2');
            $('.side-con-tabs').find('a').eq(0).addClass('activeTab2');
        },
        bindEvent: function() {
            $('.side-con-tabs').on('click', 'a', function(e) {
                e.preventDefault();
                var id = $(this).attr('title2');
                //id = 'tab' + (i + 1)
                $('.activeTab2').removeClass('activeTab2');
                $(this).addClass('activeTab2');
                $('.current2').removeClass('current2');
                $('.' + id).addClass('current2');
            })
        }
    }


    $.fn.extend({
        tab2: function(option) {
            option.father = this || $('body');
            obj1.init(option);
        }
    })
}(jQuery))