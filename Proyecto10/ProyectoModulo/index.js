import * as matematicas from "./controller.js"
import chalk from "chalk";

const multiplicacion = matematicas.multiplica(1,2);
console.log(multiplicacion);

const suma = matematicas.suma(4, 5);
console.log(chalk.green(suma));

