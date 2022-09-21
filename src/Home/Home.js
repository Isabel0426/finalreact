import './Home.css'
import {Formularioreserva} from '../Formularioreserva/Formularioreserva'
import {Actividades} from '../Actividades/Actividades.js'
//import { ServicioHabitacion } from '../services/ServicioHabitacion/ServicioHabitacion'

export function Home(){
    return(
        <>
        <div className='banner'>
                <Formularioreserva/> 
        </div>
        <div className='section'>
                <Actividades></Actividades>
        </div>

        <div className='mt-5'>
        {
            habitaciones.datos.map(function(habitacion,indice){
                return(
                    <div key={indice}>
                        <h1>{habitacion.nombre}</h1>
                   </div>
                )
            })
        }
        </div>
        </>
    )
}