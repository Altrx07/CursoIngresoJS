/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 var edad;
 var sexo;
 var estado;
 var Sueldo;
 var legajo;
 var Nacionalidad;

 edad = prompt ("Ingrese su edad");

 edad = parseInt (edad);

 while (isNaN(edad)|| edad <18 ||edad >90 )
 {
      edad = prompt ("Ingrese su edad");

      edad = parseInt (edad)
 }
document.getElementById ("Edad").value = edad;
 
 sexo = prompt ("Ingrese F para Femenino o M para Masculino");

 sexo = parseInt (sexo);

 if (isNaN(sexo == 'F'|| sexo =='M'))
 {
 document.getElementById ("Sexo").value = sexo;
  } 
  else (sexo != 'F'|| sexo != 'M')
  
  prompt ("Indique Femenino con F o Masculino con M");
 
 estado = prompt("Indique si esta soltero/a con 1, si esta casado/a con 2, si esta separado/a con 3 o si es viudo/a con 4");
 
 estado = parseInt (estado);
 
 switch (estado)
 {
     case "soltero/a": document.getElementById ("EstadoCivil").value = estado;

     case "casado/a": document.getElementById ("EstadoCivil").value = estado;

     case "separado/a": document.getElementById ("EstadoCivil").value = estado;

     case "viudo/a": document.getElementById ("EstadoCivil").value = estado;

 }
 }
 
