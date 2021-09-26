import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { NavbarAsistente } from "../components/NavBarAsistente";


const Asistente = () => {
    return (
    <Router>
      <NavbarAsistente />
      <div className="container p-4">
        
      <div className="card mb-3">
          <h3 className="card-header">Introduccion a la Programacion</h3>
          <div className="list-group-item flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Roberto Gonzalez</h5>
                <h5>09/34/20</h5>
                </div>
                <p className="mb-1">Sala 6</p>
                
            </div>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <button type="button" className="btn btn-primary">Asistir</button>
                    Cupos Disponibles
                    <div className="badge rounded-pill bg-warning">
                    <div  className="btn-sm"><h5>17</h5></div>
                    </div>
                </li>
            </div>
          
         
          
          
        </div>
     
    
    </Router>

    )
}

export default Asistente
