  import React, { useState, useEffect } from 'react';
import  './Header.css'
import Nav from '../nav/nav'
import Button from '../../../UI/button/button'
import useBackgroundAnimation from '../../../UI/UseBackgroundAnimation'
import Glassmorphism from '../../../UI/glassmorphism/glassmorphism';



const BackgroundAnimation = (props) => {
  // const intervalDuration = 5000;

  const [backgroundImage, displayText] = useBackgroundAnimation(props);

  

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: '50%',
      backgroundPositionY: '20%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    transition: '0.2s ease-in',
    height: props.height, // Set the desired height of the background element
  };

  return (
  <>
    <Nav />
    <header style={backgroundStyle} className='height'>
      <Glassmorphism className='hero_text'>
        <p>{props.top_text}</p>
        <h1>
          {displayText}
        </h1>
        <p></p>
        <div>
          <Button Btn_text='Join Us' />
        </div>
      </Glassmorphism>
    </header>
  </>
);

  
}

export default BackgroundAnimation;