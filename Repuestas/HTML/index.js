const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});
//innerhtml - Convierte todo a html
h1.innerHTML = 'Modificación del <br> HTML';
//innertext convierte todo a texto
h1.innerText = 'Modificación del <br> HTML';
//Acceder al atributo pantalla del h1
console.log(h1.getAttribute('class'));
//h1.setAttribute('class','rojo');
//agregar o eliminar class del atributo
h1.classList.add('rojo');
h1.classList.remove('verde'); 
//
input.value = '456';
//Crear elemnto desde cero
const img = document.createElement('img');
img.setAttribute('src', 'https://www.esportmaniacos.com/wp-content/uploads/2022/06/one-piece-780x470.png');
console.log(img);
pid.replaceChildren(img);