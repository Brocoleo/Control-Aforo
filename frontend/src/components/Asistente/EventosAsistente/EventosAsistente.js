import React from 'react'

const EventosAsistente = ({eventos}) => {
    return (
        < >
      {eventos.map((evento, i) => (
    <div className="col-md-8 info">
      <div className="card mb-3" key={i}>
          <h3 className="card-header" >{evento.ramo}</h3>
          <div className="list-group-item flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{evento.profesor}</h5>
                <h5>{(new Date(evento.fecha)).toLocaleDateString() }</h5>
                </div>
                <p className="mb-1">{evento.lugar}</p>
                <h5 className="mb-1">{evento.bloque}</h5>
                
            </div>
                <li className="list-group-item d-flex justify-content-between align-items-center" >
                    <button type="button" className="btn btn-primary">Asistir</button>

                    Cupos Disponibles
                    <div className="badge rounded-pill bg-warning">
                    <div  className="btn-sm"><h5>{evento.aforo}</h5></div>
                    </div>
                </li>
            </div>
            </div>         
          ))}
          
        </>
    )
}

export default EventosAsistente
