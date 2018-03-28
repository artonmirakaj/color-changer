import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Box from '../components/box.js';

class BoxContainer extends Component {
  render() {
    return (
      <div>
        <Box 
        handleClick={this.props.loadColor}
        color={this.props.color} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, actions)(BoxContainer);
