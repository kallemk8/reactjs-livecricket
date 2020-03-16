import React, { Component } from 'react';
import './App.css';
import Login from './components/login';
import { HashRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/Privaterote';
import ThemeRoutes from './router'
import User from './components/user';
class App extends Component {
  render(){
  return (
    <HashRouter>
      <Switch>
        <Route path='/login' exact name="Login"  component ={Login}  />
        <Route path='/user' exact name="User"  component ={User}  />
        {ThemeRoutes.map((prop, key) => {
          return <PrivateRoute exact path={prop.path} key={key} component={prop.component} />;
        })}
      </Switch>
    </HashRouter>
  )};
}
export default App;