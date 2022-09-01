"use strict"

let personas_lista = []

const boton_agregar = document.getElementById("agregar_id")
const boton_mostrar = document.getElementById("mostrar_id")

boton_agregar.addEventListener(
    "click",
    (e)=>{
        let nombre_input = document.getElementById("nombre_id")

        //si el imput no esta vacio
        if (nombre_input.value){
            let apellido_input = document.getElementById("apellido_id")

            if (apellido_input.value){
                const persona = {
                    nombre:nombre_input.value,
                    apellido:apellido_input.value,
                    saludar: function(){
                        return "Hola soy "+this.nombre+" "+this.apellido
                    }
                }

                personas_lista.push(persona)
                personas_lista.sort(
                    function(a,b){
                        return a.apellido.localeCompare(b.apellido)
                    }
                )
                nombre_input.value = ""
                apellido_input.value = ""
            }
            else{
                alert("Apellido no puede estar vacio!")
            }
        }
        else{
            alert("Nombre no puede estar vacio!")
        }
    }

)

boton_mostrar.addEventListener(
    "click",
    (e)=>{
        let resultado = document.getElementById("resultado_id")
        resultado.innerHTML = ""

        for (let persona of personas_lista){
            resultado.innerHTML += `${persona.nombre} ${persona.apellido} <br>`
        }

    }
)