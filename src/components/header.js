import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
import { Navbar,  Nav, NavItem } from 'reactstrap';
class Header extends Component {
    logoutuser = ()=>{
        localStorage.removeItem('token');
    }
    render(){
        return(
            <Container >
                <Row>
                    <Col>
                        <Navbar color="light" light expand="md">
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <Link className="nav-link" to ='/' >Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to ='/users' >Users</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to ='/players' >Players</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to ='/news' >News</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" onClick={()=>this.logoutuser()} to ='/login' >Logout</Link>
                                </NavItem>
                            </Nav>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Header;