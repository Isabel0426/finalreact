import {Routes, Route, Link} from "react-router-dom";
import {Home} from '../Home/Home.js';
import {Menu} from '../Menu/Menu.js';
import {Habitaciones} from '../Habitaciones/Habitaciones.js';
export function Rutas(){
    return(
        <>
        <div>
            <Menu>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </Menu>
        </div>
        </>
    )
}