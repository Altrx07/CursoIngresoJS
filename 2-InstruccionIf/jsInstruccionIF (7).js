function Mostrar()
{
//tomo la edad  

	var edad;
    var estado;

    edad = document.getElementById ("edad").value;
    estado = document.getElementById ("estadoCivil").value;

    if( edad <18 && estado != soltero )
    {

alert ("Es muy pequeño para NO estar soltero");
    }
}//FIN DE LA FUNCIÓN