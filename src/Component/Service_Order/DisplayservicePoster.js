import React from 'react'
import digging_Deep from '../../img/digging_deeper.jpeg'
import faith_clinic from '../../img/sunday_service.jpeg'
import BackgroundAnimation from '../../UI/UseBackgroundAnimation'
function DisplayservicePoster() {
       const backgrounds = [faith_clinic, digging_Deep,sunday_service ];
    const texts = ['FAITH CLINIC!', 'DIGGIN DEEP', 'GLORIOUS SERVICE!'];

    const[background,text] = <BackgroundAnimation background={backgrounds} tex={texts}/>
  return (
    <div>
      
    </div>
  )
}

export default DisplayservicePoster
