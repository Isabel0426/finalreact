import { useState } from "react"
import { ServicioReserva } from "../services/ServicioReserva/SerivicioReserva"
import Swal from 'sweetalert2'

export function Formularioreserva(HabitacionSeleccionada){
    console.log(HabitacionSeleccionada)
 const [entrada,setEntrada]=useState("")
 const [salida,setSalida]=useState("")
 const [adultos,setAdultos]=useState("")
 const [ninos,setNinos]=useState("")

function Enviardatos(evento){
  evento.preventDefault()

  let datos={
    "idHabitacion":HabitacionSeleccionada,
    "fechaEntrada":entrada,
    "fechaSalida":salida,
    "numeroNinos":ninos,
    "numeroAdultos":adultos
  }
  ServicioReserva(datos)
  .then(function(respuesta){
    Swal.fire({
        title: respuesta.mensaje,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
          timer:1500
        }
      })
  })
}

    return(
        <>

            <div className="row">
                <div className="col-12">
                    <form className="" onSubmit={Enviardatos} >

                        <div className="row">
                            <div className="col-12 col-md-8 text-white">
                                <h4>RESERVA CON NOSTROS</h4>
                                <h5>Los precios mas econocmicos del mercado</h5>
                                <h5> Reserva ya !!!</h5>
                                <h5> Desde $350.000 COP</h5>
                                <hr></hr>
                            </div>
                        </div>

                        <div className="row text-white fw-bold">
                            <div className="col-12 col-md-4">
                                <label className="form-label">Fecha entrada</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="bi bi-calendar2-date"></i></span>
                                    <input 
                                    type="Date" 
                                    className="form-control shadow"
                                    onChange={(evento)=>{
                                      setEntrada(evento.target.value)
                                    }}
                                    value={entrada}
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <label className="form-label">Fecha Salida</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="bi bi-calendar2-date"></i></span>
                                    <input 
                                    type="Date" 
                                    className="form-control shadow"
                                    onChange={(evento)=>{
                                      setSalida(evento.target.value)
                                    }}
                                    value={salida}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row text-white fw-bold">
                            <div className="col-12 col-md-4">
                                <label className="form-label">Numero Adultos</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
                                    <select 
                                        className="form-select"
                                        onChange={(evento)=>{
                                          setAdultos(evento.target.value)
                                        }}
                                        value={adultos}
                                        defaultValue="1"
                                        > 
                                        <option value="1">---</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <label className="form-label">Numero Niños</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
                                    <select 
                                        className="form-select"
                                        onChange={(evento)=>{
                                          setNinos(evento.target.value)
                                        }}
                                        value={ninos}
                                        defaultValue="0"
                                        >
                                        <option value="1">---</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                
                            </div>
                            
                        </div>
                        <button type="submit" className="btn btn-primary">Reserva</button>
                    </form>
                </div>
            </div>
        </>
    )
}