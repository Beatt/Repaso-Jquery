$(document).ready(function(){
	
	// Atributos
	
	// Crean 3 etiquetas <a>
	for (var i=0; i < 3; i++) {
	 	$('<a href="lol.pdf"> Aqui </p>')
	 		.appendTo('section');
	};
	
	$('a')
		.eq(0)
		.attr('href', 'cabezas.xml');
	
	// Todos los <a href> que terminen con .pdf
	$('a[href$=".pdf"]')
		.css('color', 'green');
});
