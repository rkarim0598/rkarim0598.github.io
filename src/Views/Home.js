import React, { useState } from 'react';
import HomeButton from '../Components/HomeButton';
import '../css/home.css';
import git from '../assets/git.png';
import linkedin from '../assets/linkedin.png';
import mail from '../assets/mail.svg';

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
            text: 'Projects',
            onClick: () => {
                props.setCurrentScreen('projects');
            }
        },
        {
            text: 'Skills',
            onClick: () => props.setCurrentScreen('skills')
        },
        {
            text: 'About',
            onClick: () => {
                props.setCurrentScreen('about');
            }
        },
        {
            type: 'link',
            text: 'View Source',
            url: 'https://github.com/rkarim0598/rkarim0598.github.io'
        }
    ];

    const links = [
        {
            url: "https://github.com/rkarim0598",
            image: git,
            alt: "Git logo"
        },
        {
            type: 'button',
            image: mail,
            alt: "Mail logo",
            onClick: () => {
                props.setCurrentScreen('contact');
            }
        },
        {
            url: "https://www.linkedin.com/in/rayyan-k-16a63b106/",
            image: linkedin,
            alt: "LinkedIn logo"
        }
    ]

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
                </div>
                <div style={{ position: 'absolute', left: 0, bottom: '10px', display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    {props.currentScreen === 'home' && links.map((link, index) =>
                        <div key={index} style={{ paddingRight: '10vmin', paddingLeft: '10vmin' }}>
                            {link.type === undefined ?
                                <a
                                    href={link.url}
                                    style={props.currentScreen !== 'home' ? { pointerEvents: 'none', cursor: 'default' } : {}}                                    
                                >
                                    <img
                                        src={link.image}
                                        style={{ width: 'calc(30px + 5vw)' }}
                                        alt={link.alt}
                                    />
                                </a> :
                                <button
                                    className="plain-button"
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'centre' }}
                                    onClick={() => link.onClick && link.onClick()}
                                    disabled={props.currentScreen !== 'home'}
                                >
                                    <img
                                        src={link.image}
                                        style={{ width: 'calc(30px + 5vw)' }}
                                        alt={link.alt}
                                    />
                                </button>
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}