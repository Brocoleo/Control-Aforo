import React, { useState, useEffect, useRef } from "react";

const API = process.env.REACT_APP_API;

export const Estudiantes = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState("");

  const nameInput = useRef(null);

  let [users, setUsers] = useState([]);

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
    const res = await fetch(`${API}/users`);
    const data = await res.json();
    setUsers(data);
  };

  const deleteUser = async (id) => {
    const userResponse = window.confirm("Estas seguro que quieres eliminar ?");
    if (userResponse) {
      const res = await fetch(`${API}/users/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);
      await getUsers();
    }
  };

  const editUser = async (id) => {
    const res = await fetch(`${API}/users/${id}`);
    const data = await res.json();

    setEditing(true);
    setId(id);

    // Reset
    setName(data.name);
    setLastname(data.lastname);
    setEmail(data.email);
    nameInput.current.focus();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="row">
      <div className="col-md-4">
      <h5>Formulario Estudiante</h5>
        <form onSubmit={handleSubmit} className="card card-body">
          <div className="form-group">
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
            <input
              type="text"
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
              className="form-control"
              placeholder="Apellidos"
              autoFocus
            />
          </div>
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
            {editing ? "Actualizar" : "Añadir"}
          </button>
        </form>
      </div>
      <div className="col-md-6 tabla  ">
      <h4>Informacion Estudiantes</h4>
        <table className="table table-responsive-sm table-secondary borderTable">
          <thead className="table-dark">
            <tr>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>
                  <button className="btn btn-warning btn-sm btn-block" onClick={(e) => editUser(user._id)}>
                    Editar
                  </button>
                  <button className="btn btn-danger btn-sm btn-block" onClick={(e) => deleteUser(user._id)} >
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