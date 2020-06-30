import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from  './components/login/login'
import Home from  './components/home/home'
import List from  './components/list/list'
import Settings from  './components/settings/settings'
import About from  './components/about/about'
import Landing from './components/landing/landing';
import LeftNav from './components/LeftNav/leftNav';
import { createStore } from "redux";
import { Provider } from "react-redux"
import reducer from "./reducer"
const store = createStore(reducer);


export class App extends React.Component {
  render() {
    const AuthenticatedRoutes = () => {
      return (
        <React.Fragment>
          <div>
          <Landing />
          </div>
          <div style={{display: 'flex', flexDirection: 'row', minHeight: '100vh'}}>
          <div style={{ width: '15%'}}> 
            <LeftNav />
          </div>
              <div style={{ width: '85%'}}> 
                  <Switch>
                      <Route path="/home" component={Home}/>
                      <Route path="/settings" component={Settings}/>
                      <Route path="/about" component={About}/>
                      <Route path="/list" component={List}/>
                </Switch>
              </div>
          </div>
         </React.Fragment>
      )
  }
    return (
      <Provider store={ store }>
    <BrowserRouter>
      <React.Fragment>
      <Switch>
                  <Route path="/" exact component={Login}/>
                  <Route component={AuthenticatedRoutes}/>
        </Switch>
      </React.Fragment>
    </BrowserRouter>
    </Provider>);
  }
}

export default App;
