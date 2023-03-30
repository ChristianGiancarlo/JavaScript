
const objeto1 ={
    nombre : "Christian",
    apellido : "Mimbela",
    edad : 22,
    altura : 1.63,
    eresDeveloper : true
}

const edadObj1 = objeto1.edad;

const objeto2 ={
    nombre : "Kiara",
    apellido : "Diaz",
    edad : 21,
    altura : 1.53,
    eresDeveloper : true
}
const objeto3 ={
    nombre : "Husneader",
    apellido : "Castillo",
    edad : 23,
    altura : 1.75,
    eresDeveloper : false
}

const listaAmigos = [objeto1 , objeto2, objeto3]

const listaOrdenada = listaAmigos.sort((a, b) => a.edad - b.edad)

console.log(listaOrdenada)
