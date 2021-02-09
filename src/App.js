import React from  'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Project from './components/Project';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path='/consulting' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/service' component={Service} />
      <Route exact path='/project' component={Project} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/contact' component={Contact} />
      <Route component={Error} />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
