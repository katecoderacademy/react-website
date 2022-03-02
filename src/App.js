import React,{useState,useEffect} from 'react';
import './App.css';


import { Outlet, Link } from 'react-router-dom';

  const HomePageHeader = () => {
    return (
      <header className="header">
        <h1>Kate Beaumont</h1>
      </header>
    );
  };

// function aboutKate () {
//   return (
//     <><section class="maintext">
//             <article-title><h2>About Kate</h2></article-title>

//             <article-text><div class="aboutblocks">
//                 <figure class="aboutblocks1">
//                     <img src="img/kbsquare.png" alt="a photo of Kate Beaumont"/>
//                     <a href="resume.pdf">
//                         <span class="btn aboutblocks2 centerme" id="resumebtn">Download Resume</span></a>
                            
//                         <span class="iconsmain"><a href="http://github.com/KateCoderAcademy/" target="_blank">
//                             <span class="icon-inline icon-github"></span></a>
                                
                                
//                             <a href="https://www.linkedin.com/in/kate-beaumont-melb/" target="_blank"><span class="icon-inline icon-linkedin-in"></span></a>
//                                 <a href="https://stackoverflow.com/users/16834756/katerose" target="_blank"><span class="icon-inline icon-stack-overflow"></span></a></span>
                                
//                </figure>           
//                <div class="aboutblocks2" id="summary"><p >Kate is a former lawyer with a background and passion for it, interested in all class of projects. She has previously been involved in web development and consulting work in the IT space, until she recently made a move into IT, as IT makes a all pervasive impact on our lives.</p></div>              
            
//             </div>   
//             </article-text>
//         </section>

//     </>
//   )
// }




export default App;
function App() {

  
  return (
    <div>
        <HomePageHeader />
        <Outlet />
      <nav className='nav-style' style={{ borderTop: 'solid 1px', paddingBottom: '1rem' }}>
      
      <Link to="/home">Home</Link> |{' '}
        <Link to="/blog">Blog</Link> |{' '}
        <Link to="/projects">Projects</Link> |{' '}
        <Link to="/contact">Contact</Link>
      </nav>

    </div>
  );
}


