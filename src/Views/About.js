import React from 'react';
import PageHeader from '../Components/PageHeader';
import BottomBar from '../Components/BottomBar';
import '../css/about.css';
import me from '../assets/me.jpeg';

export default function About(props) {
    return (
        <div className="screen">
            <PageHeader title={'About Me'} />
            <div className="about-container content-fade fadeIn">
                <img src={me} alt="me" style={{ paddingRight: '10px', float: 'left', width: '20vh', height: '20vh ' }} />
                <p style={{ fontSize: 'calc(16px + 0.15vw)', margin: 0, marginTop: '-5px', lineHeight: '150%' }}>
                    Hey there, hope you've been enjoying the site! My name is Rayyan Karim, 
                    and I'm a recent Computer Science graduate (Class of '20) from the University of Notre Dame. 
                    I am passionate about building software that improve peoples' lives. 
                    I have completed two software engineering internships and served as
                    the lead mobile developer on a student-built app called Eventurely. My internships focused on web dev (using ReactJS and VueJS),
                    while my time at Eventurely focused on mobile (React Native). 
                    In my free time, I enjoy reading (particularly science fiction), geeking out over Dune, telling everyone
                    I know the glories of Linux, working on side projects, and, of course, playing Breath of the Wild.
                    <br/><br/>
                    In case you're wondering, this site was built with ReactJS, using Create-React-App to bootstrap the site.
                    The site routing is done on the client side with my own little mini router (still a WIP). I grabbed the sans-serif
                    font from <a style={{ color: 'lightblue' }} href="https://www.reddit.com/r/zelda/comments/5txuba/breath_of_the_wild_ui_font/">this reddit post</a> 
                    &nbsp;and the fancy font from <a style={{ color: 'lightblue' }} href="http://artsyomni.com/hyliaserif">Artsy Omni's site</a>. The company images 
                    were all found on the company websites, and the majority of the icons come from <a style={{ color: 'lightblue' }} href="https://feathericons.com/">Feather</a>,
                    an open source collections of icons. Finally, I'm using <a style={{ color: 'lightblue' }} href="https://netlify.com">Netlify</a> to deploy the website builds and collect the form responses on the <a style={{ color: 'lightblue' }} href="/contact">contact</a> page.
                </p>
            </div>
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
                    text: 'Contact',
                    onPress: () => props.setCurrentScreen('contact')
                }}
            />
        </div>
    )
}