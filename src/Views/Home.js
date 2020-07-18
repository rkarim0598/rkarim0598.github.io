import React, { useState } from 'react';
import HomeButton from '../Components/HomeButton';
import '../css/home.css';

export default function Home(props) {
    const [hoveredButton, setHoveredButton] = useState(0);
    const buttons = [
        {
            text: 'Experience',
            onClick: () => {
                props.setCurrentScreen('experience');
            }
        },
        {
            text: 'Skills',
            onClick: () => console.log('skillz')
        },
        {
            text: 'Options',
            onClick: () => console.log('options')
        },
        {
            text: 'amiibo',
            onClick: () => console.log('amiibo')
        },
        {
            text: 'View Source',
            onClick: () => window.open('https://github.com/rkarim0598/rkarim0598.github.io')
        }
    ];

    return (
        <div
            className={`image-container ${props.currentScreen !== 'home' && 'blur'}`}
        >
            <div id="welcome" className="animated fadeIn screen">
                <div className="landing-text-container">
                    <div style={{ fontSize: '11vmin', lineHeight: '93%' }}>R</div>
                    <div className="column-text-container">
                        <div style={{ fontSize: '3vmin' }}>
                            welcome to
                        </div>
                        <div style={{ fontSize: '8.5vmin', lineHeight: '35%' }}>
                            ayyan's
                        </div>
                        <div style={{ fontSize: '3.5vmin', lineHeight: '220%' }}>
                            Personal Site
                        </div>
                    </div>
                </div>
                <div className="bottom-half-container">
                    <div className="routes-container">
                        {props.currentScreen === 'home' &&
                            buttons.map((button, index) =>
                                <HomeButton 
                                    key={button.text} 
                                    button={button} 
                                    onHover={() => setHoveredButton(index)} 
                                    hovered={hoveredButton === index}
                                />
                            )
                        }
                    </div>
                    <div className="credits-container">
                        <div className="credit">
                            Ver 0.0.1
                        </div>
                        <div className="credit">
                            DLC Ver 0.0
                        </div>
                        <div className="credit">
                            &#169; Rayyan Karim
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}