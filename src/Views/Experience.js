import React, { useState, useEffect } from 'react';
import ExperienceCard from '../Components/ExperienceCard';
import PageHeader from '../Components/PageHeader';
import experience from '../data/experience.json';
import '../css/experience.css';
import pin from '../assets/map-pin.svg';

export default function Experience(props) {
    const [currExp, setCurrExp] = useState(null);

    useEffect(() => {
        console.log(currExp)
    }, [currExp]);

    return (
        <div
            id="experience"
            className="screen"
        >
            <PageHeader title={'My Experience'} />
            {currExp === null ?
                <div className="experiences-container">
                    {experience.map((exp, index) =>
                        <ExperienceCard key={index} exp={exp} onClick={() => setCurrExp(index)} />
                    )}
                </div> :
                <div className="experiences-container" style={{ overflow: 'hidden', padding: '3px', paddingRight: '3px', display: 'flex', overflowY: 'none', backgroundColor: 'black', width: '85%', maxWidth: '550px' }}>
                    <div style={{ display: 'flex', width: '100%', height: 'calc(80px + 10vmin)', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <img loading={'lazy'} style={{ display: 'flex', width: 'calc(80px + 10vmin)', height: '100%' }} src={require(`../assets/${experience[currExp].image}`)} alt='eventurely' />
                        <div style={{ paddingLeft: '3px', display: 'flex', flex: 1 }}>
                            <div style={{ display: 'flex', lineHeight: '115%', fontSize: 'calc(20px + 0.15vw)', flexDirection: 'column', width: '100%' }}>
                                {/* <div style={{ display: 'flex', fontSize: 'calc(20px + 0.15vw)', lineHeight: '115%', width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}> */}
                                <span>{experience[currExp].company}</span>
                                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                                    <img loading={'lazy'} style={{ display: 'flex', width: 'calc(20px + 0.15vw)', height: 'calc(20px + 0.15vw)' }} src={require(`../assets/map-pin.svg`)} alt='eventurely' />
                                    <span>Notre Dame, IN</span>
                                </div>
                                {/* </div> */}
                                <span>{experience[currExp].date}</span>
                                <span>{experience[currExp].title}</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
                        <ul className="experience-card-description-list">
                            {experience[currExp].description.map((desc, index) =>
                                <li key={index} className="experience-card-description-element">{desc}</li>
                            )}
                        </ul>
                    </div>
                </div>
            }
            <div style={{ display: 'flex', backgroundColor: 'rgba(0, 0, 0, 0.4)', height: '5%', width: '100%' }}>
                <div style={{ width: '25%' }}></div>
                <div style={{ width: '50%', alignItems: 'center', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><span>Select a card to view more</span></div>
                <div style={{ width: '23%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <button
                        onClick={() => {
                            props.setCurrentScreen('home')
                        }}
                        className="experience-back-button"
                    >Back</button>
                </div>
            </div >
        </div >
    )
}