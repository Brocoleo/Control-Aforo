import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EventosAsistente from '../components/Asistente/EventosAsistente/EventosAsistente';
import  InfoPersonal  from '../components/Asistente/InfoPersonal/InfoPersonal';
import  NavbarAsistente  from "../components/Asistente/NavbarAsistente/NavbarAsistente";
import SidebarAsistente from '../components/Asistente/SidebarAsistente/SidebarAsistente'
import jwt_decode from 'jwt-decode'
const API = process.env.REACT_APP_API;

const Asistente = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [lastname, setLastname] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    let [eventos, setEventos] = useState([]);

    const getEvento = async () => {
        const res = await fetch(`${API}/eventos`);
        const data = await res.json();
        setEventos(data);
      };

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        console.log(decoded.sub)
        setId(decoded.sub._id)
        setName(decoded.sub.name)
        setLastname(decoded.sub.lastname)
        setEmail(decoded.sub.email)
        setPassword(decoded.sub.password)
        getEvento();     
      }, [eventos]);

    return (
    <Router>
      <NavbarAsistente toggle={toggle}/>
      <SidebarAsistente isOpen={isOpen} toggle={toggle} />
       <div className="container p-4 contenido">
       <Switch>
          <Route path='/asistente'> <EventosAsistente eventos={eventos}/></Route>
          <Route path='/informacion'><InfoPersonal name={name} password={password} id={id} email={email} setId={setId} setName={setName} setEmail={setEmail} setPassword={setPassword}/></Route>   
        </Switch>     
      </div>
    </Router>

    )
}

export default Asistente
