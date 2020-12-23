
import getHeroebyId from './08-imp-exp'

/* const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        //Tarea
        // importen el 
        const heroe = getHeroebyId(2);
        resolve(heroe);
        //reject('No se pudo encontrar el heroe');
    }, 2000)
});

promesa.then((heroe) => {
    console.log('heroe', heroe);
})
    .catch(err => console.warn(err)); */

const getHeroebyIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            //Tarea
            // importen el 
            const heroe = getHeroebyId(id);
            //console.log(heroe);

            heroe ? resolve(heroe)
                : reject('No se pudo encontrar el heroe');
            /* if (heroe !== undefined) {
                resolve(heroe);
            } else {
                reject('No se pudo encontrar el heroe');
            } */
        }, 2000)
    });
};

getHeroebyIdAsync(1)
    .then(console.log)
    .catch(console.warn);