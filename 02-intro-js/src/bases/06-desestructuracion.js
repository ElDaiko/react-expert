//desestructuracion

const persona = {
    nombre: 'Miguel',
    edad: 22,
    clave: "idk",
    rango: 'soldado'
}

const {nombre, edad, clave} = persona

/* console.log(nombre, edad, clave); */

const Context = ({nombre, edad, rango = 'capitan', clave}) => {

    /* console.log(nombre, edad, rango); */
    return {
        nombreClave: clave,
        anios: edad,
        latlgn: {
            lat: 14.1234,
            lng: -12.876
        }
    }
}

const {nombreClave, anios, latlgn:{lat, lng}} = Context(persona)

console.log(nombreClave, anios);
console.log(lat, lng);