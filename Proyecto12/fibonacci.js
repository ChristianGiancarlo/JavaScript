function fibonacci(num){
    let suma = 1;
    let num1 = 1;
    let num2 = 1;
    for(let i = 3; i<=num; i++){
        console.log(suma);
        suma = num1 + num2;
        num1= num2;
        num2 = suma;
    }
    return num2;
}

console.log(fibonacci(6));