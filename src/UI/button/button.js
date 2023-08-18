import React from 'react'
import './button.css'


const button = (props) => {
  return (
 <button  className={`btn  ${props.className}`} type={props.type} onClick={props.clicked} >  {props.Btn_text}</button>
  )
}

export default button
