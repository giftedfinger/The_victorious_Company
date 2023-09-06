// SermonDetails.js

import React, { useState } from 'react';
import classes from './SermonDetails.module.css';
import BackgroundAnimation from '../../header_container/header/Header';
// import Sermons from './../sermons';
import sermon from '../../../img/preachingRotate.jpeg';
import Card from '../../../UI/Card';

import SermonListDisplay from './SermonListDisplay';
import AnimationSection from '../../../UI/IntersectionAnimation/Animation';

const SermonDetails = () => {
  const backgroundImages = [sermon, sermon];
  const texts = ['Your word is Light unto my path', 'Your word is Light unto my path'];
  const top_text = ' ';

 
  return (
    <>
      <BackgroundAnimation background={backgroundImages} position={classes.position} text={texts} top_text={top_text} height={`90vh`} />
      ;
      <Card>
        <h4 className={classes.sermonHeader}>Sermon Archives</h4>
        <AnimationSection animationClass="fade-in">

        <div className={classes.main}><SermonListDisplay /></div>
        </AnimationSection>
      </Card>
    </>
  );
};

export default SermonDetails;
