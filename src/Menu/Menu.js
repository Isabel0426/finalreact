import {Link} from "react-router-dom"
import './Menu.css'
export function Menu(){
    return(
        <>
        <nav className="navbar navbar-expand-lg " id="menu">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#" id="hoteles">Hoteles</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home" id="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/habitaciones" id="habitacion">habitaciones</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}