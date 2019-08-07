import React,{Component} from 'react';
import {Container} from 'react-bootstrap';
function Layout(props){
    return(
        <Container>
        {props.children}
    </Container>
    )
}
export default Layout;