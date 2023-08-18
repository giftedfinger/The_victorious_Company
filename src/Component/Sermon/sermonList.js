// SermonList.js

import React from 'react';
import { Link } from 'react-router-dom';

const SermonList = ({ sermons }) => {
  return (
    <div>
      <h1>Sermon List</h1>
      <ul>
        {sermons.map((sermon) => (
          <li key={sermon.id}>
            <Link to={`/sermon/${sermon.id}`}>{sermon.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SermonList;
