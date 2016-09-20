import React from 'react';

import { connect } from 'react-redux';



import  '../style/main.scss';

{{#material-ui}}
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Delete from 'material-ui/svg-icons/action/delete';
import {grey500,deepOrange500} from 'material-ui/styles/colors';
{{/material-ui}}

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
                {{#material-ui}}
                   <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                     <div style={styles.container}>
                      <FlatButton
                        icon={<ContentAdd />}
                        style={styles.add}

                      />
         
                     </div>
                   </MuiThemeProvider>
                {{/material-ui}}
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
