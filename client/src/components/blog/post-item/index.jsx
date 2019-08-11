import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const PostItem = ({ title, createdAt, _id, onRemove }) => (
  <div className="post-item">
    <Link to={`/post/${_id}`}>
      <h2>{ title }</h2>
    </Link>
    <div className="post-info">
      <div className="post-date">
        Posted on { createdAt }
      </div>
      <div className="post-actions">
        <div
          className="remove"
          onClick={ onRemove.bind(this, _id) }
        >
          Remove
        </div>
        <Link to={`/post/${_id}/edit`}>
          Edit
        </Link>
      </div>
    </div>
  </div>
);

export default PostItem;
