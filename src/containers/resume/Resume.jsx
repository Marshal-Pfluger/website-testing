import React from 'react'
import './resume.css';
import resume from '../../assets/resume.png';

const Resume = () => {
  return (
    <div>
      <div className='marshalPfluger__resume'>
        <h1>Resume</h1>
        <div className='marshalPfluger__resume-grid'>
          <div className='resume-item' onClick={() => window.open('https://marshalpflugerresume.s3.amazonaws.com/Resume_1.3.pdf', '_blank')}>
            <img src={resume} alt="resume" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
