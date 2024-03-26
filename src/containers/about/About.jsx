import React from 'react';
import AboutSection from '../../components/aboutSection/AboutSection.jsx';
import './about.css';
import headshot from '../../assets/headshot.jpg';

const About = () => (
  <div className="marshalPfluger__about section__margin" id="marshalPfluger">
    <div className="marshalPfluger__about-feature">
      <img src={headshot} alt="headshot" />
      <AboutSection title="About Me" text="Ambitious software developer with a passion for coding and a solid foundation in machine learning and programming languages, eager to learn and contribute to real-world software projects as a full-time employee or intern." />
      
    </div>
    <div className="marshalPfluger__about-container">
      <AboutSection title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <AboutSection title="Programming Languages" text="Java, Python, C++, SQL, Racket " />
      <AboutSection title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <AboutSection title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
  </div>
);

export default About;