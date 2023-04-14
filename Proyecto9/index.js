const logger = require("./winston");


const funcion= val => { 
    if (typeof val ==="number"){
        return 2* val
    }
    throw new Error("El valor debe de ser de tipo numero")
}

console.log(funcion(5))

try{
    console.log(funcion("asa"))
}catch(e){
    logger.error("El valor que has ingresado no es un numero");
}

