import React, {  useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Modulos } from "../components/Modulos/Modulos";
import { Estudiantes } from "../components/Estudiantes/Estudiantes";
import { Profesores } from "../components/Profesores/Profesores";
import { Evento } from "../components/Evento/Evento";
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

  useEffect(() => {
    getTeachers(); 
    console.log(profes)
    getRamos(); 
    console.log(ramos)
// eslint-disable-next-line
  }, [getTeachers, getRamos]);
    return (
        <Router>
      <Navbar />
      <div className="container p-4">

        <Switch>
          <Route path='/modulos'>
            <Modulos profes={profes}/>
          </Route>
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
