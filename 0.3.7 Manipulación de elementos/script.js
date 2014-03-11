$(document).ready(function(){
	
	// Manipulación de elementos
		/*
		 * 	$.fn.html Obtiene o establece el contenido HTML de un elemento.
			$.fn.text Obtiene o establece el contenido en texto 
				del elemento; en caso se pasarle como argumento código HTML, este es despojado.
			$.fn.attr Obtiene o establece el valor de un determinado atributo.
			$.fn.width Obtiene o establece el ancho en pixeles del primer 
				elemento de la selección como un entero.
			$.fn.height Obtiene o establece el alto en pixeles del primer 
				elemento de la selección como un entero.
			$.fn.position Obtiene un objeto con información sobre la posición 
				del primer elemento de la selección, relativo al primer elemento 
				padre posicionado. Este método es solo obtenedor.
			$.fn.val Obtiene o establece el valor (value) en elementos de formularios.
		 */
		
	$('<p> Mi parrafo </p>')
		.appendTo('div');
	
	$('button:first')
		.click(function(){
			$('p')
				.html('LOL !!!!!!!!!!!!')
				.css('color', 'brown');
	});
	
	// Obtener un clon de un elemento
	$('button')
		.eq(1)
		.click(function(){
			$('p:first')
				.clone()
				.appendTo('div');
	});
	
	// Eliminar un elemento
		/*
		 * Existen 2 métodos para eliminar 
		 * 	remove - El cual remueve el elemento de forma definitiva
		 * 	del DOM
		 * 
		 *  detach - Remueve el elemento, pero sigue manteniedo la información
		 * 		y eventos que se le asocian, nos puede ayudar a reinsertarlo de nuevo
		 * 
		 * 	empty - vacia el contenido HTML de un elemento 
		 */
	/*$('button')
		.eq(2)
		.click(function(){
			$('div p:first').remove();
		});*/
	
	$('button')
		.eq(2)
		.click(function(){
			$('div p:first').detach();
		});
		
	// Crear nuevos elementos
	$('<h3>Primera forma de crear un elemento creado</h3>').appendTo('body');
	$('body').append('<h3> Segunda forma de crear un elemento </h3>');
	
		/* Si se desea crear n-elementos es mejor guardalos en un array
			y posteriormente agregarlos.*/
		
		var miArray = [];
		
		for (var i=0; i < 4; i++) {
			miArray.push('<h5>Push en un array</h5>');
		};		
		
		$('body').append(miArray.join(''));
	
	// Manipulación de atributos
		
		//manipular un simple atributo
		//$('div a:first').attr('href', 'nuevoDestino.html');
		
		/* manipular múltiples atributos
		$('div a:first').attr({
			href : 'nuevoDestino.html',
			rel : 'super-Special'
		});*/
		
		// Utilizar una funcion para determinar el valor del nuevo atributo
		
		$('#miDiv a:first').attr({
			rel : 'superEspecial',
			href : function(indice, href){
				return '/new/' + href;
			}
		});
		
		/*$('#miDiv a:first').attr('href', function(indice, href){
			return '/new/' + href;
		});*/
	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
});// Fin document
