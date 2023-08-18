import React from 'react'

const getBackgroundStyle = (backgroundImage, height)=>{
  
return {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat:'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: height || '90vh',
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
  };
  
}



export default getBackgroundStyle