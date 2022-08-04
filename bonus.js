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
        mensaje:"Puedes tomar casi todos los cursos de Platzi durante un año"
    },
    {
        suscripcion:"ExpertPlus",
        mensaje:"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
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
    expertPlus:"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}
function conseguirTipoSuscripcion(suscripcion){
    if(tiposDeSuscripciones[suscripcion]){
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }
    console.warn("No existe este tipo de suscripción");
}