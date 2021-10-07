import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EventosAsistente from '../components/Asistente/EventosAsistente/EventosAsistente';
import  {InfoPersonal}  from '../components/Asistente/InfoPersonal/InfoPersonal';
import  NavbarAsistente  from "../components/Asistente/NavbarAsistente/NavbarAsistente";
import SidebarAsistente from '../components/Asistente/SidebarAsistente/SidebarAsistente'
const API = process.env.REACT_APP_API;

const Asistente = () => {
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
        getEvento();     
      }, [eventos]);

    return (
    <Router>
      <NavbarAsistente toggle={toggle}/>
      <SidebarAsistente isOpen={isOpen} toggle={toggle} />
       <div className="container p-4 contenido">
       <Switch>
          <Route path='/asistente'> <EventosAsistente eventos={eventos}/></Route>
          <Route path="/informacion" component={InfoPersonal} />   
        </Switch>     
      </div>
    </Router>

    )
}

export default Asistente
