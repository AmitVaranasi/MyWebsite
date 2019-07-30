import React,{Component} from 'react'
import './Home.css'
import logo from '../0.jpeg';
export default  function Home  (){
    return(
        <div>
                <h2>About me</h2>
                <div className = "aboutme_photo">
                    <p>this is a test comment i dont know what i am 
                    writing this is i just wanna write something to fill this up
                    so fuck it imma write wahatever i think in mind this song is good
                    i am hereing it aftera looooong time  </p>
                    <img src = {logo} alt = ""></img>
                </div>
                 <br />
                <a  href = "https://www.linkedin.com/in/amit-maheshwar-varanasi-0a25b114a/detail/treasury/summary/?entityUrn=urn%3Ali%3Afs_treasuryMedia%3A(ACoAACQKHjoBTTCo2p_Frhmd0KIe1mS7ZUNKStQ%2C1552837873788)&section=summary&treasuryCount=1">My Resume</a>
      
      
        </div>
    )
}