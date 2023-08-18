import { useState, useEffect } from 'react';


const useBackgroundAnimation = (props) => {

 
  const [backgroundImage, setBackgroundImage] = useState(props.background[0]);
  const [displayText, setDisplayText] = useState(props.text[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * props.background.length);
      setBackgroundImage(props.background[randomIndex]);
      setDisplayText(props.text[randomIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, [props.background, props.text]);

  return [ backgroundImage, displayText ];
};

export default useBackgroundAnimation;
