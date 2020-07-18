import React from 'react';
import floater from '../assets/icon.png';
import '../css/home-button.css';

export default function HomeButton(props) {
    return (
        <div
            className="icon-button-container"
            onMouseOver={props.onHover}
        >
            <img 
                src={floater} 
                className={`icon shift ${props.hovered && 'icon-visible'}`} 
                alt="" 
            />
            <button className="route-button"
                style={props.hovered ? { color: 'white' } : {}}
                onClick={props.button.onClick}
            >
                {props.button.text}
            </button>
        </div>
    )
}