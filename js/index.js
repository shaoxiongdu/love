function timer() {
    var start = new Date(2015, 3, 1); // 2015.7.2
    var t = new Date() - start;
    var h = ~~(t / 1000 / 60 / 60 % 24);
    if (h < 10) {
        h = "0" + h;
    }
    var m = ~~(t / 1000 / 60 % 60);
    if (m < 10) {
        m = "0" + m;
    }

    var s = ~~(t / 1000 % 60);
    if (s < 10) {
        s = "0" + s;
    }
    document.getElementById('d').innerHTML = ~~(t / 1000 / 60 / 60 / 24);
    document.getElementById('h').innerHTML = h;
    document.getElementById('m').innerHTML = m;
    document.getElementById('s').innerHTML = s;
}
timer();
setInterval(timer, 1000);

/* 鼠标点击特效 */
jQuery(document).ready(function($) {
    $("html").click(function(e) {
        //随机选择文字
        var clickWord = [
            "❤",
            "正能量",
            "(*^▽^*)",
            "元气满满",
            "开心",
            "快乐",
            "可爱",
            "暴富",
            "暴瘦",
            "❤",
            "小赵考研上岸",
            "去旅游",
            "因为喜欢，可迎万难。",
            "山水一程，三生有幸。",
            "不偏不倚，刚好是你。",
            "会陷入温柔暮色里 会陷入你",
            "有你在身边 风都超级甜",
            "入目无别人，四下皆是你",
            "一起看日出到日落天气",
            "永不妥协,光芒万丈",
            "期待未来",
            "灯火可亲，有梦可做。",
            "未来可期",
            "宝藏女孩",
            "留下来一起生活",
            "我们来日方长。",
            "小小的日常。",
            "保持炙热 坚持下去。",
            "已建立长期合作伙伴关系",
            "和你在一起，当下即永恒",
            "小手一牵，岁岁年年",
            "遇见即是上上签",
            "保持公开，低调恋爱",
            "好好生活，一直爱你",
            "细水长流",
            "快乐与平凡最浪漫",
            "永远年轻，永远热泪盈眶。",
            "今天的你也辛苦啦",
        ];

        var a_idx = Math.floor((Math.random() * clickWord.length));
        // 随机产生文字颜色
        var color1 = Math.floor((Math.random() * 255));
        var color2 = Math.floor((Math.random() * 255));
        var color3 = Math.floor((Math.random() * 255));

        a_idx = (a_idx + 1) % clickWord.length;
        var $i = $(`<span/>`).text(clickWord[a_idx]);

        var x = e.pageX,
            y = e.pageY;
        $i.css({　　　　　　//文字样式--------------------------
            "z-index": 9999999999999 ,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-family":"mmm",
            "fontSize":Math.floor((Math.random() * 22)+15),
            "font-weight": "bold",
            "color": "rgb("+color1+","+color2+","+color3+")",
            "-webkit-user-select":"none",
            "-moz-user-select":"none",
            "-ms-user-select":"none",
            "user-select":"none",
        });
        $("body").append($i);
        $i.animate({
                "top": y - 200,  //点击后文字上升高度
                "opacity": 0    //透明度
            },
            1500, //文字消失时间
            function() {
                $i.remove();
            });
    });
});