//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var num1;
    var num2;
    var multiplicar

num1 = document.getElementById ("largo").value;

num2 = document.getElementById ("ancho").value;

num1 = parseInt (num1);

num2 = parseInt (num2);

multiplicar = (num1 *2 + num2 *2)*6;

alert ("Resultado " + multiplicar);
	
}

