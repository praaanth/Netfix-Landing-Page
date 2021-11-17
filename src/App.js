import React from 'react'
import './App.css';
import img from './images/net.jpg';



// eslint-disable-next-line no-unused-vars
import {Navbar ,Body,Footer,Background} from './components';
function App() {
  return (
    <div className="main">
     <p><Navbar title="Netflix" logo="LOGO"/></p>
     <Body/>
    <Footer/>
    </div>
  );
}

export default App;
