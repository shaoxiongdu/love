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

        //读取配置文件 初始化关键字数组
        var clickWord = config.clickWord;

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
            "fontSize":Math.floor((Math.random() * 15)+10),
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