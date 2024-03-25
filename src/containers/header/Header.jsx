import React from 'react'
import './header.css';
import code from '../../assets/code.png'

const Header = () => {
  return (
    <div className="marshalPfluger__header section__padding" id="home">
      <div className="marshalPfluger__header-content">
        <h1 className="gradient__text">Hello, My name is Marshal Pfluger. Its so nice to have you on my site, please take a look around.</h1>
      <p>If you have any advice please use the "Offer Feedback" button. I am always open to learning more and growing my skills.</p>
      </div>
        <div className="marshalPfluger__header-img">
          <img src={code} alt="code" />
        </div>
      </div>
  )
}

export default Header
