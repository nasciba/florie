import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUp from './components/SignUp'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/signup' component={SignUp} />
          </Switch>
        </BrowserRouter>
        
      </div>
    );
  }
}


export default App;
