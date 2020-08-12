import React from 'react';
import RightChevron from './RightChevron';
import LeftChevron from './LeftChevron';

export default function BottomBar(props) {
    return (
        <div style={{ display: 'flex', backgroundColor: 'rgba(0, 0, 0, 0.4)', alignItems: 'center', justifyContent: 'center', height: '5%', width: '100%', paddingLeft: '10px', paddingRight: '10px' }}>
            <div style={{ display: 'flex', height: '100%', width: '100%', maxWidth: '550px' }}>
                <div style={{ width: '33%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                    {props.leftButton &&
                        <button
                            onClick={props.leftButton.onPress}
                            className="experience-back-button"
                            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'calc(20px + 0.15vw)', height: 'calc(20px + 0.15vw)' }}>
                                <LeftChevron />
                            </div>
                            <span>{props.leftButton.text}</span>
                        </button>
                    }
                </div>
                <div style={{ width: '33%', alignItems: 'center', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                    {props.middleButton &&
                        <button
                            onClick={props.middleButton.onPress}
                            className="experience-back-button"
                            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <span>{props.middleButton.text}</span>
                        </button>
                    }
                </div>
                <div style={{ width: '33%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    {props.rightButton &&
                        <button
                            onClick={props.rightButton.onPress}
                            className="experience-back-button"
                            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <span>{props.rightButton.text}</span>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'calc(20px + 0.15vw)', height: 'calc(20px + 0.15vw)' }}>
                                <RightChevron />
                            </div>
                        </button>
                    }
                </div>
            </div>
        </div >
    )
}