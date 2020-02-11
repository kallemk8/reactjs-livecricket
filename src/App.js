import React, { Component } from 'react';
import './App.css';
import Login from './components/login';
import { HashRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/Privaterote';
import ThemeRoutes from './router'
class App extends Component {
  render(){
  return (
    <div className="container"> 
    
      <HashRouter>
        <Switch>
          <Route path='/login' exact name="Login"  component ={Login}  />
          {ThemeRoutes.map((prop, key) => {
            return <PrivateRoute path={prop.path} key={key} component={prop.component} />;
          })}
        </Switch>
      </HashRouter>
    </div>
  )};
}
export default App;