$(document).ready(function(){
	// SELECCIONES
	
	// Ejercicios
		// 1. Seleccionar todos los elementos div que poseen la clase “module”.
			$('div[class$=module]').html("Divs con clase module");
			$('div.module');
		
		/* 2. Especificar tres selecciones que puedan seleccionar el tercer ítem de la lista desordenada #myList.
			¿Cuál es el mejor para utilizar? ¿Porqué?
				La segunda es la mejor ya que estamos accediendo por id y eso hace más rapido
					la busqueda en el DOM, ya que el id es único */
		
			// Selecciono todos los li de la etiqueta lu, y selecciono el 3
			$('ul li')
				.eq(2)
				.append(' 1 SELECCIÓN');
			
			// Busca los li del la lista myList, y selección el 3
			$('#myList')
				.find('li')
				.eq(2)
				.append(' 2 SELECCIÓN');
			
			// Obtiene los li impares, pero solo quiero obtener el 2 
			$('#myList li:even')
				.eq(1)
				.append(' 3 SELECCIÓN');
			
		// 3. Seleccionar el elemento label del elemento input utilizando un selector de atributo.
			$('label[for="q"]');
		
		// 4. Averiguar cuantos elementos en la página están ocultos (ayuda: .length).
			console.log("Total de elementos en la página: " + $('*').length);
			console.log("Elementos ocultos: " + $('*:hidden').length);
			console.log("Elementos no ocultos: " + $('*:visible').length);
		
		// 5. Averiguar cuantas imágenes en la página poseen el atributo alt.
			var altTotal = $('img[alt]').length;
			console.log("Elementos con el atributo alt: " + altTotal);	
	
		// 6. Seleccionar todas las filas impares del cuerpo de la tabla.
			/*$('<em> IMPARES SELECCIONADOS </em>')
				.css('color', 'green')
				.appendTo('#myList li:even');*/
				
			$('<em> IMPARES SELECCIONADOS </em>')
				.appendTo('#myList li:even')
				.eq(1)
				.css('color', 'green');
				
			/*$('#myList li:even')
				.append("<em> IMPARES SELECCIONADAS </em>");
			$('#myList em')
				.eq(1)
				.css('color', 'green');*/

});// Fin document
