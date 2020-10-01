import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Switch, Route} from 'react-router-dom';
import {Navbar} from './components/Nav/NavBar';
import Contact from './components/Contact';
import Home from './components/Home';
import Trails from './components/Trails';
import News from './components/News';
import Default from './components/Default'
import Footer from './components/Footer'
import Weather from './components/Weather'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/news" component={News}></Route>
        <Route path="/wheretoride" component={Trails}></Route>
        <Route path="/data" component={Weather}></Route>
        <Route component={Default}></Route>
      </Switch>
      
      <Footer/>
    </React.Fragment>


  );
}

export default App;
