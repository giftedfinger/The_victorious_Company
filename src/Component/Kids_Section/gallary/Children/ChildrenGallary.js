import React from 'react';
import Card from '../../../../UI/Card'
import classes from './childrenGallary.module.css'




const ChildrenGallery = (props) => {

const children_Photos = props.ChildrenPhotos.map((el, i) => {
  return (
        <li>
                    <figure className={classes.galleryImage} index={i}>
                         <img src={el} alt='image1' />
                    </figure>
                </li>
  
  );
});

  return (
    <Card className={classes.gallery}>
      <h3 className={classes.galleryHeader}>{props.category}</h3>
      <p>These are our future and we make sure we invest in them by teaching them the word of God, morals and ways of life</p>
      
      <ul className={classes.galleryImages}>
        {children_Photos}
      </ul>
      
    </Card>
  );
};

export default ChildrenGallery;
