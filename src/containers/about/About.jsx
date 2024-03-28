import React from 'react';
import AboutSection from '../../components/aboutSection/AboutSection.jsx';
import AboutList from '../../components/aboutList/AboutList.jsx';
import './about.css';
import headshot from '../../assets/headshot.jpg';

const About = () => (
  <div className="marshalPfluger__about section__margin" id="marshalPfluger">
    <img src={headshot} alt="headshot" />
    <div className="marshalPfluger__about-feature">
      
      <AboutSection title="About Me" text=" I am a ambitious software developer with a passion for coding and a solid foundation in various languages and platforms. I am eager to learn and contribute to real-world software projects as a full-time employee or intern." />
    </div>
    <div className="marshalPfluger__about-container">
      <AboutList title="Skills" text="Various Development Methodologies, Object Oriented Programming, Database Design and Managment, Client/Server Software, Machine Learning,
                                          Artificial Intelligence, Keras, Tensorflow, Pandas, Data Visualization Tools, Matplotlib, Hadoop, MapReduce, AWS Cloud Services " />
      <AboutList title="Programming Languages" text="Java, Python, C++, SQL, Racket " />
      <AboutList title="Professional Experience" text="Lodge Coordinator & Medications Manager - Jaywalker Lodge - Carbondale Colorado - Oct 2018 to May 2020, Lodge Technician 
                                          - Jaywalker Lodge - Carbondale Colorado - Feb 2018 to Oct 2018, Ticket Sales Lead - Aspen Skiing Company - Aspen Colorado - Oct 2017 to Feb 2018, Frontline Ticket Seller - Aspen Skiing Company - Aspen Colorado - Nov 2016 to Oct 2017" />
      <AboutList title="Education" text="Austin Community College - BAS Software Development - GPA: 3.89 - Graduated Dec 2023, Austin Community College - Associate Degree Computer Science - GPA: 3.9 - Graduated May 2022" />
    </div>
  </div>
);

export default About;