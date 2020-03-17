import React, {Component} from 'react';
import axios from 'axios';
class LatestNews extends Component {
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
    render(){
        return(
        <div className="">
            <div className="content">
                {this.state.data.map((user,i)=>{
                    return(
                    <div className="post" key={i}>
                        <div className="post-image">
                            <a href={'#/news/view/' + user._id}>
                                <img src={user.displayPic} alt={user.cri_title} className="post-image" />
                            </a>
                        </div>
                        <div className="post-title">
                            <a href={'#/news/view/' + user._id}>{user.cri_title}</a>
                        </div>
                        <div className="post-description">
                        {user.desciption}
                        </div>
                        <div className="read-more">
                            <a href={'#/news/view/' + user._id} className="post-readmore">Read more</a>
                        </div>
                    </div>
                    )})}
            </div>
            <div className="read-more-posts-ajax">
                <a href="#/news" className="read-more-ajax">Read More</a>
            </div>
        </div>
        )
    }
}
export default LatestNews;