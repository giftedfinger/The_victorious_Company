import React from 'react';
import Card from '../../UI/Card';
import classes from './Service_Order.module.css';
import DaysOfServices from './Days_of_services';
import sunday_service from '../../img/sunday_service.jpeg';
import digging_Deep from '../../img/digging_deeper.jpeg';
import faith_clinic from '../../img/sunday_service.jpeg';

import useBackgroundAnimation from '../../UI/UseBackgroundAnimation';

const Service_Order = () => {

  const background = [faith_clinic, digging_Deep, sunday_service];
  const text = ['FAITH CLINIC!', 'DIGGIN DEEP', 'GLORIOUS SERVICE!'];

  const [backgroundImage, displayText] = useBackgroundAnimation({ background, text });



  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    transition: '0.2s ease-in',
    height: 'desired-height', // Set the desired height of the background element
  };

  return (
    <Card className={classes.container}>
      <h2 className={classes.servicesheader}>Regular Services </h2>

      <div className={classes['split_Screen']}>
        <div className={classes.table}>
          <DaysOfServices classes={classes} />
        </div>

        <div className={`${classes.table_sideBlue}`}  style={backgroundStyle}>
        
        </div>
      </div>
    </Card>
  );
};

export default Service_Order;
