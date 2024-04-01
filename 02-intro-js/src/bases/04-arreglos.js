

/* const array = new Array(); */

const array = [1,2,3,4]

let array2 = [...array, 5]

/* El callback se ejecuta por cada uno de los elementos del array */
const array3 = array2.map( function(num) {
   return num * 2 
});
/* Crea unnuevo arreglo */

console.log(array);
console.log(array2);
console.log(array3);