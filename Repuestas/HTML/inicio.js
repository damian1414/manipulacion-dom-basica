const input1 = (document.querySelector('#calculo'));
const input2 = (document.querySelector('#calculo2'));
const btn = document.querySelector('#btnCalcular');
const parrafo = document.querySelector('#result');
const formulario = document.querySelector('#formulario');

// Parámetros eventos a llamar y funcion a ejecutar
btn.addEventListener('click',sumarValores);
input1.addEventListener('paste', textoCopiado);
/*input1.addEventListener('paste', (event) => {
    event.preventDefault();
    console.log('El texto ingresado fue pegado');
    
});*/
function sumarValores(event){
    //console.log({event});
    //Para que no recargue la página
    event.preventDefault();
   // console.log('Escuchando el evento ONCLICK');
    let val1 = parseInt(input1.value);
    let val2 = parseInt(input2.value);
    const suma = val1 + val2;
    parrafo.innerHTML = suma;
    
}

function textoCopiado(event1){
    event1.preventDefault();
    parrafo.innerHTML='El texto fue copiado';
}