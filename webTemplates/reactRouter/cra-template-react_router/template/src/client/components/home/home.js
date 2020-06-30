import React from 'react';
import { withRouter } from "react-router-dom";

export class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ width: '100%', height: '100%', marginTop: '4%'}}>
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '10%'
            }}
        >
            <div style={{marginRight: '3%',position: 'relative', cursor: 'pointer'}} onClick={() => this.props.history.push({pathname: '/list'})}>
                <img src={require("../../assets/no-image.png")} alt="Avtar" style={{position: "absolute"}}></img>
                <div style={{ position: 'relative', width: '100%', marginLeft: '10%'}}>
                    <h2 style={{color: '#588af5', marginBottom: '4%'}}>List</h2>
                    <h4 style={{color: '#588af5', marginTop: 'unset'}}>List Your Items Here</h4>
                </div>
            </div>
            <div style={{marginLeft: '3%',position: 'relative', cursor: 'pointer'}} onClick={() => this.props.history.push({pathname: '/about'})}>
                <img src={require("../../assets/no-image.png")} alt="Avtar" style={{position: "absolute"}}></img>
                <div style={{ position: 'relative', width: '100%', marginLeft: '10%'}}>
                    <h2 style={{color: '#588af5', marginBottom: '4%'}}>About</h2>
                    <h4 style={{color: '#588af5', marginTop: 'unset'}}>Describe your App Here</h4>
                </div>
            </div>
        </div>
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div style={{position: 'relative', cursor: 'pointer'}} onClick={() => this.props.history.push({pathname: '/settings'})}>
                <img src={require("../../assets/no-image.png")} alt="Avtar" style={{position: "absolute"}}></img>
                <div style={{ position: 'relative', width: '100%', marginLeft: '10%'}}>
                    <h2 style={{color: '#588af5', marginBottom: '4%'}}>Settings</h2>
                    <h4 style={{color: '#588af5', marginTop: 'unset'}}>Define your App Settings <br /> Here</h4>
                </div>
            </div>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Home);
