


//const { edad, clave, nombre, } = persona;

//console.log(nombre);
//console.log(edad);
//console.log(clave);
//console.log(persona.edad);
//console.log(persona.clave);

const useContext = ({ clave, nombre, edad, rango = 'Capitan' }) => {

    //console.log(nombre,edad,rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlong: {
            lat: 14.1234,
            long: -12.2323,
        },
    };
};

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

const { nombreClave, anios, latlong: { lat, long } } = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, long);