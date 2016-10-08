	// <section>
	// 	<div class="container text-center form-group">
	// 		<div class="row">
	// 			<select name="selector" id="selector" class="form-control">
	// 				<option value="opciones">Seleccionar Opcion</option>
	// 				<option value="texto">Texto</option>
	// 				<option value="cita">Cita</option>
	// 				<option value="meme">Meme</option>
	// 				<option value="pastillita">Pastillita</option>
	// 			</select>
	// 		</div>
	// 	</div>
	// </section>

window.addEventListener("load", function(){
		var selector = document.getElementById("selector");
		var fila = document.getElementById("fila");
		selector.addEventListener("change", function(){
			var selectorValor = selector.value;
			console.log(selectorValor);
			switch(selectorValor){
				case "texto":
						texto();
						break;
				case "cita":
					
						break;
				case "meme":
						
						break;
				case "pastillita":
					
						break;
			}
		});

		function texto(){ //si le pasas parametro no sera muy reutilizado.
			var contenedor = document.createElement("div");
			contenedor.setAttribute("id", "contenedor");
			fila.appendChild(contenedor);

			var textoArea = document.createElement("textarea");
				textoArea.classList.add("class", "form-control");
				textoArea.setAttribute("rows", "3");
				textoArea.setAttribute("placeholder", "Texto");
				contenedor.appendChild(textoArea);

			var textoTitulo = document.createElement("input");
				textoTitulo.classList.add("class", "form-control");
				textoTitulo.setAttribute("type", "text");
				textoTitulo.setAttribute("placeholder", "Titulo");
				contenedor.appendChild(textoTitulo);

			var textoBtnPublicar = document.createElement("input");
				textoBtnPublicar.classList.add("class", "btn");
				textoBtnPublicar.classList.add("class", "btn-default");
				textoBtnPublicar.setAttribute("type", "button");
				textoBtnPublicar.setAttribute("value", "Publicar");
				//textoBtnPublicar.createTextNode("Publicar");
				contenedor.appendChild(textoBtnPublicar);

			var textoBtnCerrar = document.createElement("input");
				textoBtnCerrar.classList.add("class", "btn");
				textoBtnCerrar.classList.add("class", "btn-default");
				textoBtnCerrar.setAttribute("type", "button");
				textoBtnPublicar.setAttribute("value", "Cerrar");
				//textoBtnEliminar.createTextNode("Eliminar");
				contenedor.appendChild(textoBtnCerrar);
		}
});