import React, { Component } from 'react';
import axios from 'axios';
class News extends Component {
    constructor(props){
        super(props)
        this.state ={
            data:[]
        }
    }
    
    componentDidMount(){
        axios.get('http://localhost:3900/api/news')
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
    addquatation(id){
        this.props.history.push(`/news/view/${id}`);
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                        
                    <div className="col-md-12">
                        <table className="table table-borded">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>publishedDate</th>
                                    <th>subtitle</th>
                                    <th>View</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map((user,i)=>{
                                return(
                                    <tr key={i}>
                                        <td>{user.cri_title}</td>
                                        <td>{user.publishedDate}</td>
                                        <td>{user.subtitle}</td>
                                        <td><button onClick={()=>this.addquatation(user._id)} > View </button></td>
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
export default News;