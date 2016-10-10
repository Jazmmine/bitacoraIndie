function Form(contenedorForm){
	this.imprimirForm = function(){
		var inputTitulo = document.createElement("input");
			inputTitulo.classList.add("form-control","center-block");
			inputTitulo.setAttribute("type", "text");
			inputTitulo.setAttribute("placeholder", "Titulo");
			inputTitulo.setAttribute("id","text-titulo");
			contenedorForm.appendChild(inputTitulo)
		var textArea = document.createElement("textarea");
			textArea.classList.add("form-control","center-block");
			textArea.setAttribute("rows", "3");
			textArea.setAttribute("placeholder", "Texto");
			textArea.setAttribute("id","text-area");
			contenedorForm.appendChild(textArea);
		var btnPublicar = document.createElement("input");
			btnPublicar.classList.add("btn", "btn-default");
			btnPublicar.setAttribute("type", "button");
			btnPublicar.setAttribute("value", "Publicar");
			btnPublicar.setAttribute("id", "texto-btn-publicar");
			btnPublicar.addEventListener("click", function(){
				var contenedorPost = document.getElementById("contenedor-post");
				var titulo = document.getElementById("text-titulo").value;
				var texto = document.getElementById("text-area").value;
				var horaPub = obtenerTiempoActual();
				var publicacion = new PostTexto(contenedorPost, titulo, texto, horaPub);
					publicacion.publicar();
			});
			//BtnPublicar.createTextNode("Publicar");
			contenedorForm.appendChild(btnPublicar);
		var btnCerrar = document.createElement("input");
			btnCerrar.classList.add("btn", "btn-default");
			btnCerrar.setAttribute("type", "button");
			btnCerrar.setAttribute("value", "Cerrar");
			btnCerrar.setAttribute("id","texto-btn-cerrar")
			btnCerrar.addEventListener("click", this.cerrar);
			//textoBtnEliminar.createTextNode("Eliminar");
			contenedorForm.appendChild(btnCerrar);
	}
	this.cerrar = function(){
		contenedorForm.parentElement.removeChild(contenedorForm);
		/*Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}*/ 
	}
}

function FormTexto(contenedorForm){
	Form.call(this,contenedorForm);
}

function FormCita(contenedorForm){
	Form.call(this,contenedorForm);
	this.imprimirForm = function(){
		var textArea = document.createElement("textarea");
			textArea.classList.add("form-control","center-block");
			textArea.setAttribute("rows", "3");
			textArea.setAttribute("placeholder", "Texto");
			textArea.setAttribute("id","text-area");
			contenedorForm.appendChild(textArea);
		var inputAutor = document.createElement("input");
			inputAutor.classList.add("form-control");
			inputAutor.setAttribute("type", "text");
			inputAutor.setAttribute("placeholder", "Autor");
			inputAutor.setAttribute("id","text-autor");
			contenedorForm.appendChild(inputAutor)
		var btnPublicar = document.createElement("input");
			btnPublicar.classList.add("btn", "btn-default");
			btnPublicar.setAttribute("type", "button");
			btnPublicar.setAttribute("value", "Publicar");
			btnPublicar.setAttribute("id", "texto-btn-publicar");
			btnPublicar.addEventListener("click", function(){
				var contenedorPost = document.getElementById("contenedor-post");
				var titulo = "";
				var texto = document.getElementById("text-area").value;
				var autor = document.getElementById("text-autor").value;
				var horaPub = obtenerTiempoActual();
				var publicacion = new PostCita(contenedorPost, titulo, texto, horaPub,autor);
					publicacion.publicar();
			});
			//BtnPublicar.createTextNode("Publicar");
			contenedorForm.appendChild(btnPublicar);
		var btnCerrar = document.createElement("input");
			btnCerrar.classList.add("btn", "btn-default");
			btnCerrar.setAttribute("type", "button");
			btnCerrar.setAttribute("value", "Cerrar");
			btnCerrar.addEventListener("click", this.cerrar);
			//textoBtnEliminar.createTextNode("Eliminar");
			contenedorForm.appendChild(btnCerrar);
	}
}

function FormMeme(contenedorForm){
	Form.call(this,contenedorForm);
	this.imprimirForm = function(){
		var textArea = document.createElement("textarea");
			textArea.classList.add("form-control","center-block");
			textArea.setAttribute("rows", "3");
			textArea.setAttribute("placeholder", "Texto");
			textArea.setAttribute("id","text-area");
			contenedorForm.appendChild(textArea);
		var btnPublicar = document.createElement("input");
			btnPublicar.classList.add("btn", "btn-default");
			btnPublicar.setAttribute("type", "button");
			btnPublicar.setAttribute("value", "Publicar");
			btnPublicar.setAttribute("id", "texto-btn-publicar");
			btnPublicar.addEventListener("click", function(){
				var contenedorPost = document.getElementById("contenedor-post");
				var titulo = "";
				var texto = document.getElementById("text-area").value;
				var horaPub = obtenerTiempoActual();
				var publicacion = new PostMeme(contenedorPost, titulo, texto, horaPub);
					publicacion.publicar();
			});
			//BtnPublicar.createTextNode("Publicar");
			contenedorForm.appendChild(btnPublicar);
		var btnCerrar = document.createElement("input");
			btnCerrar.classList.add("btn", "btn-default");
			btnCerrar.setAttribute("type", "button");
			btnCerrar.setAttribute("value", "Cerrar");
			btnCerrar.addEventListener("click", this.cerrar);
			//textoBtnEliminar.createTextNode("Eliminar");
			contenedorForm.appendChild(btnCerrar);
	}	
}

function FormPastillita(contenedorForm){
	Form.call(this,contenedorForm);
	this.imprimirForm = function(){
		var inputTitulo = document.createElement("input");
			inputTitulo.classList.add("form-control","center-block");
			inputTitulo.setAttribute("type", "text");
			inputTitulo.setAttribute("placeholder", "Titulo");
			inputTitulo.setAttribute("id","text-titulo");
			contenedorForm.appendChild(inputTitulo);
		var textArea = document.createElement("textarea");
			textArea.classList.add("form-control");
			textArea.setAttribute("rows", "3");
			textArea.setAttribute("placeholder", "Texto");
			textArea.setAttribute("id","text-area");
			contenedorForm.appendChild(textArea);
		var inputColor = document.createElement("input");
			inputColor.classList.add("form-control");
			inputColor.setAttribute("type", "color");
			inputColor.setAttribute("id","input-color");
			contenedorForm.appendChild(inputColor);
		var btnPublicar = document.createElement("input");
			btnPublicar.classList.add("btn", "btn-default");
			btnPublicar.setAttribute("type", "button");
			btnPublicar.setAttribute("value", "Publicar");
			btnPublicar.setAttribute("id", "texto-btn-publicar");
			btnPublicar.addEventListener("click", function(){
				var contenedorPost = document.getElementById("contenedor-post");
				var titulo = document.getElementById("text-titulo").value;
				var texto = document.getElementById("text-area").value;
				var horaPub = obtenerTiempoActual();
				var color = document.getElementById("input-color").value;
				var publicacion = new PostPastillita(contenedorPost, titulo, texto, horaPub,color);
					publicacion.publicar();
			});
			//BtnPublicar.createTextNode("Publicar");
			contenedorForm.appendChild(btnPublicar);
		var btnCerrar = document.createElement("input");
			btnCerrar.classList.add("btn", "btn-default");
			btnCerrar.setAttribute("type", "button");
			btnCerrar.setAttribute("value", "Cerrar");
			btnCerrar.addEventListener("click", this.cerrar);
			//textoBtnEliminar.createTextNode("Eliminar");
			contenedorForm.appendChild(btnCerrar);
	}
}

