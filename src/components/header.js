import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from'../images/logo.png'
import TopMatches from './topMatches'
class Header extends Component {
    logoutuser = ()=>{
        localStorage.removeItem('token');
    }
    render(){
        return(
            <header>
                <Container >
                    <div className="header">
                        <Row>
                            <Col md="3" sm='6'>
                                <h1 className="logo">
                                    <img alt="Livecricketinfo" src={logo} width="40px" />
                                    <a href="http://www.livecricketinfo.com/" title="Watch Live cricket score and Live Cricket Streaming">Livecricketinfo</a>
                                </h1>
                            </Col>
                            <Col md="9" sm="6">
                                <div className="menu">
                                    <div className="mobile-menu-icon">
                                        <a href="#/home"><i className="fa fa-align-justify" aria-hidden="true"></i>as</a>
                                    </div>
                                    <ul className="comman-menu">
                                        <li><a href="http://www.livecricketinfo.com/match-results">Live Scores</a></li>
                                        <li><a href="http://www.livecricketinfo.com/schedule">Schedule</a></li>
                                        <li><a href="http://www.livecricketinfo.com/latest-news">News</a></li>
                                        <li><a href="http://www.livecricketinfo.com/series">Series</a></li>
                                        <li><a href="http://www.livecricketinfo.com/teams">Teams</a></li>
                                        <li><a href="http://www.livecricketinfo.com/videos">Videos</a></li>
                                        <li><a href="http://www.livecricketinfo.com/photos">Photos</a></li>
                                        <li><a href="http://www.livecricketinfo.com/rankings">Rankings</a></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <TopMatches />
                </Container>
                
            </header>
        );
    }
}
export default Header;