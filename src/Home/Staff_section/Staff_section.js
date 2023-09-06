import React, { useState,useEffect } from 'react'
import Card from '../../UI/Card'
import classes from './Staff_section.module.css'
// import StaffCard from './Staff_Card/StaffCard'
import pst_content from './Staff_Card/staff_content'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Example icons


import Button from '../../UI/button/button'







const Section2 = () => {

  const [Pastors, setPastor]=useState(pst_content)
  const [index, setIndex]=useState(0)

  // settin index to last index if index is less than 0
useEffect(()=>{
  const lastIndex = Pastors.length -1
  if(index <0 ) setIndex(lastIndex)
  if(index>lastIndex)setIndex(0)
},[index, Pastors])



useEffect(()=>{
  let slider =setInterval(()=>{
setIndex(index +1 )
  },5000)

  return ()=> clearInterval(slider)

},[index])



  const pastor_details=Pastors.map((pst,pstIndex)=>{
    const { id,name,img,about_pastor,post}= pst
    //  let position=' nextSlide'
       let opacity=0
     let translate='100%'

     if(pstIndex===index){
       translate ='0%'
       opacity=1
     }
     if(pstIndex===index-1 || (index==0 && pstIndex=== Pastors.length - 1)){
       translate ='-100%'
        //  opacity=0
    } 

const style ={
    transform: `translateX(${translate})`,
      opacity:`${opacity}`
}



    return(

    <article style={style}   >

      <img src={img}  alt='pastors pixture' className='person-img'/>
    

    <div className=''>
    
  
      <div className='title'>

          <h4>{name} </h4>
    <span >{post}</span>

    <p className='text'>{about_pastor} </p>
      </div> 
     
    </div>
    </article>
    
    )

})


  const next = () => {
    setIndex((prevIndex) => (prevIndex === Pastors.length - 1 ? 0 : prevIndex + 1));
  };

  const prev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? Pastors.length - 1 : prevIndex - 1));
  };

  return (
  <Card className={classes.cards} >


 <h2 className={classes['pastor_heading']}> Meet Our Pastors</h2>

<div className={classes.section}>
<div className={classes['section-center']}>

{pastor_details}
{/* <StaffCard  
pastors= {Pastors}
Index={index}
setIndex={setIndex}
/> */}
<Button className={classes.prev} Btn_text={<FaChevronLeft/>} clicked ={next}/>
<Button className={classes.next} Btn_text={<FaChevronRight/>}  clicked ={prev}/>


</div>
</div>
  </Card>
  )
}
export default Section2
