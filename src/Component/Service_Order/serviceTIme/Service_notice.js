import React from 'react'
import Card from '../../../UI/Card'
import Classes from './service_notice.module.css'

const  Service_notice =()=> {


  
    return (
      < Card className={Classes.container}>
     <h4>Join us for any of these services </h4>
        <ul>
            <li> Every: </li>
            <li> <span>Tuesdays</span> : 6:30pm </li>
            <li> <span>Thursday</span> : 6:30pm </li>
            <li> <span>Sunday</span> : 9:30am </li>
                
        </ul>
      </ Card>
    )
  }

export default Service_notice
