import { useState,React} from 'react';
import Card from '../../UI/Card';
import Button from '../../UI/button/button';
// import KidsGallery from './Kids_Section/kidsGallery';
import ChildrenGallery from './gallary/Children/ChildrenGallary';

import classes from './Kids_Section.module.css';
// import img3 from '../../img/images1.jpeg';
import BackgroundAnimation from '../header_container/header/Header';
import HomeBg1 from '../../img/daisy1.jpg'
import HomeBg2 from '../../img/childrenChorg2.jpg'
import youth1 from '../../img/Youth.jpg'


// import Contact from '../Contact/Contact';
import YoungGenerations from './gallary/ChidrenData'



const Kids_Section = () => {
  
    const [selectedItem, setSelectedItem] = useState('Children');
      const [activeButton, setActiveButton] = useState('Children');
    // Active 
 const backgroundImages = [HomeBg1, HomeBg2,youth1];
const texts = ['Building a generation that seek God ', 
'Leading them to God at a tender age'];


  const handleClick = (event,Btn_text) => {
    if (event.target.tagName === 'BUTTON') {
      const selectedItem = event.target.textContent.trim();
      setSelectedItem(selectedItem);
    setActiveButton(selectedItem)
   
    }
  };
  
  return (
    <Card className={`${classes.Section} ${classes.Kids_Section}`} >

       <BackgroundAnimation background={backgroundImages} text={texts} position={classes.position} height ={`95vh`} />;

          <h2 className={classes.Kids_Header}>Kids Page</h2>

          <main className={classes.main}>
         <div className={classes.Kids_Topic}> 
         <h3>Raising the next generation to know and live for God.</h3>
         
         
     <div  className={classes.buttonContainer} onClick={handleClick}>

<Button  type='button' className={`${classes.button} ${ activeButton === 'Children' ? classes.activeButton : ''} `} Btn_text='Children' />
<Button type='button' className={`${classes.button} ${ activeButton === 'Teens' ? classes.activeButton : ''} `} Btn_text='Teens'/>
<Button type='button' className={`${classes.button} ${ activeButton === 'Youths' ? classes.activeButton : ''} `} Btn_text='Youths'/>


      </div>
         
         </div>
        

<div className={classes.container} >
        
          <div>
         {selectedItem === 'Children' && (
  <div className={classes.Our_futures}>

<ChildrenGallery ChildrenPhotos ={YoungGenerations.Children} category={selectedItem}/>

  </div>
)}

            {selectedItem === 'Teens' && (
              <div className={classes.Our_futures}>
            
<ChildrenGallery ChildrenPhotos ={YoungGenerations.Teen} category ={selectedItem}/>
              </div>
            )}
            
            {selectedItem === 'Youths' && (
              <div className={classes.Our_futures}>
                <ChildrenGallery ChildrenPhotos ={YoungGenerations.Youth} category ={selectedItem}/>

              </div>
            )}

          </div>
     

</div>

</main>
    {/* <Contact/> */}
   </Card>
  );
};

export default Kids_Section;
