import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import {Button} from '../Button.js';
import './contact.css'
import '../../styling.css';
import axios from 'axios';




class Contact extends Component {

   constructor(){
	 super()

	 this.state ={
		name:'',
		email:'',
		message:'',
		disabled:false,
		emailSent:null,


	 }

     this.handleChange = this.handleChange.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
	}

   handleChange = e =>{
	   this.setState({[e.target.name]: e.target.value})

   }

   
   async handleSubmit (e) {
	e.preventDefault();
	 
	 const {name, email, message} = this.state
	 
	  const form = await axios.post('/api/form', {
        name,
		email,
		message
	  })
	}
  

  resetForm(){
    this.setState({name:'', email: '', message: ''})
  }



	render(){
  return (
		 
    <section>
	    <div className="container-flex" id="contact">
	      <Form onSubmit={this.handleSubmit} method="POST">
		      <h1>
				 Contact Me 
			 </h1>
			 <div className="form-inputs"> 
				<Form.Group >
				<Form.Label htmlFor="full-name">Full Name</Form.Label>
				<Form.Control id="full-name" name="name" type="text" value ={this.state.name} onChange={this.handleChange}/> 
				</Form.Group>
			
				<Form.Group>
				<Form.Label htmlFor="email">Email</Form.Label>
				<Form.Control id="email" name="email" type="email" value ={this.state.email} onChange={this.handleChange}/> 
				</Form.Group>

				<Form.Group>
				<Form.Label htmlFor="message">Message</Form.Label>
				<Form.Control id="message" name="message" as="textarea" value ={this.state.message} onChange={this.handleChange}/> 
				</Form.Group>
				
				<Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large' variant="primary" type="submit" disabled={this.state.disabled}>
					Send
				</Button>
		     </div>
			  {this.state.emailSent == true && <p className="d-inline success-msg "> Email Sent</p>}
			
			  {this.state.emailSent == false && <p className="d-inline err-msg "> Email not Sent</p>}
		   </Form>
		</div>
	</section>
  );
}


 
}


export default Contact;