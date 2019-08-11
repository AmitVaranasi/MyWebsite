import React,{Component} from 'react'
import './Skills.css'
class Skills extends Component{
    constructor(props){
        super(props)
        this.state = {
            list:["Machine Learning", "Beginner" ,"Computer Vision", "Beginner", "HTML" ,"Intermediate", "Python", "Intermediate", "R Programming" ,"Intermediate", "Java", "Advanced" ,"C++ Programming", "Advanced", "C Programming", "Advanced", "Data Analytics", "Beginner", "Data Structures", "Intermediate", "ARM Microcontroller", "Intermediate", "Raspberry Pi", "Intermediate", "Arduino", "Intermediate", "Linux", "Intermediate", "MATLAB", "Intermediate", "GNU Octave", "Intermediate", "English Proficiency (Spoken)", "Intermediate", "English Proficiency (Written)", "Intermediate", "JavaScript", "Intermediate", "css", "Intermediate", "PHP", "Beginner", "Android", "Intermediate", "Firebase", "Beginner", "SQL", "Intermediate", "OpenCV", "Intermediate", "Bootstrap", "Intermediate", "C#", "Beginner", "Creative Writing", "Beginner", "Verilog", "Beginner", "Ethical Hacking", "Beginner", "Internet of Things (IoT)", "Intermediate" ,"Database Management System (DBMS)", "Intermediate", "Eclipse (IDE)", "Intermediate", "ReactJS", "Intermediate", "React Native", "Beginner"],
        }
         
    }
    render(){
        
        return(
            <div style = {{textAlign:"center"}} className = "skills">
                <div style = {{marginTop:70}}>
                    <h1>Skills</h1>
                    
                    <h5>Every artist was first an amateur – Ralph Waldo Emerson</h5>
                </div>
                <br />
                <hr />
                <div className = "wrapperforlist">
                <ul className = "list">
                    {this.state.list.map(element => <li>{element}</li>)}
                </ul>
                </div>
                
            </div>


        )
    }
}
export default Skills;