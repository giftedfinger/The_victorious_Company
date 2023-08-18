import React from 'react'


const AboutCard=(props)=> {
  
const missionList =props.el
const mission = missionList.map((el,i) => { 
  return <li>{` ${i+1}. ${el}`}</li>
  });


console.log(mission)

  return (
    <>
      <div className={props.layout}>
  <div className={props.AboutTextStyle}>
   <h3>{props.title}</h3> 
   <div>
   <p> {props.content}</p>
<ul> {mission} </ul>
   </div>
   
   </div>
  <div className={`${props.ABoutImgStyle}  ${props.imgClass} `}> 
  <img src={props.ABoutImg} alt='who we are'/>
  </div>
  </div>
  </>

  )
}

export default AboutCard
