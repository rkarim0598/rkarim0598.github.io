import React, { useState, useEffect } from 'react';
import PageHeader from '../Components/PageHeader';
import BottomBar from '../Components/BottomBar';
import RightChevron from '../Components/RightChevron';
import LeftChevron from '../Components/LeftChevron';
import AnimatedSquare from '../Components/AnimatedSquare';
import '../css/projects.css';
import link from '../assets/external-link.svg';
import git from '../assets/git.png';
import projects from '../data/projects.json';

export default function Projects(props) {
    const [currIndex, setCurrIndex] = useState(null);
    const [iframeLoaded, setIframeLoaded] = useState(false);
    const [showList, setShowList] = useState(true);
    const currProj = projects[currIndex];

    useEffect(() => {
        setIframeLoaded(false);
    }, [currIndex])

    return (
        <div className="screen">
            <PageHeader title={'My Projects'} />
            <div className="content-fade fadeIn proj-container">
                <div
                    className='main-content-container'
                    style={{
                        justifyContent: currIndex !== null ? 'space-between' : 'center',
                    }}
                >
                    {currIndex === null ?
                        <span style={{ textAlign: 'center' }}>Select a tile to learn more!</span> :
                        <>
                            <div className='top-links'>
                                {currProj.repo &&
                                    <div style={{ paddingRight: currProj.site ? '5px' : '0px' }}>
                                        <a href={currProj.repo} style={{ display: 'block' }}>
                                            <img
                                                src={git}
                                                alt="git"
                                                style={{ height: '100%', width: '100%', objectFit: 'contain' }}
                                            />
                                        </a>
                                    </div>
                                }
                                {currProj.site &&
                                    <div>
                                        <a href={currProj.site}>
                                            <img
                                                src={link}
                                                alt="link"
                                                style={{ height: '100%', width: '100%', objectFit: 'contain' }}
                                            />
                                        </a>
                                    </div>
                                }
                            </div>
                            <span className='proj-name'>{currProj.name}</span>
                            {currProj.contentType &&
                                <>
                                    {['video', 'slides', 'site'].includes(currProj.contentType) ?
                                        <div className='iframe-container'>
                                            <iframe
                                                onLoad={() => setIframeLoaded(true)}
                                                title={`${currProj.name} ${currProj.video}`}
                                                width="100%"
                                                height="100%"
                                                sandbox="allow-same-origin allow-scripts allow-popups"
                                                src={projects[currIndex][currProj.contentType]}
                                                frameBorder="0"
                                                allowFullScreen
                                                allow="full-screen; picture-in-picture; accelerometer; encrypted-media"
                                            />
                                            {!iframeLoaded && <div>
                                                <span>loading ...</span>
                                            </div>}
                                        </div>
                                        :
                                        <img
                                            style={{ width: '100%' }}
                                            alt={'yada'}
                                            src={require(`../assets/projects/content/${currProj.image}`)}
                                        />
                                    }
                                </>
                            }
                            <div className='bottom-text'>
                                <span style={{ fontStyle: 'italic' }}>{currProj.built}</span>
                                <span style={{ paddingBottom: '10px' }}>Built with {currProj.tech}</span>
                                <span>{currProj.description}</span>
                            </div>
                        </>
                    }
                </div>
                {showList ?
                    <div className='list-container'>
                        <div>
                            <button
                                onClick={() => setShowList(false)}
                            >
                                <span>Hide</span>
                                <div style={{ height: '100%', width: '15%' }}>
                                    <RightChevron />
                                </div>
                            </button>
                            {projects.map((proj, index) =>
                                <AnimatedSquare
                                    key={proj.name}
                                    style={{
                                        position: 'relative',
                                        minWidth: '100px',
                                        minHeight: '100px',
                                        marginBottom: '10px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                    onClick={() => setCurrIndex(index)}
                                >
                                    {proj.imgtype === 'text' ?
                                        <div className="proj-text-container" style={{ display: 'flex', height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', fontFamily: 'HyliaSerifBeta-Regular', fontSize: 'calc(20px + .15vw)', color: 'white' }}>{proj.name}</div> :
                                        <img
                                            className="proj-text-container"
                                            alt={proj.abbr}
                                            src={require(`../assets/projects/main/${proj.img}`)}
                                            style={{ width: '100%', height: '100%' }}
                                        />
                                    }
                                </AnimatedSquare>
                            )}
                        </div>
                    </div>
                    :
                    <button
                        onClick={() => setShowList(true)}
                    >
                        <div
                            style={{
                                width: '100%',
                                height: '50px',
                            }}
                        >
                            <LeftChevron />
                        </div>
                    </button>
                }
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