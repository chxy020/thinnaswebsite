$(function() {	
	$("#video-i").click(function() {
		$(".windows-video").show();	
	});
	$(".closeDiv").click(function(a) {
		a.preventDefault();
		// $("#bodyMask").fadeOut();
		// $(".windows").hide();
		$(".windows-video").hide()
	});

	$("#video-i").hover(function() {
		$("#video-i").addClass("anim-videoscale");
	},function(){
		$("#video-i").removeClass("anim-videoscale");
	});
	
	
	$(window).scroll(function() {
		var a = $(window).scrollTop();
		var pTop1 = $("#function").offset().top - 56,
			pTop2 = $("#side").offset().top - 56,
			pTop3 = $("#homepage").offset().top - 56,
			pTop4 = $("#page3").offset().top - 56;
			pTop5 = $("#page4").offset().top - 56;
			pTop6 = $("#page5").offset().top - 56;
			

    //    var ba=$("#function").offset().top - $("#function").height() / 8 ;
    //    pTop1 <= a && a < pTop2 && ($("#androiddeploy").addClass("anim-androiddeploy"), $("#androidcont").addClass("anim-androidcont"), $("#andriod-word").addClass("anim-con2"));
	//    (pTop2 <= a || a < ba) && ($("#androiddeploy").removeClass("anim-androiddeploy"), $("#androidcont").removeClass("anim-androidcont"), $("#andriod-word").removeClass("anim-con2"));
		    

            var aa = $("#side").offset().top - $("#side").height() * 3 / 4 ,
		ab = $("#homepage").offset().top + $("#homepage").height() / 4 ,
		ac = $("#homepage").offset().top - $("#homepage").height() * 3 / 4 ,
		ad = $("#page3").offset().top + $("#page3").height() / 4 ,
		ae = $("#page3").offset().top - $("#page3").height() * 3 / 4 ;
		af = $("#page4").offset().top + $("#page4").height() / 4 ,
		ag = $("#page4").offset().top - $("#page4").height() * 2 / 4 ,
		ah = $("#page5").offset().top + $("#page5").height() / 4 ,
		ai = $("#page5").offset().top - $("#page5").height() * 3 / 4 ;
		aj = $("#scene").offset().top + $("#scene").height() / 4 ,
		ak = $("#scene").offset().top - $("#scene").height() * 3 / 4 ;

		aa <= a && a < ab && ($("#side-word").addClass("anim-side-word"),$("#sidecont").addClass("anim-side-cont"));
		(ab <= a || a < pTop1 ) && ($("#side-word").removeClass("anim-side-word"),$("#sidecont").removeClass("anim-side-cont"));

		ac <= a && a < ad && ($("#homepage-word").addClass("anim-side-word"),$("#homepagecont").addClass("anim-homepage-cont"));
		(ad <= a || a < pTop2) && ($("#homepage-word").removeClass("anim-side-word"),$("#homepagecont").removeClass("anim-homepage-cont"));
		
		ae <= a && a < af && ($("#page3-word").addClass("anim-side-word"));
		(af <= a || a < pTop3) && ($("#page3-word").removeClass("anim-side-word"));

		ag <= a && a < ah && ($("#page4-word").addClass("anim-side-word-page4"),$("#page4cont").addClass("anim-page4-cont"));
		(ah <= a || a < pTop4) && ($("#page4-word").removeClass("anim-side-word-page4"),$("#page4cont").removeClass("anim-page4-cont"));

		ai <= a && a < aj && ($("#page5-word").addClass("anim-side-word"));
		(aj <= a || a < pTop5) && ($("#page5-word").removeClass("anim-side-word"));

		
		

		// ae <= a && ($("#page3-word").addClass("anim-side-cont"));
		// ( a < pTop3) && ($("#page3-word").removeClass("anim-side-cont"));


		// aa <= a && a < ab && ($("#side-page").addClass("anim-side-page"), $("#scanning").addClass("anim-scanning"), $("#side-person").addClass("anim-side-person"), $("#side-word").addClass("anim-side-word"));
		// (ab <= a || a < pTop1 ) && ($("#side-page").removeClass("anim-side-page"), $("#scanning").removeClass("anim-scanning"), $("#side-person").removeClass("anim-side-person"), $("#side-word").removeClass("anim-side-word"));
		// ac <= a && a < ad && ($("#homepage-page").addClass("anim-homepage-page"), $("#homepage-word").addClass("anim-side-word"));
		// (ad <= a || a < pTop2) && ($("#homepage-page").removeClass("anim-homepage-page"), $("#homepage-word").removeClass("anim-side-word"));	
		// ae <= a && ($("#resourcecont").addClass("anim-resource-cont"), $("#resource-word").addClass("anim-resource-word"));
		// ( a < pTop3) && ($("#resourcecont").removeClass("anim-resource-cont"), $("#resource-word").removeClass("anim-resource-word"));
		
		
	});	
	setTimeout(function () {
		window.scroll(0,0);
	}, 100);

	
	



	
});
