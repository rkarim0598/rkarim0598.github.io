import React, { useState, useEffect } from 'react';
import PageHeader from '../Components/PageHeader';
import BottomBar from '../Components/BottomBar';
import RightChevron from '../Components/RightChevron';
import LeftChevron from '../Components/LeftChevron';
import AnimatedSquare from '../Components/AnimatedSquare';
import '../css/projects.css';
import link from '../assets/external-link.svg';
import git from '../assets/git.png';

const projects = [
    {
        "imgtype": "text",
        "name": "tiNDer",
        "abbr": "tiNDer",
        "built": "Spring '20, ND Adv. Databases Course",
        "tech": "VueJS, Node, GraphQL, OracleSQL",
        "repo": "https://github.com/rkarim0598/not-tiNDer",
        "contentType": "video",
        "video": "https://tube.cloud-libre.eu/videos/embed/9a71284c-a844-4503-9f97-38278fcc57d1",
        "description": "This two person project was created with the aim to make the college dating process easier, friendlier, and more effective. Users take a short personality test and fill out a general profile to get results best fit for them through our algorithm. After doing so, users are able to experience the classic swipe mechanics and match for either general or event-specific dating.  After a match is created, users can also chat with each other.  Check out the video for a quick demo!"
    },
    {
        "imgtype": "text",
        "name": "Silver Slugger",
        "abbr": "Silver Slugger",
        "built": "Spring '20, ND Intro to Data Science",
        "tech": "Python, Pandas, Fangraphs Data, Excel, Data Science",
        "contentType": "slides",
        "repo": "https://github.com/rkarim0598/SilverSlugger",
        "slides": "https://docs.google.com/presentation/d/e/2PACX-1vRxEFpXTStsYJTrCYtbCy-8C1e75Wt3cllQG9XTHhjYhZSQyM9Vrto9YM0eLpHkyDbNgcld_7T6WWmE/embed?start=false&loop=false&delayms=3000",
        "description": "This was our semester long project in the Data Science course I took.  We chose to try to predict MLB's Silver Slugger winners based on the last three years of player data.  We used numerous models, including KNN, Linear Regression, and SVR.  Check out the slides for more details if you're interested!"
    },
    {
        "imgtype": "text",
        "name": "Ethics Game",
        "abbr": "Ethics Game",
        "built": "Spring '20, ND Agile Course",
        "tech": "AngularJS, Django, Python, SQLite, AWS EC2",
        "contentType": "video",
        "video": "https://www.youtube.com/embed/NXGjxbPxLn4",
        "description": "I worked in a 5 person team on Ethics Game, which was a project started by a group the previous year that focuses on providing ethical dilemmas that computer science students might one day find themselves considering. We added the ability to add new ethical scenarios through the site and displaying a graphical representation of any given scenario to the user, as well as deploying the site and server to be used in production.  The project was done in an agile environment; we had sprints and sprint reviews, point estimation, etc."
    },
    {
        "imgtype": "text",
        "name": "B Minor Compiler",
        "abbr": "B Minor",
        "built": "Fall '19, ND Compilers Course",
        "tech": "C, x86, Flex, Bison",
        "description": "The semester long project in my compilers course involved writing a compiler for a language named B Minor.  The language included typing as well as type inference, along with many of the operations you can do in C.  I built out a pretty printer, type checker, and x86 code generator as part of the compiler.  If you'd like to see the code, just send me a message and I can get you access."
    },
    {
        "imgtype": "text",
        "name": "NP Compete",
        "abbr": "NP Compete",
        "built": "Fall '19, ND Hackathon",
        "tech": "VueJS, Firebase Firestore & Functions, Stripe",
        "contentType": "image",
        "image": "npc.png",
        "repo": "https://github.com/rkarim0598/tethical",
        "site": "https://np-compete.web.app/",
        "description": "NP Compete was created with the purpose of bringing more awareness to nonprofits around South Bend.  Inspired by the model of ND Day, a day long event that focuses on fundraising for ND dorms and clubs, NP Compete attempts to provide a fun and interactive experience while also raising money for many good causes.  Users could donate (through Stripe) and vote (through Twitter hashtags) for their desired nonprofits, as well as learn more about each nonprofit."
    },
    {
        "img": "gnaa.png",
        "name": "Ghana Need An Ambulance",
        "abbr": "GNAA",
        "built": "Fall '18, ND Hackathon",
        "tech": "VueJS, Firebase, Google Maps API",
        "contentType": "image",
        "image": "gnaa-homepage.png",
        "repo": "https://github.com/GhanaNeedAnAmbulance",
        "site": "https://gnaa-4e1a5.firebaseapp.com/",
        "description": "GNAA is a proof of concept cross platform solution created with the goal of helping increase transparency of the availability of hospitals in Ghana.  The final product consisted of a desktop app and a web app; I worked primarily on the web app.  This app was built in VueJS, and used Firebase to store our hospital data.  Users could view all the nearby hospitals and the number of beds available at each, as well as view hospital locations on a map and get instructions to each hospital."
    },
    {
        "imgtype": "text",
        "name": "Tethical Test",
        "abbr": "Tethical Test",
        "built": "Spring '19, ND Agile Course",
        "tech": "ReactJS",
        "contentType": "image",
        "image": "tt.png",
        "repo": "https://github.com/rkarim0598/agile-starter-proj",
        "site": "https://tethical-test.netlify.app/",
        "description": "The Tethical Test was created as an introductory project for a course covering Agile and other development methodologies.  This particular project sought to emulate Buzzfeed quizzes, but use a more serious subject.  Our app focuses on giving you possible ethical dilemmas that you might come across in the workplace.  Based on your responses, we generate your \"score\" in different categories and try to match you with a tech company similar to you.  The company profiles were created by the group through consensus, so take the matches with a grain of salt."
    },
    // {
    //     "img": "tethical.png",
    //     "name": "RoomND",
    //     "abbr": "RoomND",
    //     "built": "Fall blah",
    //     "description": "lsdkjfsl efjs ljeflsejflisejf lsejf"
    // },
    // {
    //     "img": "tethical.png",
    //     "name": "Hannah's House",
    //     "abbr": "HH",
    //     "description": "slkjf elsijef lsiejf sliejflsjefl sjlkdjf"
    // }
]

export default function Projects(props) {
    const [currIndex, setCurrIndex] = useState(null);
    const [iframeLoaded, setIframeLoaded] = useState(false);
    const [showList, setShowList] = useState(true);
    const currProj = projects[currIndex];

    useEffect(() => {

    })

    useEffect(() => {
        setIframeLoaded(false);
    }, [currIndex])

    return (
        <div className="screen">
            <PageHeader title={'My Projects'} />
            <div
                className="content-fade fadeIn"
                style={{
                    display: 'flex',
                    width: '95%',
                    maxWidth: '600px',
                    height: '80%',
                    flexDirection: 'row',
                }}
            >
                <div
                    style={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'column',
                        maxHeight: '100%',
                        overflowY: 'auto',
                        justifyContent: currIndex !== null ? 'space-between' : 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        padding: '5px',
                        fontSize: 'calc(14px + .15vw)',
                        textAlign: 'left'
                    }}
                >
                    {currIndex === null ?
                        <span style={{ textAlign: 'center' }}>Select a tile to learn more!</span> :
                        <>
                            <div
                                style={{
                                    zIndex: 5000,
                                    position: 'absolute',
                                    top: 5,
                                    right: 5,
                                    width: '15%',
                                    maxWidth: '70px',
                                    minWidth: '50px',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    // height: '10%',
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}
                            >
                                {currProj.repo &&
                                    <div style={{ width: 'calc(25px + 0.15vw)', paddingRight: currProj.site ? '5px' : '0px' }}>
                                        <a href={currProj.repo}>
                                            <img src={git} alt="git" width="100%" />
                                        </a>
                                    </div>
                                }
                                {currProj.site &&
                                    <div style={{ width: 'calc(25px + 0.15vw)' }}>
                                        <a href={currProj.site}>
                                            <img src={link} alt="link" width="100%" />
                                        </a>
                                    </div>
                                }
                            </div>
                            <span style={{ textAlign: 'center', fontSize: 'calc(20px + .15vw)' }}>{currProj.name}</span>
                            {currProj.contentType &&
                                <>
                                    {['video', 'slides', 'site'].includes(currProj.contentType) ?
                                        <div
                                            style={{
                                                position: 'relative',
                                                paddingBottom: '56.25%',
                                                paddingTop: '30px',
                                                height: 0,
                                                width: '100%',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            <iframe
                                                onLoad={() => setIframeLoaded(true)}
                                                title={`${currProj.name} ${currProj.video}`}
                                                width="100%"
                                                height="100%"
                                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', heigth: '100%' }}
                                                sandbox="allow-same-origin allow-scripts allow-popups"
                                                src={projects[currIndex][currProj.contentType]}
                                                frameBorder="0"
                                                allowFullScreen
                                                allow="full-screen; picture-in-picture; accelerometer; encrypted-media"
                                            />
                                            {!iframeLoaded && <div
                                                style={{
                                                    position: 'absolute',
                                                    zIndex: 1000,
                                                    width: '100%',
                                                    height: '100%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    backgroundColor: 'rgba(0, 0, 0, 0.9)'
                                                }}
                                            >
                                                <span>loading ...</span>
                                            </div>}
                                        </div>
                                        :
                                        <img
                                            style={{ width: '100%' }}
                                            alt={'yada'}
                                            src={require(`../assets/${currProj.image}`)}
                                        />
                                    }
                                </>
                            }
                            < div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{ lineHeight: '120%', fontStyle: 'italic' }}>{currProj.built}</span>
                                <span style={{ lineHeight: '120%', paddingBottom: '10px' }}>Built with {currProj.tech}</span>
                                <span style={{ lineHeight: '120%' }}>{currProj.description}</span>
                            </div>
                        </>
                    }
                </div>
                {showList ?
                    <div
                        style={{
                            display: 'flex',
                            maxHeight: '100%',
                            width: '120px',
                            flexDirection: 'column',
                        }}
                    >
                        <div
                            style={{
                                position: 'relative',
                                display: 'flex',
                                flex: 1,
                                width: '100%',
                                flexDirection: 'column',
                                overflowY: 'auto',
                                overflowX: 'hidden'
                            }}
                        >
                            <button
                                style={{
                                    zIndex: 5000,
                                    position: '-webkit-sticky',
                                    position: 'sticky',
                                    top: 0,
                                    display: 'flex',
                                    padding: 0,
                                    margin: 0,
                                    borderStyle: 'none',
                                    width: '100px',
                                    height: '5%',
                                    minHeight: '30px',
                                    marginBottom: '10px',
                                    backgroundColor: 'rgba(0, 0, 0, 1)',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    alignSelf: 'center',
                                    fontSize: 'calc(16px + .15vw)',
                                    color: 'white',
                                }}
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
                                            src={require(`../assets/${proj.img}`)}
                                            style={{ width: '100%', height: '100%' }}
                                        />
                                    }
                                </AnimatedSquare>
                            )}
                        </div>
                    </div>
                    :
                    <button
                        style={{
                            display: 'flex',
                            margin: 0,
                            padding: 0,
                            borderStyle: 'none',
                            width: '5vmin',
                            minWidth: '50px',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft: '10px'
                        }}
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