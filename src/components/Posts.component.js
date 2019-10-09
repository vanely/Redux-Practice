import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

//import actions that are being used
import {fetchPosts} from '../actions/actions';

class Posts extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props);
    const posts = this.props.posts.map((post) => {
      return (
        <div key={ post.id }>
          <h3>{ post.title }</h3>
          <p>{ post.body }</p>
        </div>
      );
    });

    return (
      <div>
        <h1>Posts</h1>
        { posts }
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object,
}

// state.posts is being calles that because that's what we named it in our combined reducers
const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});

export default connect(mapStateToProps, {fetchPosts})(Posts);