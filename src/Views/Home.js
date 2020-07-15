import React from 'react';
import Buttons from '../Components/Buttons';
import '../app.css';

export default function Home(props) {
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
                    <Buttons
                        setCurrentScreen={props.setCurrentScreen}
                        currentScreen={props.currentScreen}
                    />
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