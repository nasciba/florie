import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './components/auth/Signup';
import Home from './components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signup' component={Signup} />
          </Switch>
        </BrowserRouter>
        
      </div>
    );
  }
}


export default App;
