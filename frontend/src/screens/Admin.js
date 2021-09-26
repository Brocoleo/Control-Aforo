import React, {  useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Estudiantes } from "../components/Estudiantes/Estudiantes";
import { Profesores } from "../components/Profesores/Profesores";
import { Evento } from "../components/Evento/Evento";
const API = process.env.REACT_APP_API;

const Admin = () => {
  let profes = [];
  const getTeachers = async () => {
    const res = await fetch(`${API}/teachers`);
    const data = await res.json();
    data.map((user) => (      
      profes.push({ value: `${user.name}`, label: `${user.name}`})       
    ))
  };

  useEffect(() => {
    getTeachers(); 

  }, [getTeachers]);
    return (
        <Router>
      <Navbar />
      <div className="container p-4">

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/estudiantes" component={Estudiantes} />
          <Route path="/profesores" component={Profesores} />
          <Route path='/evento'>
            <Evento profes={profes}/>
          </Route>
        </Switch>
        
        
      </div>
    </Router>

    )
}

export default Admin
