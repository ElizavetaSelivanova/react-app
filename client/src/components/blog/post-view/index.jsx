import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const Post = ({ text, createdAt }) => (
  <div className="post">
    <div className="container">
      <Link to="/">
        <button className="btn btn-primary">Back</button>
      </Link>
      <div className="post-details">
        <div className="post-date">
          Posted on { createdAt }
        </div>
      </div>
      <div className="post-text">
        { text }
      </div>
    </div>
  </div>
);

export default Post;
