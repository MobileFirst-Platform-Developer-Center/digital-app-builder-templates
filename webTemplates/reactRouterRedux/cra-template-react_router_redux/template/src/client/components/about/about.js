import React from 'react';
import { withRouter } from "react-router-dom";
export class About extends React.Component {
 
  render() {
    return ( <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <h2 style={{
      fontFamily: 'Book Antiqua',
      color: '#091b40',
      marginLeft: '1em',
      fontWeight: '400',
      alignSelf: 'center',
      fontSize: '30px',
    }}>Describe you App here...</h2></div>)
  }
}

export default withRouter(About);
