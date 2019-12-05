/*$(function(){
	//Inicio menu oculto
	var header = document.getElementById('header');
	var headroom = new Headroom(header);
	headroom.init();
	//fin
});*/
//Mostrat menu
	$('#buttonMenu').click(function(){
		if ($('#buttonMenu').attr('class') == 'fa fa-bars'){
			$('#buttonMenu').removeClass('fa fa-bars').addClass('fa fa-close');
			$('.navegacion .menu').css({'left':'0px'});
			$('.navegacion').css({'width':'100%'});
		}else{
			$('#buttonMenu').removeClass('fa fa-close').addClass('fa fa-bars');
			$('.navegacion .menu').css({'left':'-320px'});
			$('.navegacion .submenu').css({'left':'-320px'});
			$('.navegacion').css({'width':'0%'});
		}
	});	
	//mostrar submenu
	$('.navegacion .menu > .itemSubmenu a').click(function(){
		var positionMenu = $(this).parent().attr('menu');

		$('.itemSubmenu[menu='+positionMenu+'] .submenu').css({"left":"0px"});
	});
	//ocultar
	$('.navegacion .menu .itemSubmenu li.go-back').click(function(){
		$(this).parent().css({'left':'-320px'});
		//$('.itemSubmenu[menu='+positionMenu+'] .submenu').css({"left":"-320px"});
	});
