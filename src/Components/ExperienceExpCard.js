import React from 'react';
import PageHeader from './PageHeader';
import BottomBar from './BottomBar';
import link from '../assets/external-link.svg';
import house from '../assets/home.svg';
import calendar from '../assets/calendar.svg';
import briefcase from '../assets/briefcase.svg';
import pin from '../assets/map-pin.svg';
import ms from '../assets/students-widget-expanded.png';

export default function ExperienceExpCard({ exp }) {
    const IconAndText = ({ image, alt, text }) => {
        return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <img
                    loading={'lazy'}
                    style={{ display: 'flex', width: 'calc(20px + 0.15vw)', height: 'calc(20px + 0.15vw)', paddingRight: 'calc(5px + 0.5vw)' }}
                    src={image}
                    alt={alt}
                />
                <span>{text}</span>
            </div>
        )
    }

    return (
        <div
            id="experience"
            className="screen"
        >
            <PageHeader title={exp.company} />
            <div className="experiences-container" style={{ overflow: 'hidden', padding: '3px', paddingRight: '3px', display: 'flex', overflowY: 'none', backgroundColor: 'rgba(0, 0, 0, 0.4)', width: '85%', maxWidth: '550px' }}>
                <div style={{ display: 'flex', width: '100%', height: 'calc(80px + 10vmin)', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ backgroundColor: exp.backgroundColor }}>
                        <img
                            loading={'lazy'}
                            style={{ display: 'flex', width: 'calc(80px + 10vmin)', height: '100%' }}
                            src={require(`../assets/${exp.image}`)}
                            alt={exp.company}
                        />
                    </div>
                    <div style={{ paddingLeft: 'calc(5px + 0.5vw)', display: 'flex', flex: 1 }}>
                        <div style={{ display: 'flex', lineHeight: '115%', fontSize: 'calc(20px + 0.15vw)', flexDirection: 'column', width: '100%', height: '100%', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <IconAndText image={house} alt='company' text={exp.company} />
                                <a href={exp.website}>
                                    <img
                                        loading={'lazy'}
                                        style={{ width: 'calc(20px + 0.15vw)', height: 'calc(20px + 0.15vw)' }}
                                        src={link}
                                        alt='link to company'
                                    />
                                </a>
                            </div>
                            <IconAndText image={calendar} alt='calendar' text={exp.date} />
                            <IconAndText image={briefcase} alt='briefcase' text={exp.title} />
                            <IconAndText image={pin} alt='pin' text={exp.location} />
                        </div>
                    </div>
                </div>
                <div style={{ paddingTop: 'calc(5px + 0.5vw)', display: 'flex', width: '100%', height: '100%', fontSize: 'calc(13px + 0.2vw)', lineHeight: '145%', flexDirection: 'column', overflowY: 'auto' }}>
                    {exp.detailed?.map((deet, index) =>
                        deet.type === 'text' ?
                            <span key={index}>{deet.text}</span> :
                            deet.type === 'buzzwords' ?
                                <span key={index}>Buzzwords: <b>{deet.text}</b></span> :
                                deet.type === 'link' ?
                                    <a key={index} style={{ color: 'lightblue' }} href={deet.url}>{deet.text}</a> :
                                    deet.type === 'image' ?
                                        <img key={index} src={ms} alt={deet.alt} style={{ width: '100%' }} /> :
                                        <></>
                    )}
                </div>
            </div>
            <BottomBar message={''} buttonText={'Experience'} onPress={() => window.history.back()} />
        </div>
    )
}