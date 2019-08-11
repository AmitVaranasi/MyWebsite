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
                        <h1 style = {{textAlign:"center",marginTop:70}}>Profile</h1>
                      
                        <h5 style = {{textAlign:"center"}}>I am an AI  Enthusiast</h5>
                        <br />
                    <hr></hr>
                    <Row style = {{marginTop:70}}>
                    
                    <Col xs={6} md={4}>
                    <Image src={logo} roundedCircle />
                    </Col>
                    <Col style = {{paddingRight:100}}>
                        <Row>
                            <Col>
                                <h2>
                                About Me
                                </h2>
                            </Col>
                            
                        </Row>
                        <Row>
                                <p>
                                I am a director of brand marketing, with experience managing global teams and multi-million-dollar campaigns. 
                                him background in brand strategy, visual design, and account management inform him mindful but competitive 
                                approach. I am fueled by him passion for understanding the nuances of cross-cultural advertising. She considers
                                 himself a ‘forever student,’ eager to both build on him academic foundations in psychology and sociology and 
                                 stay in tune with the latest digital marketing strategies through continued coursework                       
                                </p>
                         
                            </Row>
                         <Row>
                             <a href = 'https://www.linkedin.com/in/amit-maheshwar-varanasi-0a25b114a/detail/treasury/summary/?entityUrn=urn%3Ali%3Afs_treasuryMedia%3A(ACoAACQKHjoBTTCo2p_Frhmd0KIe1mS7ZUNKStQ%2C1552837873788)&section=summary&treasuryCount=1'>
                             <Button bsStyle = "Primary">Resume

                            </Button>
                             </a>
                         </Row>   

                    </Col>
                    <Col>
                        <h3>
                            Details
                        </h3>
                        <p>
                            <strong>Name:</strong><br />
                            Amit Maheshwar Varanasi<br />
                            <strong>Age:</strong><br />
                            19 years<br />
                            <strong>Location:</strong><br />
                            Telangana, India, Earth
            		    </p>
                    </Col>
                    
                </Row>
                
                </Container>
            </div>
        )
    }
}
export default Home;