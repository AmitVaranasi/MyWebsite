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
    <Navbar expand="lg" scrolling fixed="top">
      <Navbar.Brand href=""><Link to="/" >Amit Maheshwar Varanasi</Link></Navbar.Brand>
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
              <Link to="/Education" style = {{color:'white'}}>Education</Link>
            </Nav.Link>
          </Nav.Item> 
          <Nav.Item>
            <Nav.Link>
              <Link to="/Skills" style = {{color:'white'}}>Skills</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/Projects" style = {{color:'white'}}>Projects</Link>
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
