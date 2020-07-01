import React from 'react';
import { withRouter } from "react-router-dom";
import './landing.css';
export class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
      }

  render() {
    return (
      <React.Fragment>
      <div
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '15%',
          paddingTop: '0.4em',
          paddingBottom: '0.4em',
          backgroundColor: '#2a2096'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%'
          }}
        >
          <h2
            style={{
              fontFamily: 'Roboto Slab',
              color: '#ffffff',
              marginLeft: '1em',
              fontWeight: '400',
            }}
          >
           Hello &nbsp;<strong style={{ fontWeight: '900', fontSize: '30px'}}><i>{this.props.username}</i></strong>
          </h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginRight: '2em',
              width: '50%',
              justifyContent: 'flex-end'
            }}
          >
            <button className='btn' onClick={() => this.props.history.push({pathname: '/home'})}>Home</button>
            <button className='btn' onClick={() => this.props.history.push({pathname: '/list'})}>List</button>
            <button className='btn' onClick={() => this.props.history.push({pathname: '/about'})}>About</button>
            <button className='btn' onClick={() => this.props.history.push({pathname: '/settings'})}>Settings</button>
            <button className='btn' onClick={() => this.props.history.push({pathname: '/'})}>Logout</button>
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Landing);
