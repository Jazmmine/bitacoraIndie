window.addEventListener("load", function(){	
		var fila = document.getElementById("fila");
		var selector = document.getElementById("selector");			
		selector.addEventListener("change", function(){
			var contenedorFormId = document.getElementById("contenedor");
			if (contenedorFormId != null) {
				object.cerrar();
			}
			var contenedorTask = document.createElement("div");
				contenedorTask.setAttribute("id", "contenedor");
				fila.appendChild(contenedorTask);
			var selectorValor = selector.value;
			console.log(selectorValor);
			object = null;
			switch(selectorValor){
				case "texto":
						object = new FormTexto(contenedorTask);					
						break;
				case "cita":
						object = new FormCita(contenedorTask);
						break;
				case "meme":
						object = new FormMeme(contenedorTask);
						break;
				case "pastillita":
						object = new FormPastillita(contenedorTask);

						break;
			}
			object.imprimirForm();

		});

});

