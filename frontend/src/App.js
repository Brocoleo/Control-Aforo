import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from "./screens/Admin";
import Asistente from "./screens/Asistente";
import Login from "./screens/Login";
import Register from "./screens/Register";





function App() {
  return (
    <Router>
      <Switch>
            <Route path="/admin">
            <Admin />
            </Route>
            <Route path="/asistente">
            <Asistente />
            </Route>
            <Route path="/registrar">
            <Register />
            </Route>
            <Route path="/">
            <Login />
            </Route>
            
        </Switch>
      </Router>
   
   
  );
}

export default App;
