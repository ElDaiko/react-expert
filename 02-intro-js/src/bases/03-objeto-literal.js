const persona = {
    nombre: 'Miguel',
    apellidos: 'Roldán',
    edad: 45,
    direccion:{
        ciudad: 'medellin',
        zip: '055420',
        lng: '43.454674'
    }
}


const persona2 = {...persona} //copia del objeto
persona2.nombre = 'peter'

console.table(persona);
console.table(persona2);