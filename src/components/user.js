import React, { Component } from 'react';
import axios from 'axios';
class User extends Component {
    
  state = {
    username:"",
    password:"",
    email:"",
    phone:"",
    address:"",
    firstName:"",
    lastName:"",
    displayPic:"",
    gender:"",
    DOB:"",
    imagepath:"",
    errorusername:"",
    errormsg:"",
  }
    loginusercheck() {
        axios.post('http://localhost:3900/api/user', this.state)
        .then((response)=> {
            if(response.result!=='failed'){
                alert('User created success');
                this.props.history.push('/users');
            }else{
                this.setState({errormsg:response.result.message})
                alert(response.result.message)
            }
            
        })
        .catch((error)=> {
            console.log(error);
        });
    }   
    uploadimage(){
        this.setState({enableimage:false})
        var data = new FormData();
        data.append("myImage",this.state.imagepath);
        axios.post('http://localhost:3900/api/upload', data)
            .then((response) =>{
            let result = response.data;
            if(result.res){
                this.setState({displayPic:result.file});
                this.setState({imagepath:""});
                console.log(this.state.imagepath);
            }else{
                alert('file not uploaded please try agian');
            }
        })
        .catch((error) =>{
            console.log(error);
        });
    }
  render(){
  return (
    <div  className="row">
        <div className="col-md-8 offset-md-2 ">
            <div className="form-group text-center">
              <h2>Register</h2>
            </div>
            <div className="row">
            <div className="col-md-4 offset-md-2">
            <div className="form-group">
                <input type="text" name="username" placeholder="Username" className="form-control" onChange={(e)=>this.setState({username:e.target.value})} />    
            </div>
            
            <div className="form-group">
                <input type="password" name="password" placeholder="Password" className="form-control" onChange={(e)=>this.setState({password:e.target.value})} />    
            </div>
            <div className="form-group">
                <input type="email" name="email" placeholder="Email Address" className="form-control" onChange={(e)=>this.setState({email:e.target.value})} />    
            </div>
            <div className="form-group">
                <input type="number" name="phone" placeholder="Phone number" className="form-control" onChange={(e)=>this.setState({phone:e.target.value})} />    
            </div>
            <div className="form-group">
                <input type="text" name="address" placeholder="Address" className="form-control" onChange={(e)=>this.setState({address:e.target.value})} />    
            </div>
            
            </div>
            <div className="col-md-4">
            <div className="form-group">
                <input type="text" name="firstName" placeholder="First Name" className="form-control" onChange={(e)=>this.setState({firstName:e.target.value})} />    
            </div>
            <div className="form-group">
                <input type="text" name="lastName" placeholder="Last Name"  className="form-control" onChange={(e)=>this.setState({lastName:e.target.value})} />    
            </div>
            <div className="form-group">
                <input type="date" placeholder="Date" name="DOB" className="form-control" onChange={(e)=>this.setState({DOB:e.target.value})} />    
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-md-9">
                        <input type="file" name="imagepath" placeholder="Image" encType="multipart/form-data" onChange={(e)=>this.setState({imagepath:e.target.files[0]})} />
                    </div>
                    <div className="col-md-3">
                        <button disabled={this.state.imagepath ? "": "disabled"} onClick={()=>this.uploadimage()} className="btn btn-primary btn-sm">Upload</button>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <input type="radio" name="gender" value="Male" onChange={(e)=>this.setState({gender:e.target.value})} /> Male
                <input type="radio" name="gender" value="Female" onChange={(e)=>this.setState({gender:e.target.value})} /> Female 
            </div>
            
            
            </div>
            </div>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block" onClick={()=>this.loginusercheck()} >Submit</button>
            </div>
                </div>
            </div>
        </div>
        
    </div>
  )};
}
export default User;