import React from 'react'

import { Footer, Projects,  Skills, Resume, Header, About } from './containers';
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
        <Skills />
        <CTA />
      </div>
      <Footer />
    </div>
  )
}

export default App;