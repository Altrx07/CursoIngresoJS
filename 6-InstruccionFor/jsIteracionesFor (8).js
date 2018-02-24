function Mostrar()
{
var num = prompt ();
var rta = "Es primo";
var cont;

for (num =1; num <10;){

    if (num % num == 0)
    {
        console.log (num);

        cont ++

        prompt ("Ingrese número");
    }

}
 if (cont >= 3)
{
 alert ("No es Primo");
}
else
{
    alert ("Es Primo");
}


 
}//FIN DE LA FUNCIÓN