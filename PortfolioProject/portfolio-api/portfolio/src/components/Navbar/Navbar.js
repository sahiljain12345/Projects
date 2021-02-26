import React, {Component} from 'react';
import {Link} from 'react-scroll'  
import './Navbar.css'


class Navbar extends Component{
   
    state = {clicked: false}
     
    handleClick = () => {

        this.setState({clicked: !this.state.clicked})
    }


render(){

    return(
         
        <nav className = 'NavbarItems'>
          <div className = 'navbar-container'>
            <li className='navbar-logo'>
               Sahil
               <i class='fab fa-typo3'/> 
             </li>
             <div className='menu-icon' onClick={this.handleClick}>
               <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}/> 
              </div>
             <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu' }>
                 
                 <li className='nav-links'>         
             <Link  
                activeClass='active'
                
                       to='home'
                       smooth={true}
                       duration={500}>
                         Home 
                    </Link>    
                    </li>

                   <li className='nav-links'> 
                <Link activeClass='active'
                       
                       to='aboutme'
                       spy={true}
                       smooth={true}
                       duration={500}>
                         About Me 
                    </Link> 
                    </li>  

                    <li className='nav-links'> 
                    <Link 
                    activeClass='active'
                       to="contact"
                       spy={true}
                       smooth={true}
                       duration={500}>
                         Contact Me 
                    </Link> 
                    </li>   
            
                   
             </ul>
             </div>
        </nav>
    )
 

}

}

export default Navbar