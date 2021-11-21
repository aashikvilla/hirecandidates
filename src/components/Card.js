import React from 'react'
import { NavLink } from 'react-router-dom'

function Card({item}) {
    
    return (
        <div className="card">
            <NavLink style={{ textDecoration: 'none' ,color:'white'}} to={`/candidate/${item.id}`}>
            <img src={item.Image} alt={item.name} />
            <div className="card-container">
                <center>
                    <h1>{item.name}</h1>  
                </center> 
            </div>
            </NavLink>
         
        </div>
    )
}

export default Card
