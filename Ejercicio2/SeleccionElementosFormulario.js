$(document).ready(function(){
	
	// Selección de elementos de un formulario
	/*
	 * :button	elementos <button> y con el atributo type='button'
	 * :checkbox elementos <input> con el atributo type='checkbox'
	 * :checked elementos <input> del tipo checkbox seleccionados
	 * :file elementos <input> con el atributo type='file'
	 * :image
	 * :password
	 * :radio
	 * :reset
	 * submit
	 * text
	 * 
	 * :disabled elementos del formulario que están deshabitados
	 * :enabled elementos del forulario que están habilitados.
	 *
	 * :input elementos <input>, <textarea> y <select>
	 * 
	 * :text elementos <options> que están seleccionados
	 */
	
	// Obtiene todos los elementos inputs dentro del formulario #myForm, encadenamiento
	//  y formateo del código encadenado
	var $longitud = $('#miForm :input')
		.css("border", "3px solid blue")
		.length;
	console.log("Elementos dentro del form: " + $longitud);
	
	// Restablecer la seleccion.... (.end())
		$('div')
			.find('h3')
			.eq(0)
				.html("h3 segundo")
			.end()
			.eq(2)
				.html("h3 tercer");
	

});
