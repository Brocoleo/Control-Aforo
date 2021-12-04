import React, { useState, useEffect, useRef } from "react";

const API = process.env.REACT_APP_API;

 const InfoPersonal = ({name,lastname, password,id, email, setId, setName, setLastname, setEmail, setPassword}) => {


   const [editing, setEditing] = useState(true);
  const nameInput = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editing) {
      const res = await fetch(`${API}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          lastname,
          email
        }),
      });
      await res.json();
    } else {
      const res = await fetch(`${API}/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          lastname,
          email
        }),
      });
      const data = await res.json();
      console.log(data);
      setEditing(false);
      setId("");
    }
    await getUsers();

    setName("");
    setLastname("");
    setEmail("");
    nameInput.current.focus();
  };

  const getUsers = async () => {
    const res = await fetch(`${API}/users/${id}`);
    const data = await res.json();

    setEditing(true);
    setId(id);

    // Reset
    setName(data.name);
    setEmail(data.email);
    setPassword(data.password);
    nameInput.current.focus();
  };





  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="row">
      <div className="col-md-6 info">
      <h5>Informacion Personal</h5>
        <form onSubmit={handleSubmit} className="card card-body">
          <div className="form-group">
          <label for="nombre" className="col-form-label">Nombre</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="form-control"
              placeholder="Nombre"
              ref={nameInput}
              autoFocus
            />
          </div>

          <div className="form-group">
          <label for="lastname" className="col-form-label">Apellidos</label>
            <input
              type="text"
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
              className="form-control"
              placeholder="Apellidos"
            />
          </div>

          <label for="email" className="col-form-label">Email</label>
          <div className="form-group">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="form-control"
              placeholder="Correo"
            />
          </div>
          <button className="btn btn-primary btn-block">
            {editing ? "Guardar" : "Añadir"}
          </button>
        </form>
      </div>
     
    </div>
  );
};

export default InfoPersonal