import React, { Component } from 'react';
import LikeButton from './LikeButton'

class Test extends Component {
  handleClick= event => {
    console.log(event);
  }
  render() {
    return (      
      <LikeButton title={'Like'} onClick={this.handleClick}></LikeButton>
    );
  }
}

export default Test;