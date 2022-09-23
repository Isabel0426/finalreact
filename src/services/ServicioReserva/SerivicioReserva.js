export async function ServicioReserva(datos){
    console.log("estamos en el servicio")
    //URI
    const URI=("https://servercomfama.herokuapp.com/viajescomfama/reserva")
    //PETICION 
    const PETICION={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datos)//volviendo un dato a json

    }
    //CONSUMO
    // let respuesta=await fetch(URI,PETICION)
    // let resultado=await respuesta.json()

    // return resultado
}