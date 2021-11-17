import React from 'react'
import './App.css';
import img from './images/net.jpg';



import {NavBar,Body,Footer, Background} from './components';
function App() {
  return (
    <div className="main">
    <Background />
     <p><NavBar title="Netflix" logo="LOGO"/></p>
     <Body/>
    <Footer/>
    
    </div>
  );
}

export default App;
