$(document).ready(function(){
	
	// Establecer propiedades CSS y dimensiones
		/*
		 * Las propiedades Css que incluyen como separador un guión del medio
		 * 	, en JavaScript deben ser transofmadas a su estilo CamelCase. font-size = fontSize
		 *  De las dos formas funcionara.
		 */
	
	// Paar
	$('ul#ulFirst li:odd')
		.html("Par")
		.css('color', 'blue'); 
	
	// Impar
	$('ul#ulSecond li:even')
		.html("Impar")
		.css('color', 'green'); 
		
	// CamelCase
	$('ul#ulSecond').css('fontSize', '30px');
	
	// Establecer multiples propiedades CSS
	$('ul#ulSecond li:odd')
		.html("impar")
		.css({
			'color' : 'red',
			'fontSize' : '10px'
		});
	
	// Establecer valores CSS relativos (fontiSize = fontSize + 14px)
	/*$('h3')
		.html("ESCUCHANDO NIRVANA EN ESTOS MOMENTOS")
		.css({
		'fontSize' : '+=14px',
		'paddingTop' : '+=10px'
		});*/
		
	// Utilizar clases para aplicar estilos CSS
		/*
		 * Método establecedor se debe evitar(ya que, para aplicar estilos a un elemento
		 * 		se puede hacer directamente desde CSS)
		 */
	var $h3 = $('h3');
	$h3.html("ESCUCHANDO NIRVANA EN ESTOS MOMENTOS");
	$h3.addClass('big');
	
	// Dimensiones
		/*
		 * Modificar valores de dimensiones y posicion de un elemento
		 * 
		 */
	$('h2')
		.text("Escuchando Adema")
		.width('1px'); // Establece el ancho de todos los elementos h2
		
	
	
});
