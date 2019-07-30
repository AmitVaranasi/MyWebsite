import React,{Component} from 'react'
import './sidebar.css';
class Sidebar extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            list:props.list,
        }
    }
    render(){
        return(
            <div>
                <menu className = "menu">
                    {
                        this.state.list.map(element=><a key = {element} href = {element.value} >{element.display}</a>)
                    }
                </menu>
            </div>
        )
    }
}
export default Sidebar;