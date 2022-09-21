import {ServicioHabitacion} from "../services/ServicioHabitacion/ServicioHabitacion.js"

import { useEffect, useState } from "react" //HOOKS
//funciones para controlar la carga del servicio 
export function Habitaciones(){

//USANDO EL USESTATE:FUNCION ESPECIAL PARA CREAR VARIABLE GLOBAL DENTRO DEL COMPONENETE
    const[estadoCarga, setEstadoCarga]=useState(true)
                       //se envia ser: dato useState con valor por defecti true
//variable global se deja en true, variable 
    const [habitaciones, setHabitaciones]=useState(null)
//USANDO EL USEFFECT
//Funcion que controla el render de un componente
    useEffect(function(){
        ServicioHabitacion()
        .then(function(respuesta){

            setHabitaciones(respuesta)

        })
    },[])
   //evaluando la carga para renderizar la respuesta
   if (estadoCarga) {
    return(
        <>
        <h1>Estoy cargando...</h1>
        </>
    )
   } else {
    return(
        <div>
            {
                habitaciones.datos.map(function(habitacion){
                    
                    return(
                        <div>
                            <h1>{habitacion.nombre}</h1>
                            <img src={habitacion.imagenes[0]}></img>
                        </div>
                    )

                })
            }
        </div>
    )
   }//se colocan las llaves para acceder a la logica de js desde el html
   //react para renderizar necesita que la funcion que se corre retorne algo: MAP 
}