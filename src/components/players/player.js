import React, { Component } from 'react';
import axios from 'axios';
class Player extends Component {
    
  state = {
    name:"",
    subname:"",
    DOB:"",
    height:"",
    country:{},
    aboutUs:"",
    role:"",
    battingStyle:"",
    bowlingStyle:"",
    displayPic:"",
    teams:[],
    countries:[],
    imagepath:"",
    errorusername:"",
    errormsg:"",
  }
  componentDidMount(){
    axios.get('http://localhost:3900/api/countries')
    .then((response)=>{
        if(response.data.length!==0){
            this.setState({countries:response.data});
        }else{
            alert('no data');
        }
    }).catch((error)=>{
        alert('no data');
    })
  }
    loginusercheck() {
        console.log(this.state);
        axios.post('http://localhost:3900/api/players', this.state)
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
        <div className="col-md-12 ">
            <div className="form-group text-center">
              <h2>Player Add</h2>
            </div>
            <div className="row">
            <div className="col-md-4 offset-md-2">
            <div className="form-group">
                <input type="text" name="name" placeholder="Name" required className="form-control" onChange={(e)=>this.setState({name:e.target.value})} />    
            </div>
            
            <div className="form-group">
                <input type="text" name="subname" placeholder="Sub name" className="form-control" onChange={(e)=>this.setState({subname:e.target.value})} />    
            </div>
            <div className="form-group">
                <input type="text" name="height" placeholder="height" className="form-control" onChange={(e)=>this.setState({height:e.target.value})} />    
            </div>
            <div className="form-group">
                <select  name="country" className="form-control"  onChange={(e)=>this.setState({country:e.target.value})}>
                    <option value="">Select</option>
                    {this.state.countries.map((country, i)=>{
                        return(
                            <option key={i} value={country._id}>{country.name}</option>
                        )
                    })}
                    
                </select>
               
            </div>
            <div className="form-group">
                <input type="text" name="aboutUs" placeholder="aboutUs" className="form-control" onChange={(e)=>this.setState({aboutUs:e.target.value})} />    
            </div>
            
            </div>
            <div className="col-md-4">
            <div className="form-group">
                <input type="text" name="role" placeholder="role" className="form-control" onChange={(e)=>this.setState({role:e.target.value})} />    
            </div>
            <div className="form-group">
                <input type="text" name="battingStyle" placeholder="battingStyle"  className="form-control" onChange={(e)=>this.setState({battingStyle:e.target.value})} />    
            </div>
            <div className="form-group">
                <input type="text" placeholder="bowlingStyle" name="bowlingStyle" className="form-control" onChange={(e)=>this.setState({bowlingStyle:e.target.value})} />    
            </div>
            <div className="form-group">
                <input type="date" placeholder="DOB" name="DOB" className="form-control" onChange={(e)=>this.setState({DOB:e.target.value})} />    
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
export default Player;