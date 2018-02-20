function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var num;
	var respuesta='si';

while (respuesta == "Si")
{
	contador ++;

	num = prompt("Ingrese numeros");

	num = parseInt (num);

	while (isNaN (num))
	{
		num = prompt("Ingrese numeros");

		num = parseInt(num);
	}

	if (num >0)
	{
		positivo += num;
	}
	else
	{
		if (num !=0)
		
		negativo *= num;
	}
}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN