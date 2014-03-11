$(document).ready(function(){
	
	// Seleción de elementos
	
	// por ID
	$('#articulo').html("<p> Usando la selección de (#id) </p>");
	
	// por class
	$('.classArti1').html("<p> Usando la selección de (.class) </p>");
	
		// ó de también de esta forma
		$('article.classArti2').html("<p> Otra forma de selección de class (article.classArti) </p>");
		
	// por atributo, no muy usual ya que es muy lento
	//$('input[name=first_name]');
	// $("a[rel$='thinger]"); // encontrar todos los <a> cuyo atrbuto rel termian en "thinger"
	
	// por elementos en forma de selector CSS
	$('#contenedor ul.hola li').text("Hola");
	
	/*
	 * Pseudo-selectores
	 * $('a.external:first'); Selecciona el primer elemento <a>
	 * 
	 * $('tr:odd'); selecciona todos los elementos <tr> par de una tabla
	 * $('tr:even'); selecciona todos los elementos <tr> impar de una tabla
	 * 
	 * $('#miForm:input'); selecciona todos los elementos del tipo input dentro del formulario #myForm
	 * 
	 * $('div:visible'); selecciona todos los divs visibles
	 * $('div:hidden'); selecciona todos los divs no visibles
	 * 
	 * $('div:gt(2)'); selecciona todos los divs excepto los tres primeros
	 * 
	 * $('div:animated') selecciona todos los divs actualmente animados
	 */
	
	// Evalur si una seleccion posee elementos (true si contiene)
	if($('div#contenedor').length)
	{
		console.log("Si contiene elementos");
	}
	
	/*
	 * Refinamiento de selecciones
	 * 
	 * $('div.foo').has('p'); el elemento div.foo contieen elementos <p>
	 *
	 * $('h1').not('.bar'); el elemento h1 no posse la clase 'bar'
	 * 
	 * $('ul li').filter('.current'); un item de una lista desordenada que posee la clase 'current'
	 * 
	 * $('ul li').first(); el primer item de una lista desordanada
	 * 
	 * $('ul li').eq(5); el sexto item de una lista desordenada
	 * 
	 * $('#contenedor').find(3); 
	 */
});

/*
 * Existen 2 formas más de inicializar el documento en JQuery 
 * 
	 * $(function(){
	 * 	
	 * });
 * 
 * 	Pasar una funcion nombrada en lugar de una funcion anónima
 * 
	 * function readyFn()
	 * {
	 * 	 // Código....
	 * }
	 * $(document).ready(readyFn);
 * 
 */
