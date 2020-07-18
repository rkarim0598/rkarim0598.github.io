import React from 'react';
import ExperienceCard from '../Components/ExperienceCard';
import experience from '../data/experience.json';
import floater from '../assets/icon.png';
import '../css/experience.css';

export default function Experience(props) {
    return (
        <div
            id="experience"
            className="screen"
        >
            <div className="my-experience-label">
                My Experience
            </div>
            <div className="experiences-container">
                {experience.map((exp, index) =>
                    <ExperienceCard key={index} exp={exp} />
                )}
            </div>
            <button
                onClick={() => props.setCurrentScreen('home')}
                className="experience-back-button"
            >Back</button>
        </div>
    )
}