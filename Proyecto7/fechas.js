const fechaActual = new Date(2023,02,29);

const nacimiento = new Date(2000,04,06);

const comparacion = (fechaActual > nacimiento)

console.log(comparacion)

const diaNacimiento = nacimiento.getDate();
console.log(diaNacimiento)

const mesNacimiento = nacimiento.getMonth();
console.log(mesNacimiento)

const anyoNacimiento = nacimiento.getFullYear();
console.log(anyoNacimiento)
