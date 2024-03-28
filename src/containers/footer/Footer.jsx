import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './footer.css'

const Footer = () => {
  const githubUrl = 'https://github.com/Marshal-Pfluger';
  const linkedinUrl = 'https://www.linkedin.com/in/marshal-pfluger';
  const emailSubject = encodeURIComponent('Regarding Job Opportunity');

  const handleEmailClick = () => {
    window.location.href = `mailto:MarshalPfluger7@gmail.com?subject=${emailSubject}`;
  };

  return (
    <footer>
      <div>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <div>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <div>
        <button onClick={handleEmailClick}>
          <FaEnvelope />
        </button>
      </div>
    </footer>
  );
};

export default Footer;