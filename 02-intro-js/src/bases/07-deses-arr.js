const personajes = ['goku', 'vegeta', 'trunks']
const [ , ,p3] = personajes;

console.log(p3);

const retornalArreglo = () => {
    return ['ABC', '123']
}

const [letras, numeros] = retornalArreglo()
console.log(letras, numeros);

const state = (valor) => {
    return[valor, ()=>{console.log('Hola Mundo');}]
}

const [nombre, setnombre] = state('goku')

console.log(nombre);
setnombre()