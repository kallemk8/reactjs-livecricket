import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
class Players extends Component {
    state ={
        data:[]
    }
    componentDidMount(){
        axios.get('http://localhost:3900/api/players')
        .then((response)=>{
            if(response.data.length!==0){
                this.setState({data:response.data});
            }else{
                alert('no data');
            }
        }).catch((error)=>{
            alert('no data');
        })
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                        
                    <div className="col-md-12">
                        <table className="table table-borded">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Sub name</th>
                                    <th>Country</th>
                                    <th>Add</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map((user,i)=>{
                                return(
                                    <tr key={i}>
                                        <td>{user.name}</td>
                                        <td>{user.subname}</td>
                                        <td>{user.country.name}</td>
                                        <td><Link to="/players/add" > Add </Link></td>
                                    </tr>
                                ) 
                                })}
                            </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default Players;