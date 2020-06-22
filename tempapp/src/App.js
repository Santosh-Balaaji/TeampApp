import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from '../src/Pages/Login'
import RegistrationPage from '../src/Pages/Registration'
import {Switch,Route} from 'react-router-dom';

class App extends React.Component {
  render(){

   return (
    <div className="App">
      <Switch>
      <Route exact path='/login' component={LoginPage}/>
        <Route exact path='/registration' component={RegistrationPage}/>
    </Switch>
    </div>
  );
   }
}

export default App;
