import React from "react";
import { HashRouter, Route } from 'react-router-dom';
import Navigation from "./Components/Navigation";
import About from './Routes/About';
import Home from './Routes/Home';


function App(){
  return(
    <HashRouter>
      <Navigation />
      <Route path='/' exact={true} component={Home} />
      <Route path='/about' component={About} />
    </HashRouter>
  )

}

export default App;
