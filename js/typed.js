  var typed = new Typed('.typed', {
	strings: [
		'<Joaquin Brizuela/>',
	],
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 400, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'css', // 'html' o 'null' para texto sin formato
});