import React from 'react';
import Chevron from '../Components/Chevron';

export default function BottomBar(props) {
    return (
        <div style={{ display: 'flex', backgroundColor: 'rgba(0, 0, 0, 0.4)', height: '5%', width: '100%' }}>
            <div style={{ width: '25%' }}></div>
            <div style={{ width: '50%', alignItems: 'center', textAlign: 'center', display: 'flex', justifyContent: 'center' }}><span>{props.message}</span></div>
            <div style={{ width: '25%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <button
                    onClick={props.onPress}
                    className="experience-back-button"
                    style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                >
                    <span>{props.buttonText || 'Home'}</span>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'calc(20px + 0.15vw)', height: 'calc(20px + 0.15vw)' }}>
                        <Chevron />
                    </div>
                </button>
            </div>
        </div>
    )
}