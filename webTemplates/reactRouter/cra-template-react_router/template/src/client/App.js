import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from  './components/login/login'
import Home from  './components/home/home'
import List from  './components/list/list'
import Settings from  './components/settings/settings'
import About from  './components/about/about'
import Landing from './components/landing/landing';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
    this.updateUsername = this.updateUsername.bind(this);
  }
 updateUsername(username){
   this.setState({username: username});
 }
  render() {
    const AuthenticatedRoutes = () => {
      return (
        <React.Fragment>
          <Landing username = {this.state.username} />
            <div>
                  <Switch>
                      <Route path="/home" component={Home}/>
                      <Route path="/settings" component={Settings}/>
                      <Route path="/about" component={About}/>
                      <Route path="/list" component={List}/>
                </Switch>
            </div>
         </React.Fragment>
      )
  }
    return (<BrowserRouter>
      <React.Fragment>
      <Switch>
                  <Route path="/" exact render={props => <Login update = {this.updateUsername} />} />
                  <Route component={AuthenticatedRoutes}/>
        </Switch>
      </React.Fragment>
    </BrowserRouter>);
  }
}

export default App;
