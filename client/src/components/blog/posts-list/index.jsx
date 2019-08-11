import React from 'react';
import { PostItem } from '../../';

import './index.scss';

const PostsList = ({ items, onRemove }) => {
  return (
    <div className="post-items">
      {items ? items.map(post => <PostItem { ...post } onRemove={ onRemove } />) : 'Loading...'}
    </div>
  );
};

export default PostsList;
