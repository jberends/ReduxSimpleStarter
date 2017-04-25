import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from "../actions/index";

class PostsIndex extends Component {
  componentWillMount() {
    // This is a lifecycle method (kinda constructor)
    // This will be a good time to create an action
      this.props.fetchPosts();
  }

  render() {
    return (
        <div>List of blog posts</div>
    );
  }
}

export default connect(null, {fetchPosts})(PostsIndex);