$(document).ready(function(){
	
	/* Métodos utilitarios
		 Son de gran ayuda nos permite llevar a cabo tareas retunarias de programación. */
	
		// $.trim Remueve los espacios en blanco del principio y final
		var $espaciosBlanco = $.trim(' Trim() elímina espacios en blanco    ');
		$('div')
			.text($espaciosBlanco);
			
		// $each itera con los elementos
		$('div').prepend('<p> utilizando $each </p>');
		$.each(["hola", "Mundo", "Lolllll"], function(indice, elem){
			$('div').append("<br />indice: " + indice + " elemento: " + elem);
		});
		
		/* $inArray Devuelve el 
			índice de un valor en un vector, o -1 si el valor no se encuentra en el vector */
		var myArray = [1, 3, 4 , 5];
		
			//   Encontrar, array, fromIndex
		if($.inArray(4, myArray, 1) != -1)
		{
			console.log('valor encontrado');
		}
		
		/* .extend cambia la propiedad del primer objeto utilizando las 
		 * 	propiedades de los subsecuentes objetos */
		var firstObject = {foo: 'bar', a : 'b'};
		var secondObject = {foo: 'baz'};
		
		var newObject = $.extend(firstObject, secondObject);
		console.log("Primer objeto: " + firstObject.foo);
		console.log("Nuevo objeto: " + newObject.foo);
		
		/*
		 * $.proxy Devuelve una función que siempre se ejecutará en el alcance (scope) provisto — en otras
				palabras, establece el significado de this (incluido dentro de la función) 
				como el segundo argumento.
		 */
		var myFunction = function(){
			console.log(this);
		};
		
		var myObject = {foo : 'bar'};
		
		myFunction(); // devuelve el objeto window
		
		var myProxyFunction = $.proxy(myFunction, myObject);
		myProxyFunction(); // Devuelve el objeto myObject
		
		/*
		 * myProxyFunction = {
		 *	
		 * 	var myObject = {foo : 'bar'};
		 * 	
		 * 	function() {
		 * 		console.log(this);
		 * 	}
		 * 		
		 * };
		 */
		
		/*
		 * Si se posee un objeto con métodos, es posible pasar dicho objeto y el nombre de un método para
				devolver una función que siempre se ejecuta en el alcance de dicho objeto.
				var myObject = {
				myFn : function() {
				console.log(this);
				}
				};
				$('#foo').click(myObject.myFn); // registra el elemento DOM #foo
				$('#foo').click($.proxy(myObject, 'myFn')); // registra myObject
		 */
		
		
});// Fin document
