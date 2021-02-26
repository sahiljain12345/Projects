import React,{Component} from 'react';
import '../../styling.css';
import {Grid, Cell} from 'react-mdl';
import {Col, ProgressBar, Row} from 'react-bootstrap'
import {Card} from 'react-bootstrap'
import './about.css'

class AboutMe extends Component {


   render(){
 
 
      return (

     <div className="about-me"  id="aboutme" >
        <h1>ABOUT</h1>
            
            <div className='container-key'>
               <div className ='fast'>
               <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Fast</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>               
               </div>
               <div className='responsive'>
               <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Responsive</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>             
               </div> 
               <div>
               <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Quick Learning</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>             
               </div>

            </div>
         <div className ="landing-grid">
            
             <div className = 'banner-text'>
             <h1>Who' this Guy</h1>
            <p>
               I'm a Software Developer and seeking for a challenging role in a reputable organization to utilize my technical, database, and
               management skills for the growth of the organization as well as to enhance my knowledge about new
               and emerging trends in the Software sector.
            </p>
                <hr/>
               <p>
                  HTML/CSS | ReactJS | NodeJS | C++ | C# | MSSQL | SQL
               </p>
              
             </div>
             <div className="progress">
             <ProgressBar variant="success" now={40} />
             <ProgressBar variant="info" now={20} />
             <ProgressBar variant="warning" now={60} />
             <ProgressBar variant="danger" now={80} />
             </div>
             
             
                 
                   
            </div>
              
            
     </div>
       
  );
}

}
export default AboutMe;