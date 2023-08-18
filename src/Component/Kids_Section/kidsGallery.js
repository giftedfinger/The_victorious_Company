import React from 'react'
import Card from '../../../src/UI/Card'

const kidsGallery=(props)=> {
  return (
    <Card>
             <ul className={props.kidsShowcase}>
                <li>
                    <figure className={props.kidsClass}>
                        <img src={props.kidsImg1} alt="Korean bibimbap with egg and vegetables" />
                    </figure>
                </li>
                <li>
                    <figure className={props.kidsClass}>
                        <img src={props.kidsImg2} alt="Simple italian pizza with cherry tomatoes" />
                    </figure>
                </li>
                <li>
                    <figure className={props.kidsClass}>
                        <img src={props.kidsImg3} alt="Chicken breast steak with vegetables" />
                    </figure>
                </li>
                <li>
                    <figure className={props.kidsClass}>
                        <img src={props.kidsImg4} alt="Autumn pumpkin soup" />
                    </figure>
                </li>
            </ul>
    </Card>
  )
}

export default kidsGallery
