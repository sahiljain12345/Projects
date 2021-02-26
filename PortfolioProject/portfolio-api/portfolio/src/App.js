import React, {Component} from 'react';
import Navbar from "./components/Navbar/Navbar";
import './styling.css'
 import Home from './components/pages/Home';
 import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';


export class App extends Component{
   

//Note:-if you want get back to main page just click on hamburger icon.It will take you to the main Page.Thank you//
       
     render(){  
               // console.log('lol',this.props.model.GetApi())
          return(
              
              <div className="App">
               {/* <BrowserRouter>   
                <Navbar />
                  <Switch>
                  <Route exact path="/" render={ props => <Home {...props} /> } /> 
                  <Route exact path="/aboutme" render={ props => <AboutMe {...props} /> } /> 
                  <Route exact path="/resume" render={ props => <Resume {...props} /> } /> 
                  <Route exact path="/contact" render={ props => <Contact {...props} /> } /> 
                      
                  </Switch>
                </BrowserRouter> */}
                <Home></Home>
                <Navbar></Navbar>
                <AboutMe></AboutMe>
                <Projects></Projects>
                <Contact></Contact>
              </div>
              
                
              
               // <main>
               //   {/* <section>
               //   </section>
                
               //    <main>
               //   <BrowserRouter>
               //   <Switch>
               //   <Route exact path="/" render={ props => <MainPage {...props} /> } /> 
               //   <Route exact path="/splash" render={ props => <SplashPage {...props} /> } />
               //   <Route exact path="/rating" render={ props => <Datacollection {...props} model={this.props.model}/> } />
               //   <Route render={ props => <MessagePage message="We could not find that page (404)." {...props} /> } />
               //   </Switch>
               //   </BrowserRouter>
               //   </main> */}

               //   </main>
              );

    }

}



