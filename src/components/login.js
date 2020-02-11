import React, { Component } from 'react';
import axios from 'axios';
import Joi from 'joi';
var schema = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().min(8).required()
});
 
class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:"",
      error:{
        msg:""
      },
     
    }
    this.loginusercheck = this.loginusercheck.bind(this)
  }
    
    loginusercheck(){
      let temp = {msg:""}
      this.setState({error:temp});
      const result = Joi.validate( {username:this.state.username, password:this.state.password}, schema);
      if(result.error !== null){
        if(result.error.details){
          let temp = {msg:result.error.details[0].message}
          this.setState({error:temp});
        }
      }else{
        
        axios.post('http://localhost:3900/api/auth', this.state)
        .then(response => {
          let result = response.data;
          if(result.result === "success"){
            localStorage.setItem('token', result.jwt);
            this.props.history.push("/");
          }else{
            const error={...this.state.error}
            error.msg = result.message
            this.setState({error});
          }
        }) 
        .catch((ex) => {
          const error={...this.state.error}
          error.msg = ex.response.data.message;
          this.setState({error});
        }) 
        
      }
    }   
  render(){
  return (
    <div className="row">
        <div className="col-md-4 offset-md-4">
            <div className="form-group text-center">
              <h2>Login</h2>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Username" name="username" onChange={(e)=>this.setState({username:e.target.value})} />    
            </div>
            <div className="form-group">
                <input type="password"  className="form-control" placeholder="Password" name="password" onChange={(e)=>this.setState({password:e.target.value})} />    
            </div>
            <div className="form-group">
                <span className="loginerrormessage">{this.state.error.msg}</span>
                <button type="submit" className="btn btn-primary btn-block" onClick={this.loginusercheck} >Submit</button>
            </div>
        </div>
        
    </div>
  )};
}
export default Login;