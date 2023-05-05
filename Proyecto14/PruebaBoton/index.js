
$(() => {
    $("#btn").on("click", function(){
        alert("click en el boton")
        console.log("Hola, estoy usando JQuery")
    })

    $("btn").trigger("click")
})