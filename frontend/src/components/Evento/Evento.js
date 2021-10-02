import React, { useState, useEffect, useRef } from "react";
import Select from 'react-select'


const API = process.env.REACT_APP_API;



export const Evento = ({listaprofes, listaramos}) => {
  let dataprofes = {listaprofes}
  let dataramos = {listaramos}
  const [lugar, setLugar] = useState("");
  const [aforo, setAforo] = useState("");
  const [fecha, setFecha] = useState("");
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState("");
  let initialProfesor = { profesorKey: null };
  let initialRamo = { ramoKey: null };
  const [ramoNombre, setRamo] = useState(initialRamo);
  const [profesorName, setProfesor] = useState(initialProfesor);


  const updateProfesor = value => {
    setProfesor({ ...profesorName, profesorKey: value });
  };

  const updateRamo = value => {
    setRamo({ ...ramoNombre, ramoKey: value });
  };

  const lugarInput = useRef(null);

  let [eventos, setEventos] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let profesor = profesorName.profesorKey
    let ramo = ramoNombre.ramoKey
    if (!editing) {
      const res = await fetch(`${API}/eventos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            lugar,
            aforo,
            ramo,
            profesor,
            fecha
        }),
      });
      await res.json();
    } else {
      const res = await fetch(`${API}/eventos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lugar,
          aforo,
          ramo,
          profesor,
          fecha
        }),
      });
      const data = await res.json();
      console.log(data);
      setEditing(false);
      setId("");
    }
    await getEvento();

    setLugar("");
    setAforo("");
    setRamo(initialRamo)
    setProfesor(initialProfesor);
    setFecha("")
    lugarInput.current.focus();
  };

  const getEvento = async () => {
    const res = await fetch(`${API}/eventos`);
    const data = await res.json();
    setEventos(data);
  };

  const deleteEvento = async (id) => {
    const userResponse = window.confirm("Estas seguro que quieres eliminar ?");
    if (userResponse) {
      const res = await fetch(`${API}/eventos/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);
      await getEvento();
    }
  };

  const editEvento = async (id) => {
    const res = await fetch(`${API}/eventos/${id}`);
    const data = await res.json();
    setEditing(true);
    setId(id);

    // Reset
    setLugar(data.lugar);
    setAforo(data.aforo);
    initialRamo={ramoKey:data.ramo}  
    setRamo(initialRamo)
    initialProfesor={profesorKey:data.profesor}  
    setProfesor(initialProfesor)
    setFecha(data.fecha)
    lugarInput.current.focus();
  };

  useEffect(() => {
    getEvento(); 

  }, []);

  return (
    <div className="row">
      <div className="col-md-4">
      <h5>Formulario Evento</h5>
        <form onSubmit={handleSubmit} className="card card-body">
          <div className="form-group">
            <input
              type="text"
              onChange={(e) => setLugar(e.target.value)}
              value={lugar}
              className="form-control"
              placeholder="Lugar"
              ref={lugarInput}
              autoFocus
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              onChange={(e) => setAforo(e.target.value)}
              value={aforo}
              className="form-control"
              placeholder="Aforo"
            />
          </div>
 
          <div className="form-group">
              <Select             
              placeholder="Ramo"
              value={dataramos.listaramos.filter(({ value }) => value === (ramoNombre.ramoKey))}
              getOptionValue={({ value }) => value}
              onChange={({ value }) => updateRamo(value)}
              options={dataramos.listaramos}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: 'primary50',
                  primary: 'black',
                },
              })}
            />
          </div>

          <div className="form-group">
              <Select             
              placeholder="Profesor"
              value={dataprofes.listaprofes.filter(({ value }) => value === (profesorName.profesorKey))}
              getOptionValue={({ value }) => value}
              onChange={({ value }) => updateProfesor(value)}
              options={dataprofes.listaprofes}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: 'primary50',
                  primary: 'black',
                },
              })}
            />
          </div>
      
            <div className="form-group">
            <input
              type="text"
              onChange={(e) => setFecha(e.target.value)}
              value={fecha}
              className="form-control"
              placeholder="Fecha"
              autoFocus
            />
          </div>
          
        
          <button className="btn btn-primary btn-block">
            {editing ? "Actualizar" : "Añadir"}
          </button>
        </form>
      </div>
      <div className="col-md-6">
      <h4>Informacion Eventos</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Lugar</th>
              <th>Aforo</th>
              <th>Ramo</th>
              <th>Profesor</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {eventos.map((evento) => (
              <tr key={evento._id}>
                <td>{evento.lugar}</td>
                <td>{evento.aforo}</td>
                <td>{evento.ramo}</td>
                <td>{evento.profesor}</td>
                <td>{evento.fecha}</td>
                <td>
                  <button className="btn btn-secondary btn-sm btn-block" onClick={(e) => editEvento(evento._id)}>
                    Editar
                  </button>
                  <button className="btn btn-danger btn-sm btn-block" onClick={(e) => deleteEvento(evento._id)} >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};