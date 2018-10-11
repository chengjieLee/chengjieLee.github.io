$('#slider').sliderImg({
    image: ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg', './img/5.jpg', './img/1.jpg']
})

var arr1 = [
    { name: 'Late Troubles', des: '电子 Electronica', img: './img/tab1.png' },
    { name: '小河', des: '民谣 Folk', img: './img/tab2.png' },
    { name: 'BRE - Beijing Renaissance Ensemble', des: '古典 Classical', img: './img/tab3.png' },
    { name: ' 杨众国', des: '原声 Soundtrack', img: './img/tab4.png' },
    { name: '宽宽', des: '民谣 Folk', img: './img/tab5.png' },
    { name: '小象', des: '流行 Pop', img: './img/tab6.png' },
    { name: 'P.K.14', des: '摇滚 Rock', img: './img/tab7.png' },
    { name: '沈帜', des: '轻音乐 Easy Listening', img: './img/tab8.png' },
]
var arr2 = [
    { name: 'l terrapin', des: '说唱 Rap', img: './img/teb1.png' },
    { name: '鞭子情人', des: '民谣 Folk', img: './img/teb2.png' },
    { name: 'Ascension Music Group', des: '说唱 Rap ', img: './img/teb3.png' },
    { name: '包小静', des: '说唱 Rap', img: './img/teb4.png' },
    { name: '德宏老爹', des: '说唱 Rap', img: './img/teb5.png' },
    { name: '罗艺恒', des: '流行 Pop', img: './img/teb6.png' },
    { name: '英伦盒子', des: '民谣 Folk', img: './img/teb7.png' },
    { name: '李蔓', des: '流行 Pop', img: './img/teb8.png' },
]
var tabArr = [];
function addDom(conBox, arr, strHtml) {
    for (var i = 0; i < arr.length; i++) {
        strHtml += '<div class="box"><div class ="imgBox">\
            <img src="' + arr[i].img + '" alt=""> </div>\
            <div class = "cont"><p><a href="#" class="name"> ' + arr[i].name + '</a></p>\
            <span>' + arr[i].des + '</span></div></div>';
    }
    conBox.append(strHtml);
    return conBox;
}
var div1 = addDom($('<div class="conBox"></div>'), arr1, '');
var div2 = addDom($('<div class="conBox"></div>'), arr2, '');
tabArr.push(div1);
tabArr.push(div2);

$('#artists').tab1({
    tabList: ['本周流行音乐人', '上升最快音乐人'],
    title: '',
    tabCon: tabArr
});

var Arr1 = [
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz5.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz2.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz3.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz1.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz4.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz6.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz7.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz8.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz9.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz10.png' },
];
var Arr2 = [
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz1.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz2.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz5.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz4.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz3.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz6.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz7.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz8.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz9.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz10.png' },
];
var Arr3 = [
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz1.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz2.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz3.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz4.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz6.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz5.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz7.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz8.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz9.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz10.png' },
];
var Arr4 = [
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz1.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz2.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz3.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz5.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz4.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz6.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz7.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz8.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz9.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz10.png' },
];
var Arr5 = [
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz1.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz4.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz3.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz2.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz5.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz6.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz7.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz8.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz9.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz10.png' },
];
var Arr6 = [
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz1.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz2.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz5.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz3.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz4.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz6.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz7.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz8.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz9.png' },
    { name: 'half space, backspace', des: 'DVC / 1512次播放', img: './img/bz10.png' },
];
var TabArr = [];

function addDom2(conBox, arr, strHtml) {
    for (var i = 0; i < arr.length; i++) {
        strHtml += '<div class="box"><div class ="imgBox">\
            <img src="' + arr[i].img + '" alt=""> </div>\
            <div class = "cont"><p><a href="#" class="name"> ' + arr[i].name + '</a></p>\
            <span>' + arr[i].des + '</span></div></div>';
    }
    conBox.append(strHtml);
    return conBox;
}
var div1 = addDom2($('<div class="conBox2"></div>'), Arr1, '');
var div2 = addDom2($('<div class="conBox2"></div>'), Arr2, '');
var div3 = addDom2($('<div class="conBox2"></div>'), Arr3, '');
var div4 = addDom2($('<div class="conBox2"></div>'), Arr4, '');
var div5 = addDom2($('<div class="conBox2"></div>'), Arr5, '');
var div6 = addDom2($('<div class="conBox2"></div>'), Arr6, '');
TabArr.push(div1);
TabArr.push(div2);
TabArr.push(div3);
TabArr.push(div4);
TabArr.push(div5);
TabArr.push(div6);

$('#side-con').tab2({
    tabList: ['最热', '摇滚', '民谣', '流行', '电子', '说唱'],
    title: '',
    tabCon: TabArr
})