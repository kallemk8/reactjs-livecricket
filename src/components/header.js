import React, {Component} from 'react';
import { Link } from 'react-router-dom'
class Header extends Component {
    logoutuser = ()=>{
        localStorage.removeItem('token');
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="nav">
                            <li className="nav-item"><Link className="nav-link" to ='/' >Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to ='/user' >Register</Link></li>
                            <li className="nav-item"><Link className="nav-link" to ='/users' >Users</Link></li>
                            <li className="nav-item"><Link className="nav-link" to ='/players' >Players</Link></li>
                            
                            <li className="nav-item float-right"><Link className="nav-link" onClick={()=>this.logoutuser()} to ='/login' >Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;