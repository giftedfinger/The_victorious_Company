import React from 'react'
import Card from '../../UI/Card'
import classes from './reason.module.css'
function reason() {
  return (
    <Card>
 
     
           <div className={classes.topic}>
             <h4 className={classes.topicHeader}> Come and have encounter with <span> God</span> who Knows our: </h4>
             </div>

              <div className={classes.container}>  
      <div className={classes.past}> 
      
      <h5>Past</h5>
      <p> and he is ready to give us a new beginning</p>
      </div>


      <div className={classes.present}>
        <h5>Present </h5>
      <p>and ready to help us on our journey of life</p> 
      </div>

      <div className={classes.future}>
        <h5>future</h5>
        <p>And also has plans for us</p>
         </div>
      </div>

      
    </Card>
    
  )
}

export default reason
