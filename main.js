function loroHabla(){
	var img=document.getElementById("img_loro");
	var check=document.getElementById("Loro");

	if(check.checked)
		img.innerHTML='<img src="img/loro_habla.jpg">';
	else
		img.innerHTML='<img src="img/loro_serio.gif">';
}
function evaluar(){
	var check=document.getElementById("Loro");
	var hora=document.getElementById("hora").value;
	var salida=document.getElementById("salida");
	var mensaje=document.getElementById("mensaje");
	if(check.checked){
		if(hora>=1 && hora<=23){
			if(hora>7 && hora<20){
				salida.innerHTML="0";
				mensaje.innerHTML="No estamos en problemas";
			}else{
				salida.innerHTML="1";
				mensaje.innerHTML="Si estamos en problemas"
			}
		}
		else{
			alert("Error en el ingreso de hora");

		}		
	}
	else{
		salida.innerHTML="0";
		mensaje.innerHTML="No estamos en problemas"
	}

}
