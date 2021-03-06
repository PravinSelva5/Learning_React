import React from 'react';
import HelloWorld from './Components/HelloWorld'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"


function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        
          <Header/> 
          <HelloWorld name="Pravin"/>

         <div className="p-3">
          <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>

              <Route path="/about">
                  <About/>
              </Route>

              <Route path="/products/:id">
                  <Product/>
              </Route>
            </Switch>
         </div>
          
          <Footer/>
        
        </Router>
    
    </div>


  );
}

export default App;
