import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="bio">
        <h2>About Me</h2>
        <p>
          I am a passionate software developer with a strong foundation in machine learning and programming languages. I am enthusiastic about learning and contributing to real-world software projects. My background includes experience in lodge coordination, ticket sales, and technical support roles.
        </p>
      </div>
      <div className="skills">
        <h3>Skills</h3>
        <ul>
          <li>Java</li>
          <li>Python</li>
          <li>C++</li>
          <li>SQL</li>
          <li>Racket</li>
          <li>Software Development</li>
          <li>Object-Oriented Design</li>
          <li>APIs</li>
          <li>Database Implementation and Management</li>
          <li>Client/Server Programming</li>
          <li>Machine Learning</li>
          <li>AI (Artificial Intelligence)</li>
          <li>Keras, Tensorflow, Pandas</li>
          <li>Data Visualization (Matplotlib)</li>
          <li>Hadoop, MapReduce</li>
          <li>AWS Cloud Services</li>
        </ul>
      </div>
      <div className="education">
        <h3>Education</h3>
        <p>
          Bachelor of Applied Science (BAS) in Software Development, GPA: 3.89, Austin Community College (Dec 2023)<br />
          Associate degree in Computer Science, GPA: 3.9, Austin Community College (May 2022)
        </p>
      </div>
    </div>
  );
};

export default About;