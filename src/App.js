import React,{Component} from 'react';
import './App.css';
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import Education from './components/Education'
import Experience from './components/Experience'
import {Route} from "react-router-dom"


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      display:'block'
    }
    this.test = this.test.bind(this);
    this.menu = this.menu.bind(this);
    this.menu()
  }
  menu(){
    let menu = <Sidebar list  = {[{display:'Home',value:'/'},{display:'Education',value:'/Education'},{display:'Experience',value:'/Experience'}]} />
    this.state = {
      menu:menu,
    }
  }
  async test(para){
    console.log(para)
     await this.setState({
       display:para,
     })
  }
  render(){
    return(
      
      <div className="App">
      <h1>Amit Maheshwar Varanasi</h1>
      <div className = "wrapperforthebody">
      <div className = "menu">
      {this.state.menu}
      </div>
      <div className = "routeclass">
      <Route exact path = '/' component = {Home} />
      <Route exact path = '/Education' component = {Education} />
      <Route exact path = '/Experience' component = {Experience} />
      
      </div>
      </div>
      
    </div>
    )
  }
}

export default App;
