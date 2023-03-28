
const listaCompra = ["Leche", "Cereal", "Galleta", "Arroz","Fideos"];

listaCompra.push("Aceite de girasol");

listaCompra.pop();

console.log(listaCompra)


const listaPeliculas = [
    {titulo: "Interestelar", director: "Christopher Nolan", fecha: new Date(2014,10,06)},
    {titulo: "Iron Man" ,director: "Jon Favreau", fecha: new Date(2008,04,02)},
    {titulo: "Jujutsu Kaisen Cero", director: "Park Sung-hoo", fecha: new Date(2021,11,24)}
]

const listaFechas = listaPeliculas.filter((objeto) => objeto.fecha > new Date(2010,0,01) )
console.log(listaFechas)

const listaDirectores = listaPeliculas.map(objeto => { return objeto.director})
console.log(listaDirectores)

const listaTitulos = listaPeliculas.map(objeto => { return objeto.titulo})
console.log(listaTitulos)


const listaDirectoresTitulos = listaTitulos.concat(listaDirectores)
console.log(listaDirectoresTitulos)

const listaPropagacion = [...listaDirectores,...listaTitulos]
console.log(listaPropagacion)