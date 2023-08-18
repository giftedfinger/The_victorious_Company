import React from 'react'
import Card from '../../UI/Card'

const KidsSundaySchool=(props)=> {
  return (
  <Card>
<img src={props.ClassImg} alt='sunday School image'/>

<h4> {props.Age}</h4>
<p>{props.content}</p>
</Card>
  )
}

export default KidsSundaySchool
