export async function ServicioHabitacion(){
    //1.URI
    const URI="https://servercomfama.herokuapp.com/viajescomfama/habitaciones"
    //2.Configurar peticion
    const PETICION={
        method:"GET"
    }
    //3.Consumo
    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()

    return datos
}