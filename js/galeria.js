$(document).ready(function(){

	$(".galeria").each(function(indice){
		$(this).find('figure > a').attr('data-fancybox','galeria'+indice+'A');
		
		$(this).find('figcaption > a').attr('data-fancybox','galeria'+indice+'B');
		
		$(this).find('a').attr('data-caption',function(){
			return $(this).attr('title');
		});
	});

	$(".galeria a").fancybox();
	
});