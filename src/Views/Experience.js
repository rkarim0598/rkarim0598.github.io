import React from 'react';
import ExperienceCard from '../Components/ExperienceCard';
import PageHeader from '../Components/PageHeader';
import experience from '../data/experience.json';
import '../css/experience.css';
import BottomBar from '../Components/BottomBar';

export default function Experience(props) {
    return (
        <div
            id="experience"
            className="screen"
        >
            <PageHeader title={'My Experience'} />
            <div className="experiences-container">
                {experience.map((exp, index) =>
                    <ExperienceCard key={index} exp={exp} onClick={() => props.setCurrentScreen('experience/' + exp.id)} />
                )}
            </div>
            <BottomBar message="Select a card to view more" buttonText={'Home'} onPress={() => props.setCurrentScreen('home')} />
        </div>
    )
}