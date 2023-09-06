   
import React,{useEffect} from 'react'

import classes from   './Staff_Card.module.css'
import { FaQuoteRight } from 'react-icons/fa';




const StaffCard=(props) =>{
  // settin props.index to last props.index if props.index is less than 0
useEffect(()=>{
  const lastIndex = props.Pastors.length -1
  if(props.index <0 ) props.setIndex(lastIndex)
  if(props.index>lastIndex)props.setIndex(0)
},[props.index, props.Pastors])



useEffect(()=>{
  let slider =setInterval(()=>{
props.setIndex(props.index +1 )
  },3000)

  return ()=> clearInterval(slider)

},[props.index])



  const pastor_details=props.pastors.map((pst,pstIndex)=>{
    const { id,name,img,about_pastor,post}= pst
    //  let position=' nextSlide'
       let opacity=0
     let translate='100%'

     if(pstIndex===props.index){
       translate ='0%'
       opacity=1
     }
     if(pstIndex===props.index-1 || (props.index==0 && pstIndex=== props.Pastors.length - 1)){
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

return(
    
{pastor_details}


)
}

export default StaffCard

