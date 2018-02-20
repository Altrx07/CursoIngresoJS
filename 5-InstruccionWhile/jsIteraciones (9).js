function Mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var max =0;
	var min;
	var primera = true;
	var num;
	var acumulador;

	while(respuesta!='no')
	{
		num = prompt ("Ingrese numeros");

		num = parseInt (num);

		console.log (num)

		acumulador = acumulador + num;

        contador ++

        respuesta = confirm("Quiere poner mas numeros ?")

		if (respuesta !='si')
		{
			continue
		}

	if (primera)
	{
		primera = false;

		max = num;

		min = num;
	}
	else
	{

	}
	}




}//FIN DE LA FUNCIÓN