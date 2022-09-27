import { useState,useEffect } from "react"
import { ServicioReserva } from "../services/ServicioReserva/SerivicioReserva.js"

import Swal from 'sweetalert2'

export function Formularioreserva({datex}){

    const[entrada,setEntrada]=useState("")
    const[salida,setSalida]=useState("")
    const[adultos,setAdultos]=useState("")
    const[ninos,setNinos]=useState("")

    function EnviarDatos(evento){
        evento.preventDefault()
        let datos={
            "idHabitacion":datex,
            "fechaEntrada":entrada,
            "fechaSalida":salida,
            "numeroNinos":ninos,
            "numeroAdultos":adultos
        }
        console.log(datos)
        ServicioReserva(datos)
        .then(function(respuesta){
            console.log(respuesta);
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: respuesta.mensaje,
                showConfirmButton: false,
                timer: 1500
            })
        })
    }

    return(

        <>

            <div className="row">
                <div className="col-12">
                    <form className="" onSubmit={EnviarDatos}>

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
                                        id="entrada" 
                                        onChange={(evento)=>{
                                            setEntrada(evento.target.value) 
                                        }}
                                        value={entrada} 
                                        className="form-control shadow"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <label className="form-label">Fecha Salida</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="bi bi-calendar2-date"></i></span>
                                    <input 
                                        type="Date" 
                                        id="salida"
                                        onChange={(evento)=>{
                                            setSalida(evento.target.value) 
                                        }}
                                        value={salida} 
                                        className="form-control shadow"
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
                                        defaultValue="---"
                                        onChange={(evento)=>{
                                            setAdultos(evento.target.value)
                                        }}
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