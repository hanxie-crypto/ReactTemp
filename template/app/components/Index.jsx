import React from 'react';

import { connect } from 'react-redux';



import  '../style/main.scss';

class  Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showAccountsIcon:true,
      modalIsOpen: false
    }
  }
  componentDidMount() {

  }
  handleChange() {

  }
  getStyles() {
        const styles = {
            wrapper: {
                width: '1150',
                marginLeft: 'auto',
                marginRight: 'auto',
            },
            container: {
              position: 'relative',
              width: '800px',
              padding: '20px',
              marginTop: '40px',
              marginLeft: 'auto',
              marginRight: 'auto',
            },
            add: {
                width: '110px',
                height: '110px',
                lineHeight: '110px',
                textAlign: 'center',
            },
        };
        return styles;
  }
  render() {
    const styles = this.getStyles();
    return ( 
            <div style={styles.wrapper}>
                <div className="test"></div>
            </div>);
  }
}
Index.propTypes = {
  
};

function mapStateToProps(state) {
  return {
    
  };
}

export default connect(mapStateToProps)( Index);
