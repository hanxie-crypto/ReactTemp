import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Index from '../components/Index';
import {bindActionCreators} from 'redux';
import * as helloaction from '../actions/helloaction';

class AppChild extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    const {dispatch} = this.props;
    return (
      <div>
        <Index {...bindActionCreators(helloaction,dispatch)} />
      </div>
    );
  }
}

AppChild.propTypes = {
  
};

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(AppChild);
