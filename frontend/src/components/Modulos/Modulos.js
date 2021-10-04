import React, { useState, useEffect } from "react";
import Select from 'react-select'


const API = process.env.REACT_APP_API;

const ramos = [
  { value: 'Intro a la Programacion', label: "Intro a la Programacion" },
  { value: "Calculo 1", label: "Calculo 1" },
  { value: 'Intro a la ICC', label: "Intro a la Programacion" },
  { value: "Teoria de Sistemas", label: "Teoria de Sistemas" },
  { value: 'Algebra', label: "Algebra" },
  { value: "Idioma Extranjero 1", label: "Idioma Extranjero 1" },
  { value: 'Autogestion del Aprendizaje', label: "Autogestion del Aprendizaje" },
  { value: "Algoritmos y Estructuras de Datos", label: "Algoritmos y Estructuras de Datos" },
  { value: 'Requisitos de Software', label: "Requisitos de Software'" },
  { value: "Construccion de Software", label: "Construccion de Software" },
];

const carreras = [
    { value: 'Ingenieria civil en Computacion', label: "Ingenieria civil en Computacion" },
    { value: 'Ingenieria civil en Mecanica', label: "Ingenieria civil en Mecanica" },
    { value: 'Ingenieria civil en Mecatronica', label: "Ingenieria civil en Mecatronica" },
    { value: 'Ingenieria civil Electrica', label: "Ingenieria civil Electrica" },
    { value: 'Ingenieria civil en Obras Civiles', label: "Ingenieria civil en Obras Civiles" },
    { value: 'Ingenieria civil Industrial', label: "Ingenieria civil Industrial" }
    
  ];

export const Modulos = (data) => {
    let initialCarrera = { carreraKey: null };
    let initialRamo = { ramoKey: null };
    const [id, setId] = useState(""); 
    const [capacidad, setCapacidad] = useState("");
    const [editing, setEditing] = useState(false);
    const [ramoNombre, setRamo] = useState(initialRamo);
    const [carreraName, setCarrera] = useState(initialCarrera);
    let [modulos, setModulos] = useState([]);


  const updateCarrera = value => {
    setCarrera({ ...carreraName, carreraKey: value });
  };

  const updateRamo = value => {
    setRamo({ ...ramoNombre, ramoKey: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let carrera = carreraName.carreraKey
    let ramo = ramoNombre.ramoKey
    if (!editing) {
      const res = await fetch(`${API}/modulos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            capacidad,
            ramo,
            carrera
        }),
      });
      await res.json();
    } else {
      const res = await fetch(`${API}/modulos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          capacidad,
          ramo,
          carrera
        }),
      });
      const data = await res.json();
      console.log(data);
      setEditing(false);
      setId("");
    }
    await getModulo();

    setCapacidad("");
    setRamo(initialRamo)
    setCarrera(initialCarrera);
  };

  const getModulo = async () => {
    const res = await fetch(`${API}/modulos`);
    const data = await res.json();
    setModulos(data);
  };

  const deleteModulo = async (id) => {
    const userResponse = window.confirm("Estas seguro que quieres eliminar ?");
    if (userResponse) {
      const res = await fetch(`${API}/modulos/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);
      await getModulo();
    }
  };

  const editModulo = async (id) => {
    const res = await fetch(`${API}/modulos/${id}`);
    const data = await res.json();
    setEditing(true);
    setId(id);

    // Reset
    setCapacidad(data.capacidad);
    initialRamo={ramoKey:data.ramo}  
    setRamo(initialRamo)
    initialCarrera={carreraKey:data.carrera}  
    setCarrera(initialCarrera)

  };

  useEffect(() => {
    getModulo(); 

  }, []);

  return (
    <div className="row">
      <div className="col-md-4">
      <h5>Formulario Modulo</h5>
        <form onSubmit={handleSubmit} className="card card-body">
          <div className="form-group">
            <input
              type="number"
              onChange={(e) => setCapacidad(e.target.value)}
              value={capacidad}
              className="form-control"
              placeholder="Capacidad"
            />
          </div>
          <div className="form-group">
          <Select             
              placeholder="Ramo"
              value={ramos.filter(({ value }) => value === (ramoNombre.ramoKey))}
              getOptionValue={({ value }) => value}
              onChange={({ value }) => updateRamo(value)}
              options={ramos}
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
              placeholder="Carrera"
              value={carreras.filter(({ value }) => value === (carreraName.carreraKey))}
              getOptionValue={({ value }) => value}
              onChange={({ value }) => updateCarrera(value)}
              options={carreras}
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
      
          <button className="btn btn-primary btn-block">
            {editing ? "Actualizar" : "Añadir"}
          </button>
        </form>
      </div>
      <div className="col-md-6 tabla">
      <h4>Informacion Modulos</h4>
        <table className="table table-responsive-sm table-secondary borderTable ">
          <thead className="table-dark ">
            <tr>
              <th>Capacidad</th>
              <th>Ramo</th>
              <th>Carrera</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {modulos.map((modulo) => (
              <tr key={modulo._id}>
                <td>{modulo.capacidad}</td>
                <td>{modulo.ramo}</td>
                <td>{modulo.carrera}</td>
                <td>
                  <button className="btn btn-secondary btn-sm btn-block" onClick={(e) => editModulo(modulo._id)}>
                    Editar
                  </button>
                  <button className="btn btn-danger btn-sm btn-block" onClick={(e) => deleteModulo(modulo._id)} >
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