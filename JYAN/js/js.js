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

	/* 1 */
    $(window).scroll( function(){
        /* 2 */
        $('.skills').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if( bottom_of_window > bottom_of_object/1 ){
							$('.pgb1 div').addClass('.skill1');
							$('.pgb2 div').addClass('.skill2');
							$('.pgb3 div').addClass('.skill3');
							$('.pgb4 div').addClass('.skill4');
              $('.pgb5 div').addClass('.skill5');
            }
        });
    });

	$('.stc_contact').click(function(){
		var offset = $('#contact').offset();
		$('html').animate({scrollTop:offset.top},400);
	});

});
