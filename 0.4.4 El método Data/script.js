$(document).ready(function(){
	
	// El método data
	/*$('div').data('keyName', {foo : 'bar'});
	console.log($('div').data('keyName'));*/
	
	
	$('ul li').each(function(){
		var $li = $(this);
		$div = $li.find('div.content');
		
		$li.data('contentDiv', $div);
	});
	
	var $firstLi = $('ul li:first');
	$firstLi.data('contentDiv').html('nuevo contenido');
	
});
