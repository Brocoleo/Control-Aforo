import React, { useState, useEffect, useRef } from "react";

const API = process.env.REACT_APP_API;

export const InfoPersonal = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [editing, setEditing] = useState(true);
  const [id, setId] = useState("615103f5f37ea73d0d34c88b");

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
          email,
          password,
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
          email,
          password,
        }),
      });
      const data = await res.json();
      console.log(data);
      setEditing(false);
      setId("");
    }
    await getUsers();

    setName("");
    setEmail("");
    setPassword("");
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
          <label for="nombre" class="col-form-label">Nombre</label>
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
          <label for="email" class="col-form-label">Email</label>
          <div className="form-group">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="form-control"
              placeholder="Correo"
            />
          </div>
          <div className="form-group">
          <label for="contraseña" class="col-form-label">Contraseña</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="form-control"
              placeholder="Contraseña"
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