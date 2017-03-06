var PruebaFuego = (() => {
	var self = this;

	self.resultadoSumaRecursion = 0;



	var sumarListaFor = (listaNumerica) => {

		resultadoSuma = 0;

		for (var i = 0; i < listaNumerica.length; i++) {
			resultadoSuma += listaNumerica[i]; 	
		}

		return  resultadoSuma;
	}

	var sumarListaWhile =  (listaNumerica) => {

		var resultadoSuma = 0;
		var indice  = 0;

		while (indice < listaNumerica.length){
			resultadoSuma += listaNumerica[indice];
			indice++;
		}

		return resultadoSuma;
	}

	var sumarListaRecursion =  (indice, listaNumerica) => {
		var resultado = 0;
		
		if (indice < listaNumerica.length) {

			self.resultadoSumaRecursion += listaNumerica[indice];
			indice++;

			sumarListaRecursion(indice, listaNumerica);
		}

		return self.resultadoSumaRecursion;

	}



	return {
		sumarListaFor,
		sumarListaWhile,
		sumarListaRecursion


	}
});


var iniciarPruebaFuego = PruebaFuego();
var listaNumerica = [1,2,3,4,5,1,2,3,2,3,7,8,4];

console.log("Suma de lista con FOR: "+ iniciarPruebaFuego.sumarListaFor(listaNumerica) + "\n");

console.log("Suma de lista con WHILE "+ iniciarPruebaFuego.sumarListaFor(listaNumerica) + "\n");

console.log("Suma de lista con RECURSIÓN "+ iniciarPruebaFuego.sumarListaRecursion(0,listaNumerica) + "\n");
