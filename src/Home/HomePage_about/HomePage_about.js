import React from 'react'
import {Link} from 'react-router-dom'

import classes from './Homepage_about.module.css'
import pix from '../../img/sisTunde.jpg'
import pix2 from '../../img/sisIFY.jpg'
import Button from '../../UI/button/button'
import Card from '../../UI/Card'
function HomePage_about() {
  return (
    <Card className={classes.main}>

      <div className={classes.about}>
    
        <div>


<h3> We preach the <span className={classes.verse}>Word</span> to save the world </h3>
         <p>
    In the beginning was the <span>Word</span>, and the <span>Word</span> was with God and the <span>Word</span> was God.
     <span className={classes.verse}> John 1:1</span>
 </p>
    



 {/* <p>
    An the Word was made flesh, and dwelt among us,(and we beheld His glory, the glory as 
    of the begotten of the Father) Full of grace and truth.
    <span>John 1:14</span>
 </p> */}
</div>

<Link  to="/About">
<Button Btn_text='ABOUT US ' className={classes.button}/>
</Link >

      </div>

            <div className={classes.aboutImg}>
<img src={pix2} title='about_pix'/>
<img src={pix} className={classes.pix2} title='about_pix'/>

      </div>

    </Card>
  )
}

export default HomePage_about
