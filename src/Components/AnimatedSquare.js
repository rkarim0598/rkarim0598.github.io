import React from 'react';

export default function AnimatedSquare(props) {
    return (
        <div
            style={props.style}
        >
            {props.type === 'div' ?
                <div
                    className="card-anim border-hover"
                    onClick={props.onClick}
                >
                    <div id="top-left" className="animated-triangle proj-upLeft"></div>
                    <div id="top-right" className="animated-triangle proj-upRight"></div>
                    <div id="bottom-left" className="animated-triangle proj-downLeft"></div>
                    <div id="bottom-right" className="animated-triangle proj-downRight"></div>
                    {props.children}
                </div>
                :
                <button
                    className="card-anim border-hover"
                    onClick={props.onClick}
                >
                    <div id="top-left" className="animated-triangle proj-upLeft"></div>
                    <div id="top-right" className="animated-triangle proj-upRight"></div>
                    <div id="bottom-left" className="animated-triangle proj-downLeft"></div>
                    <div id="bottom-right" className="animated-triangle proj-downRight"></div>
                    {props.children}
                </button>
            }
        </div>
    )
}