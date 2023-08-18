import React from 'react'
import Button from '../../UI/button/button'
import Card from '../../UI/Card'
import classes from './welcomeHome.module.css'

function WelcomeHome() {


const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.188440135131!2d3.375005121517965!3d6.4978116502062875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c61883bfa57%3A0xb1d78fd7a55a78ef!2s329%20Borno%20Way%2C%20Alagomeji-Yaba%20101245%2C%20Lagos!5e0!3m2!1sen!2sng!4v1690451723230!5m2!1sen!2sng';
  const mapCoordinates = '6.497701666417319, 3.3754650199855405'; // Latitude and Longitude of the desired location
  const zoomLevel = 75; // Adjust the zoom level (1 to 21) for the map

  return (
    <Card>
    <div className={classes.container}>
      <div className={classes.map}>
        <iframe
          src={`${mapUrl}&center=${mapCoordinates}&zoom=${zoomLevel}`}
          width="100%"
          height="460"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

  

            <div className={classes.comeHome}>
      <h4>JOIN US</h4>
      <p>Click on the <span>Join us</span> button to Visit Us</p>
      <Button className={classes.button} Btn_text='JOIN US'/>
      </div>
      </div>
    </Card>

  )
}

export default WelcomeHome
