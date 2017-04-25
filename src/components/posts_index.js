import React, {Component} from 'react';

class PostsIndex extends Component {
  componentWillMount() {
    // This is a lifecycle method (kinda constructor)
    //This will be a good time to create an action
      console.log('action creator here')
  }


  render() {
    return (
        <div>List of blog posts</div>
    );
  }
}

export default  PostsIndex;