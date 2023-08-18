import { useState, useEffect } from 'react';

const useBackgroundAnimation = (props) => {
  const background =props.background
  const text  = props.text
  console.debug(background)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(background[currentIndex]);
  const [displayText, setDisplayText] = useState(text[currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % background.length);
    }, 8000); // Use a fixed interval duration for background change (e.g., 5000 milliseconds or 5 seconds)

    return () => clearInterval(interval);
  }, [background]);

  useEffect(() => {
    setBackgroundImage(background[currentIndex]);
    setDisplayText(text[currentIndex]);
  }, [background,text, currentIndex]);

  return [backgroundImage, displayText];
};

export default useBackgroundAnimation;
