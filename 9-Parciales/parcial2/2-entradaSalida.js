//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var num = prompt ("Ingrese importe");
	var suma;
	var multiplicar;
	var dividir;

	num = parseInt (num);

	multiplicar = num * 21;

	dividir = multiplicar /100;

	suma = num + dividir; 

    alert("El importe con IVA es "+ suma);
	
}

