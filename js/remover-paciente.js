var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("click", function(event) {
	event.target.parentNode.classList.add("fadeOut");

	setTimeout(function() {
		if (event.target.tagName == "TD") {
			event.target.parentNode.remove();
		}
	}, 500);
	//event.target.parentNode.remove();
})