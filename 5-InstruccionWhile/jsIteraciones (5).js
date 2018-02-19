function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (sexo != "f" && sexo != "m")
{
    sexo = prompt ("Error");
    break;

    sexo = prompt ("Femenino");
    break;

    sexo = prompt ("Masculino");
    break

}


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN