//Traduce a c�digo JavaScript las variables del ejemplo anterior y deja tu c�digo en los comentarios.
let nombre = "Damian";
let apellido = "Arenales"; 
let usuarioPlatzi = "damian14";
let edad = 31;
let correoElectronico = "damianonepiece@gmail.com";
let mayorEdad = true;
let dineroAhorrado = 3500000;
let deuda = 2850000;
//Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
//Nombre completo (nombre y apellido)
//Dinero real (dinero ahorrado menos deudas)
var nombreCompleto = nombre +" "+apellido;
var dineroReal = dineroAhorrado - deuda;
console.log("El nombre completo es "+ nombreCompleto +" y tiene"
+"la siguiente suma de dinero "+ dineroReal);

//Convierte el siguiente c�digo en una funci�n, pero, cambiando cuando sea necesario las variables 
//constantes por par�metros y argumentos en una funci�n:
const name1 = "Juan David";
const lastname = "Castro Gallego";
const completeName = name1 + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function informacion(nombre,apellido,apodo){
    console.log("Mi nombre es " + nombre+" "+apellido + ", pero prefiero que me digas " + apodo + ".");
}

informacion("Damian","Arenales","Damian1414");
//2?? Replica el comportamiento del siguiente c�digo que usa la sentencia switch utilizando if, else y else if:
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un a�o");
       break;
   case "ExpertPlus":
       console.log("T� y alguien m�s pueden tomar TODOS los cursos de Platzi durante un a�o");
       break;
}

if (tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}else if(tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un a�o");
}else if(tipoDeSuscripcion === "ExpertPlus"){
    console.log("T� y alguien m�s pueden tomar TODOS los cursos de Platzi durante un a�o");
}else{
    console.log("No cuentas a�n con ning�n suscripci�n");
}

// Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
//Respuesta
var valor=0;
while (valor < 5){
    console.log("El valor de i es"+ valor);
    valor =valor+1;
}

var valorDes=11;
while (valorDes >= 2){
    valorDes =valorDes-1;
    console.log("El valor de i es"+ valorDes);
    
}

//3?? Escribe un c�digo en JavaScript que le pregunte a los usuarios cu�nto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
//?? Pista: puedes usar la funci�n prompt de JavaScript.
var respuesta = prompt("�Cu�nto es 2+2?");
if(respuesta == 4){
    console.log("Felicitaciones");
}else{
    console.log("Error");
}


/**
 * 
2?? Crea una funci�n que pueda recibir cualquier array como par�metro e imprima su primer elemento.
3?? Crea una funci�n que pueda recibir cualquier array como par�metro e imprima todos sus 
elementos uno por uno (no se vale imprimir el array completo).
4?? Crea una funci�n que pueda recibir cualquier objeto como par�metro 
e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
 * 
 */

//2
var arreglos=["uno","dos","tres","cuatro"];
function imprimirArreglo(arreglos){
    var dev =arreglo.filter(function(arreglo){
        return arreglo.indexOf(0);
    });
    console.log("El primer elmento del arreglo es : "+ dev);

}
imprimirArreglo(arreglos);
//3
var arreglo=["uno","dos","tres","cuatro"];
imprimirArreglo(arreglo);
function reccorrerArreglos(arreglos){
    arreglos.forEach(function(arreglo){
        console.log("El valor es:"+arreglo);
    });
}
reccorrerArreglos(arreglo);
//Recorrer
 var persona = {
    nombre:"Damian",
    edad: 31,
    profesion: "Ingeniero",
    empresas:[
        "SOFT2",
        "ING"
    ]
 };

 function imprimirObjeto(persona){
    for(var llave in persona){
        console.log(persona[llave]);

    }
 };
 imprimirObjeto(persona);
// Ejemplo del profesor
const arr=Object.values(persona);
arr.forEach(function(arr){
    console.log(arr);
});

//
function validarSuscripcion(tipoDeSuscripcion){
if (tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
    return;
}
if(tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    return;
}
 if(tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un a�o");
    return;
}
 if(tipoDeSuscripcion === "ExpertPlus"){
    console.log("T� y alguien m�s pueden tomar TODOS los cursos de Platzi durante un a�o");
    return;
}
    console.warn("No cuentas a�n con ning�n suscripci�n");
}