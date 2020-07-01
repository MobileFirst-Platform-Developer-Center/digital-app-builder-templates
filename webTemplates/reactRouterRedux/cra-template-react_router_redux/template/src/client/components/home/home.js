import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux"

function mapStateToProps(state) {
    return {
        selectedPage: state.selectedPage
    };
  }
export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleClick = this.handleClick.bind(this);
      }
    handleClick(path,page) {
        this.props.dispatch({ type: "SELECTED_PAGE",selectedPage: page});
        console.log(this.props);
        this.props.history.push({pathname: path});
      }
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
                marginBottom: '13%'
            }}
        >
            <div style={{marginRight: '4%',position: 'relative', cursor: 'pointer'}} onClick={() => this.handleClick('/list','List')}>
                <img src={require("../../assets/no-image.png")} alt="Avtar" style={{position: "absolute"}}></img>
                <div style={{ position: 'relative', width: '100%', marginLeft: '10%'}}>
                    <h2 style={{color: '#588af5', marginBottom: '4%'}}>List</h2>
                    <h4 style={{color: '#588af5', marginTop: 'unset'}}>List Your Items Here</h4>
                </div>
            </div>
            <div style={{marginLeft: '4%',position: 'relative', cursor: 'pointer'}} onClick={() => this.handleClick('/about','About')}>
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
            <div style={{position: 'relative', cursor: 'pointer'}} onClick={() => this.handleClick('/settings','Settings')}>
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

export default connect(mapStateToProps)(withRouter(Home));
