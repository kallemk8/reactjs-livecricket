import React, {Component} from 'react';
import Axios from 'axios';

class Users extends Component {
    
    state ={
        data:[]
    }
    componentDidMount(){
        Axios.get('http://localhost:3900/api/user')
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
                                    <th>Username</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map((user,i)=>{
                                return(
                                    <tr key={i}>
                                        <td>{user.username}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.email}</td>
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
export default Users;