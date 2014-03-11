$(document).ready(function(){
	
	// Comprobación de tipos
	var myValue = [1, 2, 3];
	
	/* Utilizar el operador typeof de javascript para comprobar tipos primitivos */
	console.log($.isFunction(myValue));
	console.log($.isPlainObject(myValue));
	console.log($.isArray(myValue));
	console.log($.isNumeric(16));
	console.log($.isString("LOL"));
});// Fin document
