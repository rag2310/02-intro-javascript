//Funciones en JS
const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;

console.log(saludar('Goku'));
console.log(saludar2('Goku'));
console.log(saludar3('Goku'));
console.log(saludar4());


const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});

console.log(getUser());

const user = getUser();
console.log(user);


//Tarea
// 1. Transformen a una funcion de Flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas
const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});

const usarioActivo = getUsuarioActivo('Rodolfo');
console.log(usarioActivo);
