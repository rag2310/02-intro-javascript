import heroes, {owners } from '../data/heroes';

//console.log(owners);
const getHeroebyId = (id) => heroes.find((heroe) => heroe.id === id);

//console.log(getHeroebyId(2));

//find?, filter
const getHeroresByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

//console.log(getHeroresByOwner('DC'));

export default getHeroebyId;
export { owners, getHeroresByOwner};