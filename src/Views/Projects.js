import React from 'react';
import PageHeader from '../Components/PageHeader';
import BottomBar from '../Components/BottomBar';
import '../css/projects.css';

export default function Projects(props) {
    const projects = [
        {
            "img": "npcompete.jpg",
            "name": "NP Compete",
            "abbr": "NP Compete",
            "description": "Yada yada ydada yada yady adady adada"
        },
        {
            "img": "gnnaa.jpg",
            "name": "Ghana Need An Ambulance",
            "abbr": "GNAA",
            "description": "yada ksljdkfjs dlfkjsjeflsjef"
        },
        {
            "img": "tethical.jpg",
            "name": "Tethical Test",
            "abbr": "Tethical Test",
            "description": "lsdkjf slkjf eslifjsleijf slefj"
        },
        {
            "img": "tinder.jpg",
            "name": "tiNDer",
            "abbr": "tiNDer",
            "description": "lskjdf slkjdf selijflsiejf sselfjk"
        },
        {
            "img": "munched.jpg",
            "name": "Munched",
            "abbr": "Munched",
            "description": "lskjdf slkjef slefjsleijfsle fj"
        },
        {
            "img": "roomnd.jpg",
            "name": "RoomND",
            "abbr": "RoomND",
            "description": "lsdkjfsl efjs ljeflsejflisejf lsejf"
        },
        {
            "img": "hh.jpg",
            "name": "Hannah's House",
            "abbr": "HH",
            "description": "slkjf elsijef lsiejf sliejflsjefl sjlkdjf"
        }
    ]

    return (
        <div className="screen">
            <PageHeader title={'My Projects'} />
            <div
                className="content-fade fadeIn"
                style={{
                    display: 'flex',
                    width: '90%',
                    height: '80%',
                    flexDirection: 'row',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flex: 1,
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }}
                >
                    <span>Select a tile to learn more!</span>
                </div>
                <div
                    style={{
                        display: 'flex',
                        maxHeight: '100%',
                        width: '120px',
                        flexDirection: 'column',
                        alignItems: 'center',
                        overflowY: 'auto',
                        overflowX: 'hidden'
                    }}
                >
                    {projects.map((proj, index) =>
                        <div
                            key={proj.name}
                            style={{
                                position: 'relative',
                                minWidth: '100px',
                                minHeight: '120px',
                                marginBottom: '25px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <button
                                className="card-anim"
                                style={{
                                    width: '100px',
                                    minHeight: '100px',
                                    backgroundColor: 'lightblue',
                                    position: 'relative',
                                    margin: 0,
                                    padding: 0,
                                    borderStyle: 'none',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                                }}
                            >
                                <div id="top-left" className="animated-triangle proj-upLeft"></div>
                                <div id="top-right" className="animated-triangle proj-upRight"></div>
                                <div id="bottom-left" className="animated-triangle proj-downLeft"></div>
                                <div id="bottom-right" className="animated-triangle proj-downRight"></div>
                            </button>
                            <div
                                style={{
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: 'flex',
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <span
                                    style={{ fontSize: 'calc(16px + 0.15vw)' }}
                                >{proj.abbr}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div >
            <BottomBar
                leftButton={{
                    text: 'Exp',
                    onPress: () => props.setCurrentScreen('experience')
                }}
                middleButton={{
                    text: 'Home',
                    onPress: () => props.setCurrentScreen('home')
                }}
                rightButton={{
                    text: 'Skills',
                    onPress: () => props.setCurrentScreen('skills')
                }}
            />
        </div >
    )
}