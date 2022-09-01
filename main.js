"use strict"

let personas_lista = []


const boton_agregar = document.getElementById("agregar_id")
boton_agregar.addEventListener(
    "click",
    (event)=>{
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