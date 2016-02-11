//O DOM está pronto!
(function (){
	//Declaração de variáveis

	var bannerHeight = $('#banner').height()

	//Menu function
	$(window).scroll(function(){
		if($(this).scrollTop() > bannerHeight){
			$('.nav-bar').removeClass('not-scrolled').addClass('scrolled');
		}

		else{
			$('.nav-bar').removeClass('scrolled').addClass('not-scrolled');
		}
	});

	//Button to down
	$('.btn-down').click(function(e){
		e.preventDefault();
    	$('html, body').animate({
			scrollTop: bannerHeight
        }, 900);
	});

	//Portfolio
	$('#portfolio').on('click', '.portfolio-item', function(e){
		e.preventDefault();
		$('.portfolio-item').addClass('blurred');
		$(this).removeClass('blurred');

	});

 }) ();