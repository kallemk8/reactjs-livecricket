import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Videos from './videos';
import Photos from './photos';
import LatestNews from './latestNews';
class Home extends Component {
  render(){
    return (
      <section className="page-content">
        <Container>
          <Row>
            <Col md="3">
              <Videos />
            </Col>
            <Col md="6">
              <LatestNews />
            </Col>
            <Col md="3">
              <Photos></Photos>
            </Col>
          </Row>
        </Container>
      </section>
    )
  };
}
export default Home;