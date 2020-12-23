const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 55123213,
        lat: 14.2321,
        long: 34.124123
    },
};

//console.table(persona);


const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);