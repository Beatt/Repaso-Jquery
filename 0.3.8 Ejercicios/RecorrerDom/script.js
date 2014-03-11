$(document).ready(function(){
	
	/* 1. Seleccionar todas las imágenes en la página; registrar en la consola 
	 * 	el atributo alt de cada imagen.
	 */
		$('*')
			.find('img')
			.each(function(indice, elem){
				console.log($(elem).attr('alt'));
			});
		
	// 2. Seleccionar el elemento input, luego dirigirse hacia el formulario y añadirle una clase al mismo.
		$('form:first input')
			.parent() // Padre
			.append("LOL")
			.addClass('miEstilo');
	
	/* 3. Seleccionar el ítem que posee la clase “current” dentro de la lista #myList y remover dicha clase
			en el elemento; luego añadir la clase “current” al siguiente ítem de la lista. */
			$('#myList li.current')
				.removeClass()
				.next()
				.toggleClass('current');
	// 4. Seleccionar el elemento select dentro de #specials; luego dirigirse hacia el botón submit.
				$('#specials select')
					.parent()
					.next()
					.find('input.input_submit')
					.addClass('lol');
					
	/* 5. Seleccionar el primer ítem de la lista en el elemento #slideshow; añadirle la clase “current” al
		mismo y luego añadir la clase “disabled” a los elementos hermanos.*/
			$('#slideshow li:first')
				.toggleClass('current')
				.siblings() // Carnales
				.toggleClass('disabled');	
			
});// Fin document
