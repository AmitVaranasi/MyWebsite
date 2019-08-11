import React,{Component} from 'react'
import './Projects.css'
import {Card,Button, CardColumns} from 'react-bootstrap'
import logo from './0.jpeg'
class Projects extends Component{
    render(){
        return(
            <div>
                <div style = {{marginTop:70,textAlign:'center'}}>
                    <h1>Projects</h1>
                    
                    <h5>Those who plan do better than those who do not plan, even though they rarely stick to their plan. –  Winston Churchill</h5>
                </div>
                <br />
                <hr />
                <CardColumns >
                <Card style={{ width: '18rem' }}>
                    
                        <Card.Body>
                            <Card.Title>Home Automation using Raspberry-pi </Card.Title>
                                <Card.Text>
                                This project was aimed 
to develop a full fledged home automation and security system using raspberry pi and 
telegram mobile application which is cheaper than the existing ones.
                                </Card.Text>
                            <a href = "https://github.com/MaheshwarVaranasi/raspberry-based-home-security  "><Button variant="primary">Github link</Button></a>
                        </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    
                        <Card.Body>
                            <Card.Title>Multi-Purpose Robot Car </Card.Title>
                                <Card.Text>
                                This project was to make a multi-purpose robot car which has multiple modes like line tracking, obstacle avoiding and manual control with live feed over the web
                                </Card.Text>
                            <a href = "https://github.com/MaheshwarVaranasi/Multi-purpose-robot-car   "><Button variant="primary">Github link</Button></a>
                        </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    
                        <Card.Body>
                            <Card.Title>Number classifier using python keras and TensorFlow</Card.Title>
                                <Card.Text>
                                This was made out of  curiosity how neural networks are used in real life applications , used convolutional neural networks in designing the network architecture. The project will predict numbers from 0 to 9 
                                </Card.Text>
                            <a href = "https://github.com/MaheshwarVaranasi/number-classifier"><Button variant="primary">Github link</Button></a>
                        </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    
                        <Card.Body>
                            <Card.Title>Face Detection using Deep neural networks</Card.Title>
                                <Card.Text>
                                A face detection using convolutional neural network In this project I have first took the images reshaped them and then numbered it as 1 and 0 if the person is s1 and if the person is s2. Then stored them in a file and feed to my neural network, my network consists of two sets of convolutional , activation and max pooling layers ,then a dense layer with 64 units and finally a dense layer and activation with SoftMax classifier.
                                </Card.Text>
                            <a href = "https://github.com/MaheshwarVaranasi/face-detection"><Button variant="primary">Github link</Button></a>
                        </Card.Body>
                </Card>
                
                </CardColumns>
            </div>
        )
    }
}
export default Projects;