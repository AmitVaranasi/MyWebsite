import React,{Component} from 'react';
import './Education.css'
class Education extends Component{
   
    test = () => {
        console.log("hello world")
    }
    render(){
        return(
            <div>
            {this.test()}
                this is my Education
            </div>
        )
    }
}
export default Education;