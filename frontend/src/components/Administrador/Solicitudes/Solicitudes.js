import React, {useState} from 'react'

const Solicitudes = () => {
    let [eventos, setEventos] = useState([]);

    return (
    <div className="row" >
        
    <div className="col-md-4 ">
    <h4>Solicitudes de Sala</h4>
      <div className="card mb-3" >
          <h3 className="card-header" >Calculo 1</h3>
          <div className="list-group-item flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between ">
                <h5 className="mb-1">Profesor X</h5>
                <h5>12/04/20</h5>
                </div>
                <div className="d-flex w-100 justify-content-between ">
                <p className="mb-1">Sala 4</p>
                <p className="mb-1">Aforo 23</p>
                <p className="mb-1">14:40</p>
                </div>
            </div>
                <li className="list-group-item d-flex justify-content-between align-items-center" >
                    <button type="button" className="btn btn-success">Aceptar</button>
                    <button type="button" className="btn btn-danger">Cancelar</button>                   
                </li>
            </div>
            </div>         
            <div className="col-md-6 tabla">
            <h4>Informacion Eventos</h4>
              <table className="table table-responsive-sm table-secondary borderTable">
                <thead className="table-dark">
                  <tr>
                    <th>Lugar</th>
                    <th>Aforo</th>
                    <th>Profesor</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                  </tr>
                </thead>
                <tbody>
                  {eventos.map((evento) => (
                    <tr key={evento._id}>
                      <td>{evento.lugar}</td>
                      <td>{evento.aforo}</td>
                      <td>{evento.profesor}</td>
                      <td>{(new Date(evento.fecha)).toLocaleDateString() }</td>
                      <td>{evento.bloque}</td>
                    
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
    )
}

export default Solicitudes
