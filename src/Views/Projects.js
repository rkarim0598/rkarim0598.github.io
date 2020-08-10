import React, { useState } from 'react';
import PageHeader from '../Components/PageHeader';
import BottomBar from '../Components/BottomBar';
import '../css/projects.css';

export default function Projects(props) {
    const [currProj, setCurrProj] = useState(null);

    const projects = [
        {
            "imgtype": "text",
            "text": "NPC",
            "name": "NP Compete",
            "abbr": "NP Compete",
            "built": "Fall '19, ND Hackathon",
            "tech": "VueJS, Firebase Firestore & Functions, Stripe",
            "repo": "https://github.com/rkarim0598/tethical",
            "site": "https://tethical.web.app/",
            "description": "Built at the request of Every Kid a King, a student-run organization that gives grants to nonprofits in the South Bend area, NP Compete was created with the purpose of bringing more awareness to nonprofits around South Bend.  Inspired by the model of ND Day, a day long event that focuses on fundraising for ND dorms and clubs, NP Compete attempts to provide a fun and interactive experience while also raising money for many good causes.  We used VueJS to build the frontend, Firebase to store data and run cloud functions, and Stripe to implement the donation process."
        },
        {
            "img": "gnaa.png",
            "name": "Ghana Need An Ambulance",
            "abbr": "GNAA",
            "built": "Fall '18, ND Hackathon",
            "tech": "VueJS, Firebase, Google Maps API",
            "repo": "https://github.com/GhanaNeedAnAmbulance",
            "site": "https://gnaa-4e1a5.firebaseapp.com/",
            "description": "GNAA is a proof of concept cross platform solution created with the goal of helping increase transparency of the availability of hospitals in Ghana.  The final product consisted of a desktop app and a web app; I worked primarily on the web app.  This app was built in VueJS, and used Firebase to store our hospital data.  Users could view all the nearby hospitals and the number of beds available at each, as well as view hospital locations on a map and get instructions to each hospital."
        },
        {
            "img": "tethical.png",
            "name": "Tethical Test",
            "abbr": "Tethical Test",
            "built": "Spring '19, ND Agile Course",
            "tech": "ReactJS",
            "repo": "https://github.com/rkarim0598/agile-starter-proj",
            "site": "https://tethical-test.netlify.app/",
            "description": "The Tethical Test was created as an introductory project for a course covering Agile and other development methodologies.  This particular project sought to emulate Buzzfeed quizzes, but use a more serious subject.  Our app focuses on giving you possible ethical dilemmas that you might come across in the workplace.  Based on your responses, we generate your \"score\" in different categories and try to match you with a tech company similar to you.  The company profiles were created by the group through consensus, so take the matches with a grain of salt."
        },
        {
            "img": "tethical.png",
            "name": "tiNDer",
            "abbr": "tiNDer",
            "video": "https://nocensoring.net/videos/embed/ba19b0e0-2c41-4664-9866-8180604335c4",
            "description": "lskjdf slkjdf selijflsiejf sselfjk"
        },
        {
            "img": "tethical.png",
            "name": "Munched",
            "abbr": "Munched",
            "description": "lskjdf slkjef slefjsleijfsle fj"
        },
        {
            "img": "tethical.png",
            "name": "RoomND",
            "abbr": "RoomND",
            "description": "lsdkjfsl efjs ljeflsejflisejf lsejf"
        },
        {
            "img": "tethical.png",
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
                    {projects[currProj]?.video ?
                        <iframe
                            width="90%"
                            height="50%"
                            sandbox="allow-same-origin allow-scripts allow-popups"
                            src={projects[currProj].video}
                            frameborder="0"
                            allowFullScreen
                            allow="full-screen"    
                        /> :
                        <span>{currProj === null ? 'Select a tile to learn more!' : projects[currProj].description || 'yo'}</span>
                    }
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
                                className="card-anim border-hover"
                                onClick={() => setCurrProj(index)}
                            >
                                <div id="top-left" className="animated-triangle proj-upLeft"></div>
                                <div id="top-right" className="animated-triangle proj-upRight"></div>
                                <div id="bottom-left" className="animated-triangle proj-downLeft"></div>
                                <div id="bottom-right" className="animated-triangle proj-downRight"></div>
                                {proj.imgtype === 'text' ?
                                    <div className="proj-text-container" style={{ display: 'flex', height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', fontFamily: 'HyliaSerifBeta-Regular', fontSize: 'calc(20px + .15vw)', color: 'white' }}>{proj.text}</div> :
                                    <img
                                        className="proj-text-container"
                                        alt={proj.abbr}
                                        src={require(`../assets/${proj.img}`)}
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                }
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