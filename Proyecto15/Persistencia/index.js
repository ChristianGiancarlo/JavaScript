const nombre = "Christian"
const apellido = "Mimbela"

const persona = {nombre : "Christian", apellido: "Mimbela"}

sessionStorage.setItem("persona",JSON.stringify(persona))

localStorage.setItem("persona",JSON.stringify(persona))

document.cookie= "persona" = JSON.stringify(persona)


