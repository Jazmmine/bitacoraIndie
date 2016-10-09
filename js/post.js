function Post(contenedor,titulo,texto,horaPub){
	this.titulo = titulo;
	this.texto = texto;
	this.horaPub = horaPub;
	this.publicar = function(){
	//crear div y adicionar al content
		var divPublicar = document.createElement("div");
			divPublicar.classList.add("center-block", "div-post");
			contenedor.appendChild(divPublicar);
			divPublicar.innerHTML = titulo + texto + horaPub;
			console.log(divPublicar);		
	}
}

function PostTexto(contenedor,titulo,texto,horaPub){
	Post.call(this, contenedor,titulo,texto, horaPub);
}

function PostCita(contenedor,titulo,texto,horaPub,autor){
	this.autor = autor;
	Post.call(this, contenedor,titulo,texto, horaPub);
	this.publicar = function(){
		var divPublicar = document.createElement("div");
			divPublicar.classList.add("center-block", "div-post");
			contenedor.appendChild(divPublicar);
			divPublicar.innerHTML =  texto + autor + horaPub;
			console.log(divPublicar);	
	}
}

function PostMeme(contenedor,titulo,url,horaPub){
	Post.call(this, contenedor,titulo,url, horaPub);
	this.publicar = function(){
		var divPublicar = document.createElement("div");
			divPublicar.classList.add("center-block", "div-post");
			contenedor.appendChild(divPublicar);
		var imgPublicar = document.createElement("img");
			imgPublicar.setAttribute("src",url);
			imgPublicar.classList.add("tamanio-img");
			divPublicar.appendChild(imgPublicar);
		var divHora = document.createElement("div");
			divHora.classList.add("center-block");
			divPublicar.appendChild(divHora);
			divHora.innerHTML = horaPub;			
			console.log(imgPublicar);
			//divPublicar.innerHTML =  texto + horaPub;
			console.log(divPublicar);	
	}
}

function PostPastillita(contenedor,titulo,texto,horaPub,color){
	Post.call(this, contenedor,titulo,texto, horaPub);
	this.publicar = function(){
	//crear div y adicionar al content
		var divPublicar = document.createElement("div");
			divPublicar.classList.add("center-block", "div-post");
			divPublicar.style.backgroundColor = color;
			contenedor.appendChild(divPublicar);
			divPublicar.innerHTML = titulo + texto + horaPub;
			console.log(divPublicar);		
	}
}