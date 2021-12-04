import React, { useState } from "react";
import {Button, Modal} from 'react-bootstrap';
import FadeIn from 'react-fade-in';


const EventosAsistente = ({eventos}) => {
  const [show, setShow] = useState(false);
  const [evento, setEvento] = useState({});

  const handleClose = () => {
    setShow(false)
  }

  const handleShow = (row) => {
    console.log(row)
    setShow(true) 
    setEvento(row)
  }



    return (
      < >
      <FadeIn>
        
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
                            <button type="button" className="btn btn-primary" onClick={()=>handleShow(evento)}>Asistir</button>
                            Cupos Disponibles
                            <div className="badge rounded-pill bg-warning">
                            <div  className="btn-sm"><h5>{evento.aforo}</h5></div>
                            </div>
                        </li>
              </div>
            </div>        
          ))}
        </FadeIn> 


              <Modal show={show} onHide={handleClose} animation={true}  aria-labelledby="contained-modal-title-vcenter" centered>
              <FadeIn>
              <Modal.Header closeButton>
                <Modal.Title>Revisa tu reserva</Modal.Title>
              </Modal.Header>
                  <Modal.Body>{evento &&
                  <>
                  <h5>{evento.ramo}</h5>
                  <h6> {evento.profesor}</h6>
                  <h6> {evento.bloque + `       -       ` + (new Date(evento.fecha)).toLocaleDateString()}</h6>
                  <h6> {evento.lugar}</h6></>

                }</Modal.Body>
                  <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                      Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Confirmar
                    </Button>
                  </Modal.Footer>
                  </FadeIn>
                </Modal>

        </>
    )
}

export default EventosAsistente
