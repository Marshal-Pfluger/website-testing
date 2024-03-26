import React from 'react';
import './aboutSection.css';

const aboutSection = ({ title, text }) => (
<div className="marshalPfluger__features-container__feature">
    <div className="marshalPfluger__features-container__feature-title">
    <div />
    <h1>{title}</h1>
    </div>
    <div className="marshalPfluger__features-container_feature-text">
    <p>{text}</p>
    </div>
</div>
);

export default aboutSection;