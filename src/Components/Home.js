import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import logo from './0.jpeg'
import {Jumbotron,Container,Row,Col,Image,Button} from 'react-bootstrap'
import './Home.css'
class Home extends Component{
    render(){
        return(
            <div>
                <Container>
                <Jumbotron>
                    hello this is a test
                </Jumbotron>
                <Link to="/about">
                    <Button bsStyle = "Primary">About

                    </Button>
                </Link>
                <Row>
                    
                    <Col xs={6} md={4}>
                    <Image src={logo} roundedCircle />
                    </Col>
                    
                </Row>
                </Container>
            </div>
        )
    }
}
export default Home;