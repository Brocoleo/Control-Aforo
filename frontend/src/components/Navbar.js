import React from 'react'
import logo from '../assets/aforo.png'
import {Link} from 'react-router-dom'

export const Navbar = () => (    
       
 
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <Link className="navbar-brand" to="/"> <img src={logo} alt="Commerce.js" height="60px" /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
        <Link className="nav-link" to="/">Evento</Link>        
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/profesores">Profesores</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/estudiantes">Estudiantes</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/about">About</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
)