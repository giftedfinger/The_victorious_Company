
import React from 'react'
import {NavLink} from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import   './nav.css'
   import Button from '../../../UI/button/button'
import Logo from '../../../UI/RCCG_Logo/Rccg_logo'

const   nav = (props) => {
  return (
    <nav className='nav'  >
        <Logo color='navLogo'/>
      <FaBars className='navIcon'/>

      
                <ul className='nav__link'>
                <li >
                    <NavLink className='navGlass' activeClassName='active navGlass' to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink  to="/About">About</NavLink>
                </li>
            
                   <li >
                    <NavLink  to="/sermon">Sermons</NavLink>
                </li>
                   <li>
                    <NavLink to="/kids">Future Generations</NavLink>
                </li>

                    <li>
                    <NavLink to="/service">Donate</NavLink>
                </li>

                <li>          <NavLink to="/contact">

             <Button Btn_text='Join Us '  className='btn' />
             
              </NavLink>    </li>
                
                </ul>

             
                    
            
    </nav>
  )
}

export default nav
