import React from 'react'

import { Footer, Projects, Resume, Socials, Header, About } from './containers';
import { Navbar } from './components';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <Projects />
        <About />
        <Resume />
        <Socials />
      </div>
      <Footer />
    </div>
  )
}

export default App;