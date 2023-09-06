// AnimationSection.js
import React, { useRef, useEffect, useState } from 'react';
import './animation.css'
const AnimationSection = ({ children, animationClass }) => {
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });

    observer.observe(sectionRef.current);

    return () => {
      observer.unobserve(sectionRef.current);
    };
  }, []);



  return (
    <section
      ref={sectionRef}
      className={`section ${isVisible ? animationClass : `${animationClass}-visible`}`}
    >
      {children}
    </section>
  );
};

export default AnimationSection;
