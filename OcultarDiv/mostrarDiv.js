/**
 * @author Beat
 */

$(document).ready(function(){
	
	$('#boton1, #boton2, #boton3, #boton4').click(function(e){
		
		var $tipo = $(e.target).attr('id');
		
		if($tipo == 'boton1') {
			
			$('#div1').show();
			
		}
		else if($tipo == 'boton2') {
			$('#div1').hide();
		}
		else if($tipo == 'boton3') {
			$('#div3').show();
		}
		else if($tipo == 'boton4') {
			$('#div4').show();
		}
	});
});
