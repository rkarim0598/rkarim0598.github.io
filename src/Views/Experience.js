import React from 'react';
import experience from '../data/experience.json';

export default function Experience(props) {
    return (
        <div
            id="experience"
            className="screen"
            style={{
                fontSize: '3vmin',
                position: 'absolute',
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                zIndex: '50000',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                top: '50%',
                height: '80%',
                width: '80%',
                minWidth: '300px',
                color: 'white',
                alignItems: 'center',
                justifyContent: 'space-around',
            }}
        >
            <div style={{ height: '5%' }}>
                My Experience
            </div>
            <div className="experiences-container" style={{ overflowY: 'scroll', scrollbarColor: 'rgba(0, 0, 0, 0.3) transparent', fontSize: '3vmin', display: 'flex', flex: 1, width: '100%', height: '50%', maxHeight: '60vh', flexDirection: 'column', alignItems: 'center', paddingTop: '3px' }}>
                {experience.map((exp, index) =>
                    <div
                        key={index}
                        className="hovered-experience"
                        style={{ position: 'relative' }}
                    >
                        <div id="top-left" className="animated-triangle upLeft"></div>
                        <div id="top-right" className="animated-triangle upRight"></div>
                        <div id="bottom-left" className="animated-triangle downLeft"></div>
                        <div id="bottom-right" className="animated-triangle downRight"></div>
                        <div style={{ display: 'flex', alignSelf: 'flex-start', height: '100%', backgroundColor: exp.backgroundColor }}>
                            <img style={{ display: 'flex', alignSelf: 'flex-start', height: '100%', color: exp.backgroundColor }} src={require(`../assets/${exp.image}`)} alt='eventurely' />
                        </div>
                        <div style={{ padding: '5px, 0, 0, 5px', marginLeft: '5px', display: 'flex', flexDirection: 'column', flex: 1, height: '100%', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', height: '75%' }}>
                                <span style={{ lineHeight: '170%', fontSize: 'clamp(10px, 2.5vmin, 16px)' }}>{exp.date}</span>
                                <span style={{ lineHeight: '100%', fontFamily: 'Calamity-Bold', fontSize: 'clamp(10px, 2.5vmin, 16px)' }}>{exp.title} @ {exp.company}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'right', width: '35%', alignSelf: 'flex-end', height: '25%' }}>
                                {exp.current && <div className="shape">
                                    <div className="top" style={{ textAlign: 'center', lineHeight: '100%' }}>Current</div>
                                    <div className="bottom"></div>
                                </div>}
                            </div>
                        </div>
                    </div>

                )}
            </div>
            <button
                onClick={() => props.setCurrentScreen('home')}
                style={{ padding: 0, backgroundColor: 'transparent', margin: 0, border: 'none', color: 'white' }}>Back</button>
        </div>
    )
}