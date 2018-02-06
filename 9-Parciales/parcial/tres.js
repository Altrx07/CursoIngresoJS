function Mostrar()
{
var num1;
var num2;
var multiplicar

num1 = document.getElementById ("alrgo").value;

num2 = document.getElementById ("ancho").value;

num1 = parseInt (num1);

num2 = parseInt (num2);

multiplicar = (num1 *2 + num2 *2)*3;

alert ("Resultado " + multiplicar);
 
}
