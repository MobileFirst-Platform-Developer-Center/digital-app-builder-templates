import React from 'react';
import { withRouter } from "react-router-dom";
export class Settings extends React.Component {
 
  render() {
    return ( <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <h2 style={{
      fontFamily: 'Book Antiqua',
      color: '#091b40',
      marginLeft: '1em',
      fontWeight: '400',
      alignSelf: 'center',
      fontSize: '30px',
    }}>Define your App Settings Here ...</h2></div>)
  }
}

export default withRouter(Settings);
