//O DOM está pronto!
(function (){
	//Declaração de variáveis

	var bannerHeight = $('#banner').height()

	$(window).scroll(function(){
		if($(this).scrollTop() > bannerHeight){
			$('.nav-bar').removeClass('not-scrolled').addClass('scrolled');
		}

		else{
			$('.nav-bar').removeClass('scrolled').addClass('not-scrolled');
		}
	});

 }) ();