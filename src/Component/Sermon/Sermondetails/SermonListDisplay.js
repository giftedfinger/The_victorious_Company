import React ,{useState}from 'react'

import Sermons from './../sermons';
import classes from './SermonDetails.module.css';
import { FaYoutube } from 'react-icons/fa';
import { FaReadme } from 'react-icons/fa';
import Glassmorphism from '../../../UI/glassmorphism/glassmorphism';


function SermonListDisplay(props) {

     const [hoveredStates, setHoveredStates] = useState(Array(Sermons.length).fill(false));

  const handleMouseHover = (index) => {
    const updatedHoveredStates = [...hoveredStates];
    updatedHoveredStates[index] = true;
    setHoveredStates(updatedHoveredStates);
  };

  const handleMouseLeave = (index) => {
    const updatedHoveredStates = [...hoveredStates];
    updatedHoveredStates[index] = false;
    setHoveredStates(updatedHoveredStates);
  };

  
 return (<>
    

    { Sermons.map((sermon, index) => {
    const { id, title, preacher, date, passage, description, img } = sermon;
    return (
      <div
        className={classes.container}
        key={index}
        onMouseEnter={() => handleMouseHover(index)}
        onMouseLeave={() => handleMouseLeave(index)}
      >
        <img src={img} className={classes.img} alt={title} />
        
        <Glassmorphism
          className={`${classes.sermonLink} ${hoveredStates[index] ? classes.glassmorphismHover : ''}`}
        >
          <FaYoutube className={classes.icon} />
          <FaReadme className={classes.icon} />
        </Glassmorphism>

        <h5>Title: {title}</h5>
        <ul>
          <li>
            Preacher:   <span> {preacher}</span>
          </li>
          <li>
            Date:   <span> {date}</span>
          </li>
          <li>
          Passage: <span>  {passage}</span>
          </li>
          <li>
            Description: <span> {description}</span>
          </li>
        </ul>
      </div>
    );
  })
}
 

  </>
  )
}

export default SermonListDisplay
