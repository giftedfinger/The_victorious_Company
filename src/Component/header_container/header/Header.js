  import React, { useRef,useEffect,useState } from 'react';
import  './Header.css'
import Nav from '../nav/nav'
import Button from '../../../UI/button/button'
import useBackgroundAnimation from '../../../UI/UseBackgroundAnimation'
import Glassmorphism from '../../../UI/glassmorphism/glassmorphism';
// import glassmorphism from '../../../UI/glassmorphism/glassmorphism';



const BackgroundAnimation = (props) => {

const myRef = useRef();
// console.log('myRef', myRef)
  const [elementIsVisible, setElementIsVisible] = useState(false);
console.log('is intersected', elementIsVisible)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      // Use entry.isIntersecting to determine if the element is visible
      setElementIsVisible(entry.isIntersecting);
    });

    // Ensure the observer is observing the correct element
   const observers = observer.observe(myRef.current);
// console.log('observer' ,observers,myRef.current)
    // Cleanup the observer when the component unmounts
    // return () => {
    //   observer.unobserve(myRef.current);
    // };
  }, []); // Empty dependency array means this effect runs once, like componentDidMount



  const [backgroundImage, displayText] = useBackgroundAnimation(props);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: '50%',
      backgroundPositionY: '10%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    transition: '0.2s ease-in',
    height: props.height, // Set the desired height of the background element
    
  };

    const navStyle = {
    // Add your sticky Nav styles here
    position: elementIsVisible ? 'static' : 'fixed', // Make it sticky when needed
    top: elementIsVisible ? '0' : 'auto', // Adjust top position accordingly
    width: '100%',
      zIndex: elementIsVisible ? '1000' : 'auto', // Adjust the z-index value as needed
  zIndex: !elementIsVisible ? '1000' : 'auto',
  boxshadow:' 0 4px 30px rgba(0, 0, 0, 0.1)',
  background:!elementIsVisible?'rgba(255, 0, 0, .35)':'rgba(255, 255, 255, .2)',
backdropfilter:!elementIsVisible ? 'blur(50%)': 'blur(50px)',
// webkitbackdropfilter: 'blur(5px)'

  };



  
  return (
  <div ref={myRef}>
 
    <header   className= 'header'style={backgroundStyle} >
      <Glassmorphism style={navStyle} className='glassmorphism'> 
        <Nav style={navStyle}  />
         </Glassmorphism>
      <Glassmorphism className={` ${props.position} hero_text`}>
        <p>{props.top_text}</p>
        <h1>
          {displayText}
        </h1>
        <p></p>
        <div>
          <Button className='heroBUtton' Btn_text='Join Us' />
        </div>
      </Glassmorphism >
    </header>
  </div>
);

  
}

export default BackgroundAnimation;