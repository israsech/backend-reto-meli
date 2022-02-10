/**
 * Esta función genera un en base a las propiedades de un objeto js
 * un string con el formato de url params
 * ej: object{ edad:15,nombre:'Jual Lopez' } => return "edad=15&nombre=Juan Lopez"
 * @param object objeto a convertir
 */
function objectToUrlParams (object){
    const queryString = Object.keys(object).filter(key => truthy(object[key])).map(key => key + '=' + object[key]).join('&');
    return queryString ?? '';
}
function truthy(value){
    return value || value === 0;
}
module.exports= {objectToUrlParams};