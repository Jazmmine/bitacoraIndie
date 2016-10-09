window.addEventListener("load", function(){	
		var fila = document.getElementById("fila");
		var contenedor = document.createElement("div");
			contenedor.setAttribute("id", "contenedor");
			fila.appendChild(contenedor);
		var contenedorTask = document.getElementById("contenedor");

		var selector = document.getElementById("selector");			
		selector.addEventListener("change", function(){
			var selectorValor = selector.value;
			console.log(selectorValor);
			switch(selectorValor){
				case "texto":
						var formulario = new FormTexto(contenedorTask);
							formulario.imprimirForm();
						break;
				case "cita":
						var formulario = new FormCita(contenedorTask);
							formulario.imprimirForm();
						break;
				case "meme":
						var formulario = new FormMeme(contenedorTask);
							formulario.imprimirForm();
						break;
				case "pastillita":
						var formulario = new FormPastillita(contenedorTask);
							formulario.imprimirForm();
						break;
			}
		});

});

