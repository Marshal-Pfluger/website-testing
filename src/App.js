import React from 'react'

import { Footer, Projects, Resume, Contact, Header, About } from './containers';
import { Navbar } from './components';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <div className="backbone">
          <Navbar />
        <div id="home">
          <Header />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="resume">
        <Resume />
        </div>
        <div id="contact">
        <Contact />
        </div>
      <Footer />
      </div>
      </div>
    </div>
  )
}

export default App;