import React, {Component} from 'react';
import {Col, Row } from 'reactstrap';

class TopMatches extends Component {
    render(){
        return(
            <div className="live-match-list">
                <Row>
                <Col md="3">
                    <a href="#/home" title="" className="short-score">
                        <div className="team-one">
                            <span className="team-name">IND</span> 
                            <span className="team-score "> 123/1 </span>
                        </div>
                        <div className="team-one">
                            <span className="team-name">AUS</span> 
                            <span className="team-score "> 99/9</span>
                        </div>
                        {/* <div className="match_running_live_red">Live</div> */}
                    </a>
                </Col>
                <Col md="3">
                    <a href="#/home" title="" className="short-score">
                        <div className="team-one">
                            <span className="team-name">IND</span> 
                            <span className="team-score "> 123/1 </span>
                        </div>
                        <div className="team-one">
                            <span className="team-name">AUS</span> 
                            <span className="team-score "> 99/9</span>
                        </div>
                        {/* <div className="match_running_live_red">Live</div> */}
                    </a>
                </Col>
                <Col md="3">
                    <a href="#/home" title="" className="short-score">
                        <div className="team-one">
                            <span className="team-name">IND</span> 
                            <span className="team-score "> 123/1 </span>
                        </div>
                        <div className="team-one">
                            <span className="team-name">AUS</span> 
                            <span className="team-score "> 99/9</span>
                        </div>
                        {/* <div className="match_running_live_red">Live</div> */}
                    </a>
                </Col>
                <Col md="3">
                    <a href="#/home" title="" className="short-score">
                        <div className="team-one">
                            <span className="team-name">IND</span> 
                            <span className="team-score "> 123/1 </span>
                        </div>
                        <div className="team-one">
                            <span className="team-name">AUS</span> 
                            <span className="team-score "> 99/9</span>
                        </div>
                        {/* <div className="match_running_live_red">Live</div> */}
                    </a>
                </Col>
                <Col md="12">
                    <a href="http://www.livecricketinfo.com/match-results" className="more-live-matches">All Matches</a>
                </Col>
                </Row>
            </div>
        )
    }
}

export default TopMatches;