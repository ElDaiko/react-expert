/* import {heroes} from "./data/heroes"; */
import {heroes, owners}  from "../data/heroes"; //imp

/* console.log(owners); */


//find
const getHeroeById = (id) => {
    return heroes.find((heroes) => heroes.id === id)
}
/* console.log(getHeroeById(2));
 */
//filter
const getHeroesByOwner = (owner) => heroes.filter((heroes) => heroes.owner === owner)

export {
    getHeroeById,
    getHeroesByOwner
}