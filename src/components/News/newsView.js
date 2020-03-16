import React, { Component } from 'react';
import axios from 'axios';
class NewsView extends Component {
    state ={
        data:{},
        comments:[],
        commentMsg:""
    }
    getcurrentpostcomments(viewid){
        axios.get('http://localhost:3900/api/comments/postcomments/'+viewid)
        .then((response)=>{
            if(response.data.length!==0){
                this.setState({comments:response.data});
            }else{
                alert('no data');
            }
        }).catch((error)=>{
            alert('no data');
        })
    }
    componentDidMount(){
        let viewid = this.props.match.params.id;
        console.log(viewid);
        axios.get('http://localhost:3900/api/news/'+viewid)
        .then((response)=>{
            if(response.data.length!==0){
                this.setState({data:response.data});
            }else{
                alert('no data');
            }
        }).catch((error)=>{
            alert('no data');
        })
        
        this.getcurrentpostcomments(viewid)
    }
    getsubcomments(commentid){
        axios.get('http://localhost:3900/api/comments/subcomments/'+commentid)
        .then((response)=>{
            if(response.data.length!==0){
                var allcoments = this.state.comments;

                allcoments.map((va, i)=>{
                    if(commentid === va._id){
                        va.subcomment = response.data;
                    }
                    return va;
                });
                this.setState({comments:allcoments})
                console.log(this.state.comments);
            }else{
                alert('no data');
            }
        }).catch((error)=>{
            alert('no data');
        })
    }
    submitcomment(){
        let viewid = this.props.match.params.id;
        var sampledata = {
            "comment":this.state.commentMsg,
            "author":"5e397d2a2f1aeb05bc41696c",
            "publishedDate":new Date(),
            "postID":this.props.match.params.id,
            "parentcommentid":null
        }
        axios.post('http://localhost:3900/api/comments', sampledata)
        .then((response)=>{
            if(response.data._id){
                this.getcurrentpostcomments(viewid);
                this.setState({commentMsg:""});
            }else{
                alert('no data');
            }
        }).catch((error)=>{
            alert('no data');
        })
    }
    deletecomment(id){
        let viewid = this.props.match.params.id;
        axios.delete('http://localhost:3900/api/comments/'+id)
        .then((response)=>{
            if(response.data._id){
                this.getcurrentpostcomments(viewid);
                this.setState({commentMsg:""});
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
                        <h2>{this.state.data.cri_title}</h2>
                        <h6>{this.state.data.subtitle}</h6>
                        <p>{this.state.data.desciption}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-9">
                        <textarea name="comment" className="form-control" onChange={(e)=>this.setState({commentMsg:e.target.value})}></textarea>    
                    </div>
                    <div className="col-md-3">
                        <button onClick={()=>this.submitcomment()} className="btn btn-primary" >Submit</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ul>
                            {this.state.comments.map((comment,i )=>{
                                return (
                                <li key={i}>
                                    {comment.comment}
                                    <span className="label" onClick={()=>this.deletecomment(comment._id)}>Delete</span>
                                </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default NewsView;