import React from 'react';
import './login.css';
import { connect } from "react-redux"
import { withRouter } from "react-router-dom";

function mapStateToProps(state) {
    return {
        username: state.username
    };
  }
export class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
      };
      this.updateInputValue = this.updateInputValue.bind(this);
      this.updatePasswordValue = this.updatePasswordValue.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
    }
    handleClick() {
      this.props.dispatch({ type: "UPDATE_USERNAME",username: this.state.username});
      this.props.dispatch({ type: "SELECTED_PAGE",selectedPage: 'Home'});
      this.props.history.push({pathname: '/home'});
    }
    updateInputValue(event){
        this.setState({
          username: event.target.value
        });
      }
      updatePasswordValue(event){
        this.setState({
          password: event.target.value
        });
      }
    render() {
      return (
        <div  style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
        <div
          className='card'
        >
            <h1 style={{ color: "#ffffff", fontFamily: "Book Antiqua"}}>LOGIN</h1>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2em'}}>
                <img src={require("../../assets/no-image.png")} alt="login" style={{width: "50%"}}></img>
            </div>
            <input 
            type="text"
            placeholder="Username"
            style={{padding: '2.5%', marginBottom: '1.5em', width: '100%'}}
            value={this.state.username}
            onChange={this.updateInputValue}
            />
            <input 
            type="password"
            placeholder="Password"
            style={{padding: '2.5%', marginBottom: '1.5em', width: '100%'}}
            value={this.state.password}
            onChange={this.updatePasswordValue}
            />
           <button className='custButton' disabled={!(this.state.username && this.state.password)} onClick={() => this.handleClick()}>Login</button>
        </div>
        </div>
      );
    }
  }
  export default connect(mapStateToProps)(withRouter(Login));
  