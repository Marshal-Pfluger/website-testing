import React from 'react'
import './header.css';
import fork_icon from '../../assets/fork_icon.png'
import Typewriter from "typewriter-effect";



const Header = () => {
  return (
    <div className="marshalPfluger__header section__padding" id="home">
      <div className="marshalPfluger__header-content">
        <h1 className="gradient__text">
        <Typewriter
          onInit={(typewriter) => {
          typewriter
            .typeString("Hello, My name is Marshal Pfluger.")
            .pauseFor(1000)
            .deleteAll()
            .typeString("It's so nice to have you on my site, please take a look around.")
            .start();
          }}
          options={{ delay: 30, // (typing speed)
        }}
        />
        </h1>
      <p>If you have any advice please use the "Offer Feedback" button. I am always open to learning more and growing my skills.</p>
      </div>
        <div className="marshalPfluger__header-img">
          <img src={fork_icon} alt="fork_icon" />
        </div>
      </div>
  )
}

export default Header
