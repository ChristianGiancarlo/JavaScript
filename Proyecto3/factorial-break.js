let factorial=1;
let guiaInicial= 1;

while(guiaInicial<=10){
    factorial=factorial*guiaInicial;
    if(guiaInicial<=10){
        guiaInicial++;
    }else{
        break;
    }
}
console.log(factorial);