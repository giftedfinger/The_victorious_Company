import React from 'react';
import classes from './About.module.css';
import AboutCard from './AboutCard';
import aboutContent from './aboutContent';
import Contact from '../Contact/Contact';
import Card from '../../UI/Card';
import BackgroundAnimation from '../header_container/header/Header'; 
// import AboutBg1 from '../../img/congregation.jpg';
import AboutBg2 from '../../img/congregation2.jpg';
import AboutBg3 from '../../img/congregation3.jpg';
import AnimationSection from '../../UI/IntersectionAnimation/Animation';

// import ErrorBoundary from '../../ErrorBoundery/ErrorBoundary';

const About = () => {
  const details = aboutContent.map((elm,i) => (

   <AnimationSection  animationClass="slide-up" index={i}>

    <AboutCard
    index ={i}
    
    layout={classes[elm.layout]}
    title={elm.title}
    
    content={elm.content}
    AboutTextStyle={classes[elm.AboutTextStyle]}
    ABoutImgStyle={classes[elm.ABoutImgStyle]}
    ABoutImg={elm.AboutImg}
    el = {elm.mision}   
    />
    </AnimationSection>

  
  ));
  
const backgroundImages = [ AboutBg2,AboutBg3];
const text = ['Welcome to Our About', 'Discover the Comfort'];

// console.log(backgroundImages)
  return (
    < >
    
            <BackgroundAnimation background={backgroundImages} position={classes.position} text={text} height={`95Vh`}/>;
     <main>``
      <h2 className={classes.About_header}>About Us</h2>

      <div className={classes.about}>
   
      {details}
  
      </div>
    {/* <Contact/> */}
    </main>


    </>
  );
};

export default About;
