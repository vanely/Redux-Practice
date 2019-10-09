import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {createPost} from '../actions/actions';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    this.props.createPost(post);
    this.setState({
      title: '',
      body: '',
    });
  }

  render() {
    // console.log(this);
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title: </label>
            <input onChange={this.handleChange} type="text" name="title" value={this.state.title}/>
          </div>
          <div>
            <label>Body: </label>
            <textarea onChange={this.handleChange} name="body" value={this.state.body}/>
          </div>

          <input type="submit"/>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
}

export default connect(null, {createPost})(PostForm);