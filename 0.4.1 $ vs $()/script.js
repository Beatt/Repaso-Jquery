/*
 * El núcleo de JQuery
 * 	$ vs $()
 * 
 * Hasta el momento se ha trabajado con los métodos de del objeto JQuery,
 * 	por ejemplo: $('h1').remove(), clone().... ETC'''
 * 	Dichos métodos son parte del espacio de nombres $.fn, o del prototipo
 * 	Sin embargo, existen métodos que son parte del espacio de nombres de $
 * 		y se consideran como métodos del nucleo de JQuery.
 * 
 * Estas distinciones pueden ser bastantes confusas para usuarios nuevos. Para evitar la confusión, debe
	recordar estos dos puntos:
		*los métodos utilizados en selecciones se encuentran dentro del espacio de nombres $.fn, y au-
		tomáticamente reciben y devuelven una selección en sí;
		
		*métodos en el espacio de nombres $ son generalmente métodos para diferentes utilidades, no
		trabajan con selecciones, no se les pasa ningún argumento y el valor que devuelven puede variar.
 */