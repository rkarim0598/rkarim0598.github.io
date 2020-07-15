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
                flexDirection: 'column',
                zIndex: '50000',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                top: '50%',
                maxHeight: '80%',
                width: '80%',
                // minHeight: '600px',
                minWidth: '300px',
                color: 'white',
                alignItems: 'center',
                justifyContent: 'space-around',
            }}
        >
            <div style={{ paddingBottom: '30px', height: '5%' }}>
                My Experience
            </div>
            <div style={{ overflow: 'auto', fontSize: '3vmin', display: 'flex', flex: 1, width: '100%', height: '50%', minHeight: '500px', flexDirection: 'column', alignItems: 'center' }}>
                {experience.map(exp =>
                    <div
                        style={{ 
                            borderStyle: 'solid', 
                            borderWidth: 1, 
                            borderColor: 'white', 
                            padding: '2px', 
                            display: 'flex', 
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'black', 
                            flexDirection: 'row', 
                            marginBottom: '10px', 
                            width: '80%', 
                            height: '10%', 
                            minHeight: '75px',
                            maxWidth: '475px',
                        }}
                    >
                        {/* <div style={{ width: '28%', height: '98%', background: 'blue' }}></div> */}
                        <img style={{ minWidth: '50px', width: '10vmin', maxWidth: '100px' }} src={require(`../assets/${exp.image}`)} alt='eventurely' />
                        <div style={{ padding: '10px', display: 'flex', flex: 1, flexDirection: 'column', width: '73%', height: '98%' }}>
                            <span style={{ lineHeight: '170%', fontSize: 'clamp(10px, 2.5vmin, 16px)' }}>{exp.date}</span>
                            <span style={{ lineHeight: '100%', fontFamily: 'Calamity-Bold', fontSize: 'clamp(10px, 2.5vmin, 16px)' }}>{exp.title}</span>
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