import React from 'react';
import './projects.css';
import coral from '../../assets/coral2.jpg'
import cat from '../../assets/cat.jpg'
import plane from '../../assets/plane.jpg'
import stock from '../../assets/stock.jpg'
import disk from '../../assets/disk.jpg'
import bridge from '../../assets/bridge.jpg'
import money from '../../assets/money.jpg'
import payroll from '../../assets/payroll.jpg'


const Projects = () => {
  const handleProjectClick = (projectName) => {
    const url = `https://github.com/Marshal-Pfluger/${projectName}`;
    window.open(url, '_blank'); // Opens the URL in a new tab
  };
  return (
    <div>
      <div className='marshalPfluger__projects'>
        <h1>Projects</h1>
        <div className='marshalPfluger__project-grid'>
          <div className='project-item' onClick={() => handleProjectClick('ML-CoralHealthClassifier/blob/main/Capstone.ipynb')}>
          <img src={coral} alt="coral" />
            ML Coral Health Classifier</div>
          <div className='project-item' onClick={() => handleProjectClick('ML-CatGenerator/blob/main/CM5_Project_Marshal_Pfluger.ipynb')}>
          <img src={cat} alt="cat" />
            Generative Adversarial Network Cat Generator</div>
          <div className='project-item' onClick={() => handleProjectClick('Hadoop-AirlineFlightAnalysis')}>
          <img src={plane} alt="plane" />
            Hadoop Airline Flight Data Analysis</div>
          <div className='project-item' onClick={() => handleProjectClick('Spark-StockDataAnalysis/blob/main/Project8Driver.java')}>
          <img src={stock} alt="stock" />
            Spark Stock Data Analysis</div>
          <div className='project-item' onClick={() => handleProjectClick('MemoryAllocationProgram')}>
          <img src={disk} alt="disk" />
            Memory Allocation Program</div>
          <div className='project-item' onClick={() => handleProjectClick('BridgeSimulation_MultiThreaded')}>
          <img src={bridge} alt="bridge" />
            Multi-Threaded Bridge Simulation</div>
          <div className='project-item' onClick={() => handleProjectClick('ATM_Program')}>
          <img src={money} alt="money" />
            ATM Implementation</div>
          <div className='project-item' onClick={() => handleProjectClick('Payroll_Program')}>
          <img src={payroll} alt="payroll" />Payroll</div>
        </div>
      </div>
    </div>
  );
};

export default Projects