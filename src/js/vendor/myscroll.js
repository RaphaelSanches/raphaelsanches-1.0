//Desenvolvido por Raphael Sanches
new WOW().init();

$(document).ready(function(){
    
    //Scroll animado até o ponto certo
    $(".menu a").click(function(){
            $('.menu a').removeClass("active");
            event.preventDefault(); //evita o evento padrão ao clicar em um link
            var position = $(this).attr("href");
            var tentando = $(position).offset().top - 70;
            $(this).addClass("active");

 

	    	$('html, body').animate({
				scrollTop: tentando
	        }, 900);

        });
    
    $(".logo").click(function(){
    	$('html, body').animate({
				scrollTop: 0
	    }, 900);
    });

    var alturatela = $(window).height();
    $(".home").css("height", alturatela);

    $(window).scroll(function() {
        if ($(this).scrollTop() > alturatela){
            $('.menu a').removeClass("active");
            $('nav').addClass("scrolled");
            $('.menu a').eq(1).addClass("active");
        }

        else{
            $('nav').removeClass("scrolled");
        }
        if ($(this).scrollTop() > alturatela+1103){
            $('.menu a').removeClass("active");
            $('.menu a').eq(2).addClass("active");
        }


    });

});