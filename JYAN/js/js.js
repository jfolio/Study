$(document).ready(function(){

	$('.menu-ani').click(function(){
		$(this).toggleClass('on');
		$('nav').stop().slideToggle(300);
		$('body').toggleClass('scl');
	});

	$('nav').on('scroll touchmove mousewheel', function(e){
		e.preventDefault();
		e.stopPropagation();
		return false;
	});

	$('.stc_intro').click(function(){
		var offset = $('#intro').offset();
		$('html').animate({scrollTop:offset.top},400);
	});

	$('.stc_about').click(function(){
		var offset = $('#about').offset();
		$('html').animate({scrollTop:offset.top},400);
	});

	$('.stc_contact').click(function(){
		var offset = $('#contact').offset();
		$('html').animate({scrollTop:offset.top},400);
	});

});
