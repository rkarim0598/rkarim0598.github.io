import React from 'react';
import ExperienceCard from '../Components/ExperienceCard';
import PageHeader from '../Components/PageHeader';
import experience from '../data/experience.json';
import BottomBar from '../Components/BottomBar';
import '../css/experience.css';

export default function Experience(props) {
    return (
        <div
            className="screen"
        >
            <PageHeader title={'My Experience'} />
            <span style={{ fontSize: 'calc(16px + 1vw' }}>Select a card to view more</span>
            <div className="experiences-container">
                {experience.map((exp, index) =>
                    <ExperienceCard key={index} exp={exp} onClick={() => props.setCurrentScreen('experience/' + exp.id)} />
                )}
            </div>
            <BottomBar
                middleButton={{ text: 'Home', onPress: () => props.setCurrentScreen('home') }}
                rightButton={{ text: 'About', onPress: () => props.setCurrentScreen('about') }}
            />
        </div>
    )
}