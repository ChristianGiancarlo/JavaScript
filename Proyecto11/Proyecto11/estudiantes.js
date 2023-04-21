class Estudiante{
    #nombre;
    #asignaturas = [];


    constructor(nombre, asignaturas){
        this.#nombre = nombre;
        this.#asignaturas = asignaturas;
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre;
    }

    setAsignaturas(asignaturas){
        this.#asignaturas = asignaturas;
    }

    getAsignaturas(){
        return this.#asignaturas;
    }

    obtenDatos(){
        return (`Mi nombre es ${this.#nombre} y tengo estas asignaturas: ${this.#asignaturas}`) 
    }

}

const estudianteNuevo = new Estudiante("Christian", ["Javascript", "HTML", "CSS"])
const datos = estudianteNuevo.obtenDatos();

console.log(datos);



