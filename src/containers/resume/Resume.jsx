import React from 'react'
import './resume.css';
import resume from '../../assets/resume.png';

const Resume = () => {
  return (
    <div>
      <div className='marshalPfluger__resume'>
        <h1>Resume</h1>
        <div className='marshalPfluger__resume-grid'>
          <div className='resume-item' onClick={() => window.open('https://github.com/Marshal-Pfluger', '_blank')}>
            <img src={resume} alt="resume" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
