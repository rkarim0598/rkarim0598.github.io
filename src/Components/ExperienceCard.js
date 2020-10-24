import React from 'react';
import '../css/experience-card.css';

export default function (props) {
    return (
        <button
            className="hovered-experience card-anim"
            onClick={props.onClick}
        >
            <div id="top-left" className="animated-triangle upLeft"></div>
            <div id="top-right" className="animated-triangle upRight"></div>
            <div id="bottom-left" className="animated-triangle downLeft"></div>
            <div id="bottom-right" className="animated-triangle downRight"></div>
            <div className="experience-card-image-container" style={{ backgroundColor: props.exp.backgroundColor }}>
                <img loading={'lazy'} style={{ display: 'flex', alignSelf: 'flex-start', height: '100%', color: props.exp.backgroundColor }} src={require(`../assets/experience/${props.exp.image}`)} alt='eventurely' />
            </div>
            <div className="experience-card-text-container">
                <div className="experience-card-top-text-container">
                    <div className="experience-card-company-date-container">
                        <span className="experience-card-company">{props.exp.company}</span>
                        <span>{props.exp.date}</span>
                    </div>
                    <span className="experience-card-title">{props.exp.title}</span>
                    <ul className="experience-card-description-list">
                        {props.exp.description.map((desc, index) =>
                            <li key={index} className="experience-card-description-element">{desc}</li>
                        )}
                    </ul>
                </div>
                <div className="experience-card-bottom-text-container">
                    {props.exp.current && <div className="shape">
                        <div className="top" style={{ textAlign: 'center', lineHeight: '160%', fontSize: 'clamp(12px, 2.5vmin, 14px)' }}>Current</div>
                        <div className="bottom"></div>
                    </div>}
                </div>
            </div>
        </button>
    )
}