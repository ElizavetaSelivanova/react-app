import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { Post } from 'components';
import PostsListActions from 'modules/posts-lists/actions';

class PostContainer extends React.Component {
  componentDidMount() {
    const { post, postId, fetchItem } = this.props;
    if (!post) {
      fetchItem(postId);
    }
  }
  render() {
    const { post } = this.props;
    return !post ? (
      'Loading...'
    ) : (
      <Post
        text={ post && post.text }
        createdAt={ post && post.createdAt }
      />
    );
  }
}

const mapStateToProps = ({ posts }, { match }) => ({
  post: posts.items && posts.items.filter(post => post._id === match.params.id)[0],
  postId: match.params.id
});

export default withRouter(
  connect(
    mapStateToProps,
    PostsListActions,
  )(PostContainer)
);
