import React from 'react'
import './rccg_logo.css'
import logo from '../../img/Rccg_logo.png'

const Rccg_logo =(props)=> {
  console.log(props.color)
  return (
        <div className={`logo ${props.color}`}> 
         <img src={logo} alt="RCCG logo"/> <h1> THE VICTORIOUS <br/>COMPANY PARISH </h1>
        </div>
  )
}

export default Rccg_logo
