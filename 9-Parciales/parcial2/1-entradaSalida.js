//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var num1;
	var multiplicar;

	num1 = document.getElementById ("lado").value;

	num1 = parseInt (num1);

	multiplicar = num1 * 3;

	alert ("El perimetro es de" + multiplicar); 
	
}

