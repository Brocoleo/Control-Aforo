import React from 'react'
import logo from '../assets/aforo.png'
import {Link} from 'react-router-dom'

export const NavbarAsistente = () => (    
       
 
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/"> <img src={logo} alt="Commerce.js" height="60px" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
     
      
    </div>
  </div>
</nav>
)