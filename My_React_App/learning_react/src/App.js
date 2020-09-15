import React from 'react';
import HelloWorld from './Components/HelloWorld'
import Header from './Components/Header'
import Footer from './Components/Footer'


function App() {
  return (
    <div className="App">
      <Header/> 
      <HelloWorld name="Pravin"/>
      <Footer/>
    </div>
  );
}

export default App;
