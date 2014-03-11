$(document).ready(function(){
	
	// Manipulación....
	// 1. Añadir 5 nuevos ítems al final de la lista desordenada #myList. Ayuda:
		for (var i=0; i < 5; i++) {
		  $('<li> Nuevos items </li>')
		  	.appendTo('#myList');
		};
	
	// 2. Remover los ítems impares de la lista.
		$('#myList li:even').remove();
	
	// 3. Añadir otro elemento h2 y otro párrafo al último div.module.
		$('<h2> Nuevo elemento h2</h2> <p> Nuevo parrafo </p>')
			.appendTo('div.module');
	
	// 4. Añadir otra opción al elemento select; darle a la opción añadida el valor “Wednesday”.
		$('<option value="wednesday">Wednesday</option>')
			.appendTo('#specials select');
	
	/* 5. Añadir un nuevo div.module a la página después del último; luego añadir una copia de una de
		las imágenes existentes dentro del nuevo div. */
			var $img = $('img:first').clone();
			var $div = $('<div class="module"/>');
			
			// Antes despues del ultimo
			$div.append($img).insertAfter('div.module:last');
			
});
