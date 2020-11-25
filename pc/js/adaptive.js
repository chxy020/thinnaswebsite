/*-----------兼容小屏--------------*/
function winWresize(element){
    var winWidth=$(window).width();
    //console.log("===========",winWidth);
    if (winWidth <= 1220) {
        $('.bodySY').addClass("bodyw990")
    }else{
        $('.bodySY').removeClass("bodyw990")
    }
}
winWresize();
//浏览器窗口调整大小
$(window).resize(function () {
    winWresize();
});