import { useState, useEffect } from 'react';

export default function useRouter() {
    const [currentScreen, setCurrentScreen] = useState('');

    const determineCurrentScreen = () => {
        const path = window.location.href.split('/')[3];

        setCurrentScreen(path === 'experience' ?
            'experience' :
            path === 'contact' ?
                'contact' :
                path === 'play' ?
                    'play' :
                    'home'
        );
    }

    useEffect(() => {
        determineCurrentScreen();

        return window.addEventListener('popstate', (e) => { 
            determineCurrentScreen(); 
        });
    }, [])

    useEffect(() => {
        window.history.pushState({}, null, currentScreen)
    }, [currentScreen])

    return [currentScreen, setCurrentScreen];
}