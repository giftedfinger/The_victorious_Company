// SermonList.js

import React from 'react';
import { Link } from 'react-router-dom';
import AnimationSection from '../../UI/IntersectionAnimation/Animation';

const SermonList = ({ sermons }) => {
  return (
    <div>
      <h1>Sermon List</h1>
      <ul>
        {sermons.map((sermon) => (
          <AnimationSection animationClass="fade-in">
          <li key={sermon.id}>
            <Link to={`/sermon/${sermon.id}`}>{sermon.title}</Link>
          </li>
          </AnimationSection>
        ))}
      </ul>

    </div>
  );
};

export default SermonList;
