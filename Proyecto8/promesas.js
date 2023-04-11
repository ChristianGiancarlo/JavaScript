function siempreVerdad(){
    return true
}

const saludo = new Promise((resolve , reject) =>{
    if (true){
        setTimeout(resolve, 5000)
    }else{
        reject()
    }
}
)

saludo.then(()=> {console.log("Hola soy una promesa")})

function* generaIdPar(){
    let id = 0;
    while(true){
        id ++
        if (id % 2 !== 0){
            id ++
        }
        yield id
    } 
}
const gen = generaIdPar();

console.log(gen.next())