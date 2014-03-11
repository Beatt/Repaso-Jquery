$(document).ready(function(){
	
	// Recorrer el DOM
	// Uno o dos pasos está bien, evitar pasar atrevesar a otro contenedor.
		/*
		 * Métodos de recorrido 
		 * 
		 * $('h1').next('p'); Seleccionar el inmediato y 
		 * 	próximo elemento <p> con respecto a H!
		 * 
		 * $('div:visible').parent(); seleccionar el 
		 * 	elemento contenedor a un div visible
		 * 
		 * $('input[name=first_name]').closest('form');
		 * 	Seleccionar el elemento <form> más cercano a un input
		 * 
		 * $('#myList').children(); seleccionar todos los elementos hijos
		 * 	de #myList
		 * 
		 * $('li.selected').sibling(); seleccionar todos los items hermanos
		 * 	del elemento <li>
		 */
	
	// Interactuar con una selección each
	$('ul')
	.children()
	.each(function(indice, elem){
		
		$('div')
		.append('El elemento ' + indice + 
			' contiene el siguiente HTML: ' + $(elem).html() + 
			'<br />');
	});
	
});// Fin document 
