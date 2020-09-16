import React from 'react';
import HelloWorld from './Components/HelloWorld'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Header/> 
      <HelloWorld name="Pravin"/>

      <Router>
        <ul>
          <li>
            <Link to="/" className="text-blue-500">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-blue-500">About</Link>
          </li>
        </ul>
      </Router>





      
      <Footer/>
    </div>
  );
}

export default App;
