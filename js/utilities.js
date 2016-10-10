function obtenerTiempoActual (){
	var datoTiempo = new Date();
	var dia = datoTiempo.getDate();
	var mes = datoTiempo.getMonth();
	var anio = datoTiempo.getFullYear();
	var hora = datoTiempo.getHours();
	var minuto = datoTiempo.getMinutes();
	var segundo = datoTiempo.getSeconds();
	return dia + "/" + mes + "/" + anio + "(" + hora + ":"+ minuto + ":"+ segundo + ")"             
}

/*
function limpiarHijosDeForm(formulario){
	console.log("limpiarHijosDeForm");
	while(formulario.hasChildNodes()){
		formulario.removeChild(formulario.firstChild);
	}
	/*while (node.hasChildNodes()) {
    node.removeChild(node.firstChild);

}*/
