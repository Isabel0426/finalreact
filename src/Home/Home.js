import './Home.css'

import { Formularioreserva } from '../Formularioreserva/Formularioreserva.js'
import { Actividades } from '../Actividades/Actividades.js'
import { ServicioHabitacion } from '../services/ServicioHabitacion/ServicioHabitacion.js'

import { useEffect, useState } from 'react'

import Swal from 'sweetalert2'

export function Home(){

    const[cargaServicio,setCargaServicio]=useState(true)
    const[habitaciones,setHabitaciones]=useState(null)
    const[idHabitacion,setidHabitacion]=useState("")

   
//https://github.com/jjosegallegocesde/servidorHotelesNickelodeon.git


    useEffect(function(){

        ServicioHabitacion()
            .then(function(datos){
                setHabitaciones(datos)
                setCargaServicio(false)
            })

    },[])

    if(cargaServicio){
        return(
            <>
                <h1>CARGANDO....</h1>
            </>
        )
        
    }else{

        return(
            <>
    
                <div className="banner">
                       <Formularioreserva datex={idHabitacion}/>     
                </div>
    
                <div className="section mb-5">
                        <Actividades></Actividades>
                </div>

                <br/>
                <div className="mt-5">

                        <div className='container-fluid my-5'>
                            <div className='row'>
                                <div className='col-12'>
                                    <h1>Habitaciones: </h1>
                                </div>
                            </div>
                            <div className='row row-cols-1 row-cols-md-3 g-2'>
                            {

                                habitaciones.datos.map(function(habitacion){
                                    return(
                                        <>
                                            
                                                <div className="col" key={habitacion._id}>

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
                                                        <button onClick={()=>{
                                                            setidHabitacion(habitacion._id)
                                                            Swal.fire({
                                                                position: 'center',
                                                                icon: 'success',
                                                                title: 'Habitacion Seleccionada '+habitacion.nombre,
                                                                showConfirmButton: false,
                                                                timer: 1500
                                                            })
                                                        }} className='btn btn-outline-primary m-2'>Reservar</button>

                                                    </div>

                                                </div>
                                             
                                            
                                        </>
                                       
                                            
                                    )
                                })

                            }

                            </div>
                        

                        </div>

                        <footer className='bg-light text-center text-lg-start' id='foot'>
 
                            <div class='text-center p-3' >
                                © 2020 Copyright:
                                <a className="text-dark" href="https://github.com/Isabel0426/finalreact.git/">Maria Isabel Hincapie Lopez</a>
                            </div>

                        </footer>
                                        
                </div>
            
            </>
        )

    }

    

    

    

}