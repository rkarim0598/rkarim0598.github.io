import React from 'react';
import PageHeader from '../Components/PageHeader';
import BottomBar from '../Components/BottomBar';

export default function Skills(props) {
    return (
        <div className="screen">
            <PageHeader title={'My Skills'} />
            <div className="content-fade fadeIn">
                Skills coming soon
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
        </div>
    )
}