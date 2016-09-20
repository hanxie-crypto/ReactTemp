import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';



class App extends Component {
  constructor(props) {
    super(props);
  }
  getStyles() {
    const styles = {
      header: {
        width: '100%',
        height: '100',
        textAlign: 'center',
      },
    };
    return styles;
  }

 

  render() {
    const styles = this.getStyles();
    return (
        <div >
            {this.props.children}
        </div>
    );
  }
}

App.propTypes = {

};

function mapStateToProps(state) {
  return {

  };
}


export default connect(mapStateToProps)(App);
