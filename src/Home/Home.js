import React from 'react'
// import About from './About/About'
import BibleVerse from '../Component/BibleQuotes/BibleVerse'
// import Contact from '../Component/Contact/Contact'
import classes from './Home.module.css'
import Service from '../Component/Service_Order/Service_order'
import Staff from '../UI/Staff_section/Staff_section'
import HomePageAbout from '../Home/HomePage_about/HomePage_about'
import Reason from './Reason/reason'
import WelcomeHome from './WelcomeHome/WelcomeHome'
// header
import BackgroundAnimation from '../Component/header_container/header/Header'
import HomeBg1 from '../img/highly-spiritual.jpeg'
import HomeBg2 from '../img/Tvc_choir.jpg'


function Home() {

const backgroundImages = [HomeBg1, HomeBg2];
const text = ['Welcome Home', 'Discover the Comfort'];

  return (
    < >
    
            <BackgroundAnimation background={backgroundImages} text={text} height={classes.bgHeight}/>;

         <HomePageAbout/>
      <BibleVerse/>
      <Reason/>
      <Staff/>
          <Service/>
      {/* <Contact/> */}
      <WelcomeHome/>
    </>
  )
}

export default Home
