import React from 'react';
import { withRouter } from "react-router-dom";
import './leftNav.css';
import { connect } from "react-redux"

function mapStateToProps(state) {
    return {
        selectedPage: state.selectedPage
    };
  }
export class LeftNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
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
          <div style={{backgroundColor: '#78abbb', minHeight: '100%'}}>
            <button className='btn' style={{marginTop: '2%'}} onClick={() => this.handleClick('/home','Home')}>Home</button>
            <button className='btn' onClick={() => this.handleClick('/list','List')}>List</button>
            <button className='btn' onClick={() => this.handleClick('/about','About')}>About</button>
            <button className='btn' onClick={() => this.handleClick('/settings','Settings')}>Settings</button>
            <button className='btn' onClick={() => this.props.history.push({pathname: '/'})}>Logout</button>
          </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(withRouter(LeftNav));
