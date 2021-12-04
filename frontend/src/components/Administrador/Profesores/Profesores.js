import React, { useState, useEffect, useRef } from "react";
import FadeIn from 'react-fade-in';
const API = process.env.REACT_APP_API;

export const Profesores = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState("");

  const nameInput = useRef(null);

  let [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editing) {
      const res = await fetch(`${API}/teachers`, {
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
      const res = await fetch(`${API}/teachers/${id}`, {
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
    const res = await fetch(`${API}/teachers`);
    const data = await res.json();
    setUsers(data);
  };

  const deleteUser = async (id) => {
    const userResponse = window.confirm("Estas seguro que desear eliminar ?");
    if (userResponse) {
      const res = await fetch(`${API}/teachers/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);
      await getUsers();
    }
  };

  const editUser = async (id) => {
    const res = await fetch(`${API}/teachers/${id}`);
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
  }, []);

  return (
    <FadeIn>
    <div className="row">
      <div className="col-md-4">
      <h5>Formulario Profesor</h5>
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
      <div className="col-md-6 tabla">
      <h4>Informacion Profesores</h4>
        <table className="table table-responsive-sm table-secondary borderTable">
          <thead >
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody className="table-dark">
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
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
    </FadeIn>
  );
};