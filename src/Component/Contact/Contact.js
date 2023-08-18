import React from 'react'
import Card from '../../UI/Card'
// import Map from '../../UI/Map/map'
import BackgroundAnimation from '../header_container/header/Header'; 

import AboutBg1 from '../../img/download2.jpeg';
import AboutBg2 from '../../img/download1.jpeg';

import './Contact.css'
import Form from './form/Form'

const  Contact= () => {
 
const backgroundImages = [AboutBg1, AboutBg2];
const text = ['Welcome to Our Contact', 'Discover the Comfort'];

  return (

     <Card className ='container Section2 '>
            <BackgroundAnimation background={backgroundImages} text={text} />;
 

<h2>  Join Us</h2>


{/* <Map/> */}

<Form/>
  </Card>
  )
}
export default Contact