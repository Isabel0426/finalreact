export async function ServicioHabitacion(){

    const URI="https://servercomfama.herokuapp.com/viajescomfama/habitaciones"

    const PETICION={
        method:'GET'
    }

    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()

    return datos




}