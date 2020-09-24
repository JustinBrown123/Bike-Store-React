import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/NavBar';
import Contact from './components/Contact';
import Home from './components/Home';
import WhereToRide from './components/WhereToRide';
import News from './components/News';
import Default from './components/Default'
import Footer from './components/Footer'
import {StyledTextContainer} from './components/StyledTextContainer';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <StyledTextContainer>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/news" component={News}></Route>
        <Route path="/wheretoride" component={WhereToRide}></Route>
        <Route component={Default}></Route>
      </Switch>
      </StyledTextContainer>
      <Footer/>
    </React.Fragment>


  );
}

export default App;
