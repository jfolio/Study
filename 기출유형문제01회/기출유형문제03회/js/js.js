$(document).ready(function(){
	
	$('.menu > li').mouseover(function(){
		$(this).find('.submenu').stop().slideDown(200);
	});
	$('.menu > li').mouseout(function(){
		$(this).find('.submenu').stop().slideUp(200);
	});
	
});