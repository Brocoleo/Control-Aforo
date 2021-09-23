import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Estudiantes } from "./components/Estudiantes/Estudiantes";
import { Profesores } from "./components/Profesores/Profesores";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="container p-4">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/estudiantes" component={Estudiantes} />
          <Route path="/profesores" component={Profesores} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
