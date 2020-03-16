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
    const styles = {
      container: {
        background: "url(https://keenthemes.com/metronic/themes/metronic/theme/default/demo1/dist/assets/media/bg/bg-4.jpg)"
          
      }
    };
  return (
    <div className="kt-grid kt-grid--ver kt-grid--root">
	<div className="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v1" id="kt_login">
		<div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile">
			
			<div className="kt-grid__item kt-grid__item--order-tablet-and-mobile-2 kt-grid kt-grid--hor kt-login__aside" style={styles.container}>
				<div className="kt-grid__item">
					<a href="#/home" className="kt-login__logo">
						<img alt="welcome" src="https://keenthemes.com/metronic/themes/metronic/theme/default/demo1/dist/assets/media/logos/logo-4.png" />
					</a>
				</div>
				<div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver">
					<div className="kt-grid__item kt-grid__item--middle">
						<h3 className="kt-login__title">Welcome to Metronic!</h3>
						<h4 className="kt-login__subtitle">The ultimate Bootstrap & Angular 6 admin theme framework for next generation web apps.</h4>
					</div>
				</div>
				<div className="kt-grid__item">
					<div className="kt-login__info">
						<div className="kt-login__copyright">&copy 2018 Metronic</div>
						<div className="kt-login__menu">	<a href="#/home" className="kt-link">Privacy</a>
							<a href="#/home" className="kt-link">Legal</a>
							<a href="#/home" className="kt-link">Contact</a>
						</div>
					</div>
				</div>
			</div>
			
			<div className="kt-grid__item kt-grid__item--fluid  kt-grid__item--order-tablet-and-mobile-1  kt-login__wrapper">
				
				<div className="kt-login__head">	<span className="kt-login__signup-label">Don't have an account yet?</span>&nbsp;&nbsp;	<a href="#/user" className="kt-link kt-login__signup-link">Sign Up!</a>
				</div>
				
				<div className="kt-login__body">
					
					<div className="kt-login__form">
						<div className="kt-login__title">
							<h3>Sign In</h3>
						</div>
						
						<div className="kt-form" noValidate="novalidate" id="kt_login_form">
							<div className="form-group">
								<input className="form-control" type="text" placeholder="Username" name="username" autoComplete="off"  onChange={(e)=>this.setState({username:e.target.value})} />
							</div>
							<div className="form-group">
								<input className="form-control" type="password" placeholder="Password" onChange={(e)=>this.setState({password:e.target.value})} name="password" autoComplete="off" />
							</div>
							<div className="">
							<span className="loginerrormessage">{this.state.error.msg}</span>
							</div>
							<div className="kt-login__actions">	
              				<a href="#/home" className="kt-link kt-login__link-forgot">
								Forgot Password ?
							</a>
								<button id="kt_login_signin_submit" onClick={this.loginusercheck}  className="btn btn-primary btn-elevate kt-login__btn-primary">Sign In</button>
							</div>
						
						</div>
					
						<div className="kt-login__divider">
							<div className="kt-divider">	<span></span>
								<span>OR</span>
								<span></span>
							</div>
						</div>
						
						<div className="kt-login__options">
							<a href="#/home" className="btn btn-primary kt-btn">	<i className="fab fa-facebook-f"></i>
								Facebook</a>
							<a href="#/home" className="btn btn-info kt-btn">	<i className="fab fa-twitter"></i>
								Twitter</a>
							<a href="#/home" className="btn btn-danger kt-btn">	<i className="fab fa-google"></i>
								Google</a>
						</div>
						
					</div>
					
				</div>
				
			</div>
			
		</div>
	</div>
</div>
    
  )};
}
export default Login;