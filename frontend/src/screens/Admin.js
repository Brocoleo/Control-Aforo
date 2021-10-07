import React, {  useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from '../components/Administrador/Navbar/Navbar'
import Sidebar from '../components/Administrador/Sidebar/Sidebar'
import { Modulos } from "../components/Administrador/Modulos/Modulos";
import { Estudiantes } from "../components/Administrador/Estudiantes/Estudiantes";
import { Profesores } from "../components/Administrador/Profesores/Profesores";
import { Evento } from "../components/Administrador/Evento/Evento";
import Solicitudes from '../components/Administrador/Solicitudes/Solicitudes';
const API = process.env.REACT_APP_API;

const Admin = () => {
  let profes = [];
  let ramos = [];
  // eslint-disable-next-line
  const getTeachers = async () => {
    const res = await fetch(`${API}/teachers`);
    const data = await res.json();
    data.map((teacher) => (      
      profes.push({ value: `${teacher.name}`, label: `${teacher.name}`})       
    ))
  };
// eslint-disable-next-line
  const getRamos = async () => {
    const res = await fetch(`${API}/modulos`);
    const data = await res.json();
    data.map((modulo) => (      
      ramos.push({ value: `${modulo.ramo}`, label: `${modulo.ramo}`})       
    ))
  
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getTeachers(); 
    getRamos(); 
// eslint-disable-next-line
  }, [getTeachers, getRamos]);
    return (
      <Router>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className="container p-4 contenido">
        <Switch>
        <Route path='/admin'> <Solicitudes /> </Route>
          <Route path='/modulos'> <Modulos profes={profes}/></Route>
          <Route path="/estudiantes" component={Estudiantes} />
          <Route path="/profesores" component={Profesores} />
          <Route path='/evento'>
            {(ramos!=='' && profes!=='' && ramos!==null && profes!==null)? <Evento listaprofes={profes} listaramos={ramos}/>: <></>}
            
          </Route>
        </Switch>
        
        
      </div>
    </Router>

    )
}

export default Admin
