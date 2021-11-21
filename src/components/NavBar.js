import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {   
    return (
        <div className="navbar">           
             <NavLink to="/Home" className="nav-item">Home</NavLink>    
             <NavLink to="/shortlisted" className="nav-item">Short Listed</NavLink>
             <NavLink to="/rejected" className="nav-item">Rejected</NavLink>
        </div>
    )
}

export default NavBar
