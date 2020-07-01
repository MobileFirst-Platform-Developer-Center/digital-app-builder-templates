import React from 'react';
import { withRouter } from "react-router-dom";
export class About extends React.Component {
 
  render() {
    return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <h2 style={{
      fontFamily: 'Roboto Slab',
      color: '#ffffff',
      marginLeft: '1em',
      fontWeight: '400',
      alignSelf: 'center',
      fontSize: '30px',
    }}>Desribe your App Here ...</h2></div>)
  }
}

export default withRouter(About);
