import React from 'react';
import './aboutList.css';

const AboutList = ({ title, text }) => {
    // Split the text by commas and trim each item to remove extra spaces
    const items = text.split(',').map(item => item.trim());

    return (
        <div className="marshalPfluger__features-container__feature">
            <div className="marshalPfluger__features-container__feature-title">
                <div />
                <h1>{title}</h1>
            </div>
            <div className="marshalPfluger__features-container__feature-text">
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AboutList;