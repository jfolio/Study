$(document).ready(function(){
	
	$('.menu > li').mouseover(function(){
		$(this).find('.submenu').stop().slideDown(200);
	});
	$('.menu > li').mouseout(function(){
		$(this).find('.submenu').stop().slideUp(200);
	});
	
});

setInterval(slide,3000); 
		
		function slide() {
				$('.slide_wrap').stop().animate({
				marginTop : 400
				},1000,slideNext);
		}

		function slideNext(){	
				$('.slide_wrap>li').eq(2).prependTo('.slide_wrap');
				$('.slide_wrap').stop().animate({
				marginTop:0
				},0);				
		}
