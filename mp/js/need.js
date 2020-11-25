//常见问题
$(function(){
	$(".question_list>li").on("click",function(){
		var next = $(this).children(".card-body");
		var iconH4 = $(this).children("h4");
		next.slideToggle(500);
		iconH4.addClass('aa');
		$(this).siblings().children("h4").removeClass("aa")
		$('.card-body').not(next).slideUp(500);//不是当前点击的内容全部向上收起
		//$..('.wrap>ul>li').children("span").not(icon).html("+");
		return false;
	})
})
//右侧滑动菜单
window.onload = function () {
	//移动端使用touchend
	var event = navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i) ? 'touchend' : 'click';
	// 选择器
	var Q = function (id) {
		return document.getElementById(id)
	};
	//方向控制
	//手动
	var _manualclose = new mSlider({
		dom: ".layer-manualclose",
		direction: "right",
		distance: "auto"
	})
	Q("btnManualClose").addEventListener(event, function (e) {
		_manualclose.open();
	});

	Q("btnClose").addEventListener(event, function (e) {
		_manualclose.close();
	});
}