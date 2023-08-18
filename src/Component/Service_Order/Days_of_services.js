import React from 'react'

function Days_of_services(props) {

  return (
   <ul>
  <li >
    <ul className={props.classes.tableHeader}  > 
    <li>Service</li>
    <li>Day</li>
    <li>Time</li>
    </ul>
  </li>

  <li>
    <ul className={props.classes.tableRow}>
    <li>Digging Deep</li>
   <li>Tuesday</li>
   <li>6:30pm</li>

   </ul>
   </li>


  <li>
    <ul className={props.classes.tableRow}>
 
    <li>Faith Clinic</li>
   <li>Thursday</li>
   <li>6:30pm</li>
   </ul>
   </li>

  <li className='sunday_service'>
    <ul className={`${props.classes.tableRow} ${props.classes.sunday}`}>
   <li className='suday_service_header'>Glorious Service</li>
   <li>Sunday </li>
   
   <li>
    <ul className={props.classes.sundayServices}>
      <li>Workers Meeting </li> <li>| 7:0am</li></ul>
      <ul className={props.classes.sundayServices}><li>Sunday School </li> 
      <li>  | 8  :30am</li></ul>
      <ul className={props.classes.sundayServices}><li>Service </li> <li>| 9:30am</li></ul>
   </li>
   </ul>
   </li>
   </ul>
  )
}

export default Days_of_services
