import React, { useState } from "react";
import logo from '../assets/aforo.png'

 const Login = () =>  {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   
        return (

        <div className="auth-wrapper">
            <div className="auth-inner">
            <img src={logo} alt="Me Anoto" height="80px" style={{ marginLeft: '13%' }}/>
            <form>
                <h3>Registrate</h3>

                <div className="form-group">
                    <label>Correo</label>
                    <input type="email" className="form-control" value={email}
                    placeholder="Ingresa tu correo" onChange={(e)=> setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" value={password}
                    placeholder="Ingresa tu contraseña" onChange={(e)=> setPassword(e.target.value)}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Recuerdame</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Registrarme</button>
                <p className="forgot-password text-right">
                <a href="/#">Olvidaste  tu constraseña ?</a>
                </p>
            </form>
         </div>
        </div>
    
        )  
    
}
export default Login
