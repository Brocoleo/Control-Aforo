import React, { useState } from "react";
import logo from '../assets/aforo.png'
import { login } from '../components/UserFunction'
import { useHistory } from "react-router-dom";

 const Login = () =>  {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = {
            email: email,
            password: password
        }

        login(user).then(res => {
            console.log(res)
            if (!res.error) {
                history.push(`/asistente`)
            }
        })
      };
   
        return (

        <div className="auth-wrapper">
            <div className="auth-inner">
            <img src={logo} alt="Me Anoto" height="80px" style={{ marginLeft: '7%' }}/>
            <form onSubmit={handleSubmit}>
                <h3>Inicia Sesión</h3>

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

                

                <button type="submit" className="btn btn-primary btn-block" >Iniciar Sesion</button>
                <p className="forgot-password text-right">
                <a href="/#">Olvidaste  tu constraseña ?</a>
                </p>
                <a href="/registrar"><h6 className="text-center register">Registrate ingresando aqui</h6></a>
            </form>
         </div>
        </div>
    
        )  
    
}
export default Login
