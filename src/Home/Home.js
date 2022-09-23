import './Home.css'
import {Formularioreserva} from '../Formularioreserva/Formularioreserva'
import {Actividades} from '../Actividades/Actividades.js'
import { useEffect, useState } from "react" 
import { ServicioHabitacion } from '../services/ServicioHabitacion/ServicioHabitacion'

import Swal from 'sweetalert2'

export function Home(){

    const[estadoCarga, setEstadoCarga]=useState(true)
    const [habitaciones, setHabitaciones]=useState(null)
    const [idhabitacion,setidHabitacion]=useState("")



    useEffect(function(){
        ServicioHabitacion()
        .then(function(respuesta){

            setHabitaciones(respuesta)

        })
    },[])
    return(
        <>
        <div className='banner'>
                <Formularioreserva HabitacionSeleccionada={idhabitacion}/>
        </div>
        <div className='section'>
                <Actividades></Actividades>
        </div>

<div className="mt-5">

<div className='container-fluid my-5'>
    <div className='row'>
        <div className='col-12'>
            <h1>Habitaciones: </h1>
        </div>
    </div>
    <div className='row row-cols-1 row-cols-md-3 g-2'>
    {

        habitaciones.datos.map(function(habitacion){//por cada una de las tarjetas hay un boton que escucha cuando se da click
            return(
                <>
                    
                        <div className="col">

                            <div className='card h-100'>
                                <img src={habitacion.imagenes[0]} alt="img" height="250px" className=''/>
                                <h3 className='text-center'>{habitacion.nombre}</h3>
                                <p className='mx-2'>{habitacion.descripcion}</p>
                                <h2 className='text-start'>${habitacion.valorNoche}</h2>
                                <div className='mx-2 d-inline'>
                                    <i className="bi bi-person-fill"></i>
                                    <i className="bi bi-person-fill"></i>
                                    <i className="bi bi-person-fill"></i>
                                </div>
                                <button onClick={
                                    setidHabitacion(habitacion._id)
                                    // Swal.fire({
                                    //     position: 'center',
                                    //     icon: 'success',
                                    //     title: 'Habitacion seleccionada',
                                    //     showConfirmButton: false,
                                    //     timer: 2500
                                    //   })
                                } className='btn btn-primary'
                                >Reservar</button>
                            </div>

                        </div>
                     
                    
                </>
               
                    
            )
        })

    }

    </div>


</div>

</div>
        </>
    )
}