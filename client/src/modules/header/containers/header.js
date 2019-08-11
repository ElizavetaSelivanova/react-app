import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Header } from 'components';

const mapStateToProps = ({ posts }, { location: { pathname } }) => {
  const postId = pathname.split('/post/')[1];
  return !posts.items ? {} : posts.items.filter(post => post._id === postId)[0];
};

Header.defaultProps = {
  title: 'Test app',
  description: 'Test app',
  imageUrl: ''
};

export default withRouter(connect(mapStateToProps)(Header));
