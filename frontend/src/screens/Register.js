import React, { useState } from "react";
import logo from '../assets/aforo.png'
import { register } from '../components/UserFunction'
import { useHistory } from 'react-router-dom';

 const Register = () =>  {
    const history = useHistory();
    const [nombres, setNombres] = useState("")
    const [apellidos, setApellidos] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()

        const newUser = {
            name: nombres,
            lastname: apellidos,
            email: email,
            password: password
        }

        register(newUser).then(res => {
            history.push('/')
        })
      };
   
        return (

        <div className="auth-wrapper">
            <div className="auth-inner">
            <img src={logo} alt="Me Anoto" height="80px" style={{ marginLeft: '7%' }}/>
            <form onSubmit={handleSubmit}>
                <h3>Registrate</h3>

                <div className="form-group">
                    <label>Nombres</label>
                    <input type="text" className="form-control" placeholder="Ingresa tu numbre"
                    value={nombres} onChange={(e)=> setNombres(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Apellidos</label>
                    <input type="text" className="form-control" placeholder="Ingresa tu apellido" 
                     value={apellidos} onChange={(e)=> setApellidos(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Correo</label>
                    <input type="email" className="form-control" placeholder="Ingresa tu correo"
                    value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Ingresa una contraseña"
                     value={password} onChange={(e)=> setPassword(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Registrarme</button>
                <p className="forgot-password text-right">
                    <a href="/">Si ya estas registrado ingresa aqui</a>
                </p>
            </form>
         </div>
        </div>
    
        )  
    
}
export default Register
