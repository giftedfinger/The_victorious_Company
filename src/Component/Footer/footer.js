import React from 'react'
// import Card from '../../UI/Card'
import  './Footer.css'
import RCCGLogo from '../../UI/RCCG_Logo/Rccg_logo'


const Footer = (props) => {


  const currentYear = new Date().getFullYear();


  return (
    
    <footer>
      < div className='footer'>
      <div className="Container">
        <div className="grid">
        <div className='griditem'> 
         <div className='logo_container '>  
         <RCCGLogo className='logo'/>
           </div>
        </div>
          <div className="griditem">
           <h3>Contact us</h3>
           <ul>
              <li>address: 312, borno way off hotel lawal</li>
              <li>tel: 08183435263</li>
              <li>email: olakunle.iyiola@yahoo.com</li>
              </ul>
          
          </div>
          <div className="griditem event_list"> 
           <ul>
            <li>About</li>
             <li>Services</li>
              <li>Sermons</li>
               <li>Kids</li>
                <li>Contact</li>
          </ul> 
          </div>
        <div className='griditem'>
            <h3>Our Social medials</h3>

               <ul>
            <li>Facebook</li>
             <li>Instagram</li>
              <li>Twitter</li>
            
          </ul> 
        </div>
        </div>
      </div>
      </div>
      <div className='footer_bottom'>
          <p>&copy; {currentYear} <span> The Victorious Company</span>. All rights reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;
