function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
//respuesta = confirm("Ingresar numero");

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

respuesta = true

while (respuesta == true)
{
	numero = prompt ("Ingrese Digitos");

	console.log (numero)

	if (numero == null)
	{
		break
	}

	else if (isNaN (numero) == true)
//if(isNaN(numero))
{
	alert("Entrada incorrecta, ingrese un número");
	continue
}
numero = parseInt (numero);

acumulador = acumulador + numero;

contador ++

respuesta = confirm("¿ Seguir ingresando números ?")

console.log (contador)
}

}//FIN DE LA FUNCIÓN