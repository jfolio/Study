$(document).ready(function(){
	
	$(".nav > .menu > li").mouseover(function(){
		$(this).find(".submenu").stop().slideDown(200);
	});
	$(".nav > .menu > li").mouseout(function(){
		$(this).find(".submenu").stop().slideUp(200);
	});
	
	$('.popup').click(function(){
		window.open('popup.html', '_blank', 'width=450,height=280');
	});
	
});