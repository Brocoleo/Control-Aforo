import React, { useState, useEffect, useRef } from "react";
import Select from 'react-select'
import DatePicker from "react-datepicker";
import FadeIn from 'react-fade-in';
import "react-datepicker/dist/react-datepicker.css";

const API = process.env.REACT_APP_API;

const bloques = [
  { value: '08:30', label: "08:30" },
  { value: "09:40", label: "09:40" },
  { value: '10:50', label: "10:50" },
  { value: "12:00", label: "12:00" },
  { value: '13:10', label: "13:10" },
  { value: "14:20", label: "14:20" },
  { value: '15:30', label: "15:30" },
  { value: "16:40", label: "16:40" },
  { value: '17:50', label: "17:50" },
  { value: "19:00", label: "19:00" },
];

export const Evento = ({listaprofes, listaramos}) => {
  let initialBloque = { bloqueKey: null };
  let initialProfesor = { profesorKey: null };
  let initialRamo = { ramoKey: null };
  let dataprofes = {listaprofes}
  let dataramos = {listaramos}
  const [fecha, setFecha] = useState(new Date()); 
  const [lugar, setLugar] = useState("");
  const [aforo, setAforo] = useState("");
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState("");
  const [ramoNombre, setRamo] = useState(initialRamo);
  const [hora, setHora] = useState(initialBloque);
  const [profesorName, setProfesor] = useState(initialProfesor);

  const updateProfesor = value => {
    setProfesor({ ...profesorName, profesorKey: value });
  };

  const updateBloque = value => {
    setHora({ ...hora, bloqueKey: value });
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
    let bloque = hora.bloqueKey
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
            fecha,
            bloque
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
          fecha,
          bloque
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
    setFecha(new Date())
    setHora(initialBloque)
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
    setFecha(new Date(data.fecha))
    initialBloque={bloqueKey:data.bloque}  
    setHora(initialBloque)
    lugarInput.current.focus();
  };

  useEffect(() => {
    getEvento(); 

  }, []);

  return (
    <FadeIn>
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
              <Select             
              placeholder="Hora"
              value={bloques.filter(({ value }) => value === (hora.bloqueKey))}
              getOptionValue={({ value }) => value}
              onChange={({ value }) => updateBloque(value)}
              options={bloques}
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
            <DatePicker className="form-control" selected={fecha} onChange={(date) => setFecha(date)} />
          </div>

          <button className="btn btn-primary btn-block">
            {editing ? "Actualizar" : "Añadir"}
          </button>
        </form>
      </div>
      <div className="col-md-6 tabla ">
      <h4>Informacion Eventos</h4>
        <table className="table table-responsive-sm table-secondary borderTable ">
          <thead >
            <tr>
              <th>Lugar</th>
              <th>Aforo</th>
              <th>Ramo</th>
              <th>Profesor</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody className="table-dark">
            {eventos.map((evento) => (
              <tr key={evento._id}>
                <td>{evento.lugar}</td>
                <td>{evento.aforo}</td>
                <td>{evento.ramo}</td>
                <td>{evento.profesor}</td>
                <td>{(new Date(evento.fecha)).toLocaleDateString() }</td>
                <td>{evento.bloque}</td>
                <td>
                  <button className="btn btn-warning btn-sm btn-block" onClick={(e) => editEvento(evento._id)}>
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
    </FadeIn>
  );
};