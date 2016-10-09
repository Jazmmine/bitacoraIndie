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
		var fila = document.getElementById("fila");
		var contenedor = document.createElement("div");
			contenedor.setAttribute("id", "contenedor");
			fila.appendChild(contenedor);
		var contenedorTask = document.getElementById("contenedor");
		var saludoUsuario = document.getElementById("saludo-usuario");
		var divUsuario = document.createElement("div");
			saludoUsuario.appendChild(divUsuario);		
		var inputIngresarUsuario = document.createElement("input");
			inputIngresarUsuario.classList.add("class", "form-control");
			inputIngresarUsuario.setAttribute("type", "text");
			inputIngresarUsuario.setAttribute("id", "ingresar-usuario");
			inputIngresarUsuario.setAttribute("placeholder", "Usuario");
			divUsuario.appendChild(inputIngresarUsuario);
		var btnIngresarUsuario = document.createElement("input");
			btnIngresarUsuario.classList.add("class", "btn");
			btnIngresarUsuario.classList.add("class", "btn-default");
			btnIngresarUsuario.setAttribute("type", "button");
			btnIngresarUsuario.setAttribute("value", "Ingresar");
			divUsuario.appendChild(btnIngresarUsuario);	
			btnIngresarUsuario.addEventListener("click", function(){
			usuario();
		});

		var selector = document.getElementById("selector");			
		selector.addEventListener("change", function(){
			var selectorValor = selector.value;
			console.log(selectorValor);
			switch(selectorValor){
				case "texto":
						texto();
						break;
				case "cita":
						cita();
						break;
				case "meme":
						meme();
						break;
				case "pastillita":
						pastillita();
						break;
			}
		});

//usuario
		function usuario(){
			var usuario = document.createElement("div");
			usuario.classList.add("id", "caja-usuario");
			divUsuario.innerHTML = "";
			divUsuario.appendChild(usuario);
			usuario.innerHTML = inputIngresarUsuario.value;
		}

//formulario
		function texto(){ //si le pasas parametro no sera muy reutilizado.
			var textoTitulo = document.createElement("input");
				textoTitulo.classList.add("class", "form-control");
				textoTitulo.setAttribute("type", "text");
				textoTitulo.setAttribute("placeholder", "Titulo");
				textoTitulo.setAttribute("id","text-titulo");
				contenedor.appendChild(textoTitulo);
			var textoArea = document.createElement("textarea");
				textoArea.classList.add("class", "form-control");
				textoArea.setAttribute("rows", "3");
				textoArea.setAttribute("placeholder", "Texto");
				textoArea.setAttribute("id","text-area");
				contenedor.appendChild(textoArea);
			var textoBtnPublicar = document.createElement("input");
				textoBtnPublicar.classList.add("class", "btn");
				textoBtnPublicar.classList.add("class", "btn-default");
				textoBtnPublicar.setAttribute("type", "button");
				textoBtnPublicar.setAttribute("value", "Publicar");
				textoBtnPublicar.setAttribute("id", "texto-btn-publicar");
				textoBtnPublicar.addEventListener("click", function(){
				var contenedorPost = document.getElementById("contenedor-post");
				var titulo = document.getElementById("text-titulo").value;
				var texto = document.getElementById("text-area").value;
				var horaPub = obtenerTiempoActual();
				var publicacion = new PostTexto(contenedorPost, titulo, texto, horaPub);
					publicacion.publicar();

			});
				//textoBtnPublicar.createTextNode("Publicar");
				contenedor.appendChild(textoBtnPublicar);
			var textoBtnCerrar = document.createElement("input");
				textoBtnCerrar.classList.add("class", "btn");
				textoBtnCerrar.classList.add("class", "btn-default");
				textoBtnCerrar.setAttribute("type", "button");
				textoBtnCerrar.setAttribute("value", "Cerrar");
				//textoBtnEliminar.createTextNode("Eliminar");
				contenedor.appendChild(textoBtnCerrar);
		}

		function cita(){
			var citaArea = document.createElement("textarea");
				citaArea.classList.add("class", "form-control");
				citaArea.setAttribute("rows", "3");
				citaArea.setAttribute("id", "texto-cita")
				citaArea.setAttribute("placeholder", "Cita");
				contenedor.appendChild(citaArea);
			var citaAutor = document.createElement("input");
				citaAutor.classList.add("class", "form-control");
				citaAutor.setAttribute("type", "text");
				citaAutor.setAttribute("id","input-autor")
				citaAutor.setAttribute("placeholder", "Autor");
				contenedor.appendChild(citaAutor);	
			var citaBtnPublicar = document.createElement("input");
				citaBtnPublicar.classList.add("class", "btn");
				citaBtnPublicar.classList.add("class", "btn-default");
				citaBtnPublicar.setAttribute("type", "button");
				citaBtnPublicar.setAttribute("value", "Publicar");
				contenedor.appendChild(citaBtnPublicar);
				citaBtnPublicar.addEventListener("click", function(){
					var contenedorPost = document.getElementById("contenedor-post");					
					var texto = document.getElementById("texto-cita").value;
					var autor = document.getElementById("input-autor").value;
					var horaPub = obtenerTiempoActual();
					var titulo = "";
					var publicacion = new PostCita(contenedorPost, titulo, texto, horaPub, autor);
						publicacion.publicar();					
				});
			var citaBtnCerrar = document.createElement("input");
				citaBtnCerrar.classList.add("class", "btn");
				citaBtnCerrar.classList.add("class", "btn-default");
				citaBtnCerrar.setAttribute("type", "button");
				citaBtnCerrar.setAttribute("value", "Cerrar");
				contenedor.appendChild(citaBtnCerrar);	
		}

		function meme(){
			var memeArea = document.createElement("textarea");
				memeArea.classList.add("class", "form-control");
				memeArea.setAttribute("rows", "3");
				memeArea.setAttribute("placeholder", "Link");
				memeArea.setAttribute("id","meme-area");
				contenedor.appendChild(memeArea);
			var memeBtnPublicar = document.createElement("input");
				memeBtnPublicar.classList.add("class", "btn");
				memeBtnPublicar.classList.add("class", "btn-default");
				memeBtnPublicar.setAttribute("type", "button");
				memeBtnPublicar.setAttribute("value", "Publicar");
				memeBtnPublicar.addEventListener("click", function(){
					var contenedorPost = document.getElementById("contenedor-post");					
					var texto = document.getElementById("meme-area").value;
					var horaPub = obtenerTiempoActual();
					var titulo = "";
					var publicacion = new PostMeme(contenedorPost, titulo, texto, horaPub);
						publicacion.publicar();					
				});
				contenedor.appendChild(memeBtnPublicar);
			var memeBtnCerrar = document.createElement("input");
				memeBtnCerrar.classList.add("class", "btn");
				memeBtnCerrar.classList.add("class", "btn-default");
				memeBtnCerrar.setAttribute("type", "button");
				memeBtnCerrar.setAttribute("value", "Cerrar");
				contenedor.appendChild(memeBtnCerrar);	
		}

		function pastillita(){
			var pastillitaTitulo = document.createElement("input");
				pastillitaTitulo.classList.add("class", "form-control");
				pastillitaTitulo.setAttribute("type", "text");
				pastillitaTitulo.setAttribute("placeholder", "Titulo");
				pastillitaTitulo.setAttribute("id", "pastillita-titulo");
				contenedor.appendChild(pastillitaTitulo);
			var pastillitaArea = document.createElement("textarea");
				pastillitaArea.classList.add("class", "form-control");
				pastillitaArea.setAttribute("rows", "3");
				pastillitaArea.setAttribute("placeholder", "Ser o no ser...");
				pastillitaArea.setAttribute("id", "pastillita-area");
				contenedor.appendChild(pastillitaArea);
			var pastillitaBtnPublicar = document.createElement("input");
				pastillitaBtnPublicar.classList.add("class", "btn");
				pastillitaBtnPublicar.classList.add("class", "btn-default");
				pastillitaBtnPublicar.setAttribute("type", "button");
				pastillitaBtnPublicar.setAttribute("value", "Publicar");
				pastillitaBtnPublicar.addEventListener("click", function(){
				var contenedorPost = document.getElementById("contenedor-post");
				var titulo = document.getElementById("pastillita-titulo").value;
				var texto = document.getElementById("pastillita-area").value;
				var horaPub = obtenerTiempoActual();
				var publicacion = new PostPastillita(contenedorPost, titulo, texto, horaPub);
					publicacion.publicar();

			});
				contenedor.appendChild(pastillitaBtnPublicar);
			var pastillitaBtnCerrar = document.createElement("input");
				pastillitaBtnCerrar.classList.add("class", "btn");
				pastillitaBtnCerrar.classList.add("class", "btn-default");
				pastillitaBtnCerrar.setAttribute("type", "button");
				pastillitaBtnCerrar.setAttribute("value", "Cerrar");
				contenedor.appendChild(pastillitaBtnCerrar);
		}

//publicaciones


		function contenedorPostTexto(){
		var contenedorPost = document.getElementById("contenedor-post");
		var valorTextAreaTexto = document.getElementById("text-area").value;	
		var valorTituloTexto = document.getElementById("text-titulo").value;
		var divPost = document.createElement("div");	
			divPost.classList.add("class", "text-center");
			contenedorPost.appendChild(divPost);
		 	divPost.innerHTML = valorTituloTexto + "<br/>" + valorTextAreaTexto;
		}

	
});