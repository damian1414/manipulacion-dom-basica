var objSuscripciones = [
    {
        suscripcion:"Free",
        mensaje:"Solo puedes tomar los cursos gratis"
    },
    {
        suscripcion:"Basic",
        mensaje:"Puedes tomar casi todos los cursos de Platzi durante un mes"
    },
    {
        suscripcion:"Expert",
        mensaje:"Puedes tomar casi todos los cursos de Platzi durante un a�o"
    },
    {
        suscripcion:"ExpertPlus",
        mensaje:"T� y alguien m�s pueden tomar TODOS los cursos de Platzi durante un a�o"
    },
];

function validarSuscripcion(nombreSuscripcion){
    var resp= objSuscripciones.find(function(objSuscripcion){
        return objSuscripcion.suscripcion === nombreSuscripcion;
    });
    console.log(resp);
}
//Bonus Profesor
const tiposDeSuscripciones ={
    free:"Solo puedes tomar los cursos gratis",
    expert:"Puedes tomar casi todos los cursos de Platzi durante un mes",
    expertPlus:"T� y alguien m�s pueden tomar TODOS los cursos de Platzi durante un a�o"
}
function conseguirTipoSuscripcion(suscripcion){
    if(tiposDeSuscripciones[suscripcion]){
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }
    console.warn("No existe este tipo de suscripci�n");
}