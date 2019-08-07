import React,{Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Navbar.css'
const Styles = styled.div`
.navbar{
    background-color:#222;
}
.navbar-brand,.navbar-nav,.nav-link{
    color:orange;
    &:hover{
        color:white;
    }
    
}
`;

class CoustomNavbar extends Component{
    render(){
        return(
            <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Amit Maheshwar Varanasi</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/" style = {{color:'white'}}>Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about" style = {{color:'white'}}>Education</Link>
            </Nav.Link>
          </Nav.Item>          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
        )
    }
}
export default CoustomNavbar;