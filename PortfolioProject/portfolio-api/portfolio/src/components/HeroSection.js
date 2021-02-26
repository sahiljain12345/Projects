import React,{Component} from 'react';
import { Button } from './Button';
import './HeroSection.css'
import '../styling.css'
import'./Button.css'
import{Link} from "react-scroll";


class HeroSection extends Component{
 

render(){

    return(
<div className='hero-container' id = "home">
     {/* <video src='/video/video.mp4' autoPlay loop muted/> */}

   <div className="flex">    
    <h1> Hello, I'm Sahil Jain</h1>
    <p>I'm a Full-Stack Developer</p>
    </div>

   <div className="hero-btns" >
    
     <Link activeClass="active"
      to="aboutme"
      spy={true}
      smooth={true}
      duration={500}>
        
       <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large'>
           View More
          </Button>
          
        </Link>
       
   </div> 

</div>
);
 

}

}
export default HeroSection;