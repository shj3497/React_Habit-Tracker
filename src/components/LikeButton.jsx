import React, { Component } from 'react'

class LikeButton extends Component {
  state={
    numberOfLikes: 0,
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <button>{this.state.numberOfLikes}</button>
    )
  }
}
export default LikeButton;