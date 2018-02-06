function Mostrar()
{
var num1;
var num2;
var num3;
var suma;
var dividir

num1 = document.getElementById ("precioUno").value;

num2 = document.getElementById ("precioDos").value;

num3 = document.getElementById ("precioTres").value;

num1 = parseInt (num1);

num2 = parseInt (num2);

num3 = parseInt (num3);

suma = num1 + num2 + num3;

dividir = suma / 3;

alert ("el total es" + suma + "el promedio es" + dividir);


}
