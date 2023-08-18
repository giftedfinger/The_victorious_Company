
import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import SermonList from './sermonList';
import SermonDetails from './Sermondetails/sermonDetails';
import Card from '../../UI/Card'
import './Sermon.css'
// import BackgroundAnimation from '../header_container/header/Header';
import sermons from './sermons';

const  SermonPage= () => {
 
const [sermonItem, setSermonItem] =useState(sermons)
const  [category,setCategory] =useState([]);

  return (
  <Card>

       <SermonDetails items={sermonItem}/>
          </Card>

    
  );
};

export default SermonPage;
