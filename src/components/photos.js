import React, {Component} from 'react';
import axios from 'axios';
class Photos extends Component {
    constructor(props){
        super(props)
        this.state ={
            data:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3900/api/photos')
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
            <div className="left-sidebar">
                <h2 className="sidebar-title">LATEST PHOTOS</h2>
                <ul className="latest-news-sidebar">
                    {this.state.data.map((user,i)=>{
                        return(
                            <li key={i}>
                                <a href={'#/news/view/' + user._id} alt="welcome">
                                    <img alt={user.cri_title} src={user.displayPic} className="max-width" width="100%" />
                                </a>
                                <div className="time-remaing">{user.cri_title}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default Photos;