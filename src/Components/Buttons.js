import React, { useRef, useState, useEffect, useCallback } from 'react';
import useKeyDown from '../hooks/useKeyDown';
import floater from '../assets/icon.png';

export default function Buttons(props) {
    const [hoveredButton, setHoveredButton] = useState(0);
    const keyPressed = useKeyDown([38, 40, 13]);
    const routesRef = useRef(null);
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

    const handleEnterPress = useCallback(() => {
        if (hoveredButton === null) return;
        hoveredButton !== null && buttons[hoveredButton].onClick();
    }, [buttons, hoveredButton]);

    const decrementHoveredButton = useCallback(() => {
        setHoveredButton(hoveredButton === 0 || hoveredButton === null ? 4 : hoveredButton - 1);
    }, [hoveredButton]);

    const incrementHoveredButton = useCallback(() => {
        setHoveredButton(hoveredButton === 4 || hoveredButton === null ? 0 : hoveredButton + 1);
    }, [hoveredButton]);

    useEffect(() => {
        if (props.currentScreen === 'home') {
            if (keyPressed === 38) {
                decrementHoveredButton();
            } else if (keyPressed === 40) {
                incrementHoveredButton();
            } else if (keyPressed === 13) {
                handleEnterPress();
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyPressed, props.currentScreen])

    return (
        <div className="routes-container" ref={routesRef}>
            {props.currentScreen === 'home' &&
                buttons.map((button, index) =>
                    <div
                        className="icon-button-container"
                        key={button.text}
                        onMouseOver={() => setHoveredButton(index)}
                        onMouseOut={() => setHoveredButton(null)}
                    >
                        <img src={floater} className={`icon shift ${hoveredButton === index && 'icon-visible'}`} alt="" />
                        <button className="route-button"
                            style={hoveredButton === index ? { color: 'white' } : {}}
                            onClick={button.onClick}>
                            {button.text}
                        </button>
                    </div>
                )
            }
        </div>
    )
}