import React, {useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Switch, Route} from 'react-router-dom';
import {Navbar} from './components/Nav/NavBar';
import Contact from './components/Contact';
import Brands from './components/Brands'
import Home from './components/Home';
import Trails from './components/Trails';
import News from './components/News';
import Default from './components/Default'
import Footer from './components/Footer'
import Weather from './components/Weather'
import Services from './components/Services'
import ReactGa from 'react-ga'



function App() {
  useEffect(() => {
    ReactGa.initialize(process.env.REACT_APP_GOOGLE_ID)
    ReactGa.pageview(window.location.pathname + window.location.search)
  },[])
  
  return (
    <React.Fragment>
      <Navbar />
      <div className="background-spacing">

      <div className="body-background">
        <div className="background-overlay">
      <div className="main-body">
        
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/brands" component={Brands}></Route>
        <Route path="/news" component={News}></Route>
        <Route path="/wheretoride" component={Trails}></Route>
        <Route path="/data" component={Weather}></Route>
        <Route path="/services" component={Services}></Route>
        <Route component={Default}/>
      </Switch>

      <Footer/>
      </div>
      </div>
      </div>
      </div>
    </React.Fragment>


  );
}

export default App;
