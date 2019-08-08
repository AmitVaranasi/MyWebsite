import React,{Component} from 'react';
import './Education.css'
class Education extends Component{
    render(){
        return(
            <div style = {{textAlign:"center"}}>
                <div style = {{marginTop:70}}>
                    <h1>Education</h1>
                    
                    <h5>Education is what remains after one has forgotten what one has learned in school. – Albert Einstein</h5>
                </div>
                <br />
                <hr />
                <p>
                <br />
                <strong>B.Tech (Hons.), Computer Science & Engineering (2017 - 2021)</strong><br />
                VIT University<br />
                CGPA : 8.56/10<br /><br />
                <strong>XII (Senior Secondary), Science</strong><br />
                Year of Completion: 2017<br />
                TELANGANA STATE BOARD Board (Narayana Collage)<br />
                Percentage : 95.00%<br /><br />
                <strong>X (Secondary)</strong><br />
                Year of Completion: 2015<br />
                SSC Board (Triveni School)<br />
                CGPA : 8.80/10
 
                </p>

            </div>
        )
    }
}
export default Education;