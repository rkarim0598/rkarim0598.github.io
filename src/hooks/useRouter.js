import { useState, useEffect } from 'react';

export default function useRouter() {
    const [currentScreen, setCurrentScreen] = useState('');

    useEffect(() => {
        const path = window.location.href.split('/')[3];
        setCurrentScreen(path === 'experience' ?
            'experience' :
            ['contact', '#contact'].includes(path) ?
                'contact' :
                path === 'play' ?
                    'play' :
                    'home'
        );
    }, [])

    useEffect(() => {
        window.history.pushState({}, null, currentScreen)
    }, [currentScreen])

    return [currentScreen, setCurrentScreen];
}