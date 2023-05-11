const parrafos = document.querySelectorAll(".parrafo");

const secciones = document.querySelectorAll(".seccion")

const papelera = document.querySelectorAll(".papelera")

parrafos.forEach(parrafo =>{
    parrafo.addEventListener("dragstart",Event=>{
        console.log("Estoy arrastrando el parrafo "+ parrafo.innerText)
        parrafo.classList.add("dragging")
        Event.dataTransfer.setData("id",parrafo.id)
    })

    parrafo.addEventListener("dragend",() =>{
        console.log("He  terminado de arrastrar")
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover",Event => {
        Event.preventDefault()
    })

    seccion.addEventListener("drop",Event=>{
        const id_parrafo = Event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)

    })
})

papelera.forEach(papelera =>{
    
    papelera.addEventListener("dragover",Event => {
        Event.preventDefault()
    })
    papelera.addEventListener("drop", Event =>{
        const id_parrafo = Event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        papelera.appendChild(parrafo)
        papelera.removeChild(parrafo)
    })
})