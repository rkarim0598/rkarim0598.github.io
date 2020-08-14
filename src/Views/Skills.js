import React from 'react';
import PageHeader from '../Components/PageHeader';
import BottomBar from '../Components/BottomBar';

const skills = {
    "Experienced": [
        {
            "name": "JavaScript",
            "img": "js.png"
        },
        {
            "name": "React",
            "img": "react.png"
        },
        {
            "name": "React Native",
            "img": "react.png"
        },
        {
            "name": "SQL",
            "imgType": "text",
        },
        {
            "name": "Linux",
            "img": "linux.png"
        },
        {
            "name": "Git",
            "imgPath": "root",
            "img": "git.png"
        }
    ],
    "Familiar": [
        {
            "name": "Vue",
            "img": "vue.png"
        },
        {
            "name": "Node.js",
            "img": "nodejs.png"
        },
        {
            "name": "Mobx",
            "img": "mobx.png"
        },
        {
            "name": "Python",
            "img": "python.png"
        },
        {
            "name": "Django",
            "imgType": "text"
        },
        {
            "name": "C",
            "img": "c.png"
        },
        {
            "name": "C++",
            "img": "cpp.png"
        },
        {
            "name": "Firebase",
            "img": "firebase.png"
        },
        {
            "name": "GraphQL",
            "img": "graphql.png"
        },
        {
            "name": "CSS",
            "img": "css.png"
        },
        {
            "name": "HTML",
            "img": "html.png"
        },
        {
            "name": "Windows",
            "img": "windows.jpg"
        },
    ]
}

export default function Skills(props) {
    return (
        <div className="screen">
            <PageHeader title={'My Skills'} />
            <div className="content-fade fadeIn"
                style={{
                    maxHeight: '85%',
                    width: '85%',
                    maxWidth: '600px',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '10px',
                    overflowY: 'auto'
                }}
            >
                {Object.entries(skills).map(([expertise, elems]) =>
                    <div style={{ width: '100%', maxHeight: '50%' }} key={expertise}>
                        <span style={{ fontSize: 'calc(20px + .15vw)' }}>{expertise}</span>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, 100px)',
                                // gridTemplateRows: 'repeat(auto-fill, '
                                gridGap: '10px',
                                width: '100%',
                                maxHeight: '85%',
                                overflowY: 'auto'
                            }}
                        >
                            {elems.map(skill =>
                                <div
                                    key={skill.name}
                                    style={{
                                        // flexFlow: 'row wrap',
                                        // flex: 1,
                                        // flexBasis: '25%',
                                        width: '100px',
                                        height: 'calc(100px + 30px)',
                                        textAlign: 'center',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-around',
                                        // backgroundColor: 'yellow',
                                        // marginRight: 'auto'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: 'calc(100% - 30px)', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                        {skill.imgType === 'text' ?
                                            <span style={{ fontSize: 'calc(20px + .15vw)', fontFamily: 'HyliaSerifBeta-Regular' }}>{skill.name}</span>
                                            :
                                            <img
                                                loading="lazy"
                                                alt={skill.name}
                                                src={require(`../assets/${skill.imgPath === 'root' ? skill.img : `skills/${skill.img}`}`)}
                                                style={{
                                                    height: '90%',
                                                }}
                                            ></img>
                                        }
                                    </div>
                                    <span style={{ height: '30px', fontSize: 'calc(14px + .15vw)' }}>{skill.name}</span>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <BottomBar
                leftButton={{
                    text: 'Projects',
                    onPress: () => props.setCurrentScreen('projects')
                }}
                middleButton={{
                    text: 'Home',
                    onPress: () => props.setCurrentScreen('home')
                }}
                rightButton={{
                    text: 'About',
                    onPress: () => props.setCurrentScreen('about')
                }}
            />
        </div >
    )
}