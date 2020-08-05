import { useState, useEffect } from 'react';
import experience from '../data/experience.json';

export default function useRouter() {
    const [currentScreen, setCurrentScreen] = useState('');
    const [prevScreen, setPrevScreen] = useState('');
    const [mounted, setMounted] = useState(false);

    const initialDetermineScreen = () => {
        let root = window.location.href.split('/')[3];
        let nested = window.location.href.split('/')[4] || undefined;

        root = root === 'experience' ?
            'experience' :
            root === 'contact' ?
                'contact' :
                root === 'play' ?
                    'play' :
                    'home';

        if (root === 'experience') {
            if (nested !== undefined) {
                if (experience.map(exp => exp.id).includes(nested)) {
                    setCurrentScreen(`${root}/${nested}`)
                } else {
                    window.location.href = '/experience'
                }

            } else {
                setCurrentScreen('experience');
            }
        } else {
            if (nested !== undefined) {
                window.location.href = '/' + root;
            } else {
                setCurrentScreen(root);
            }
        }
    }

    const determineCurrentScreen = () => {
        let root = window.location.href.split('/')[3];

        root = root === 'experience' ?
            'experience' :
            root === 'contact' ?
                'contact' :
                root === 'play' ?
                    'play' :
                    'home';


        if (root === 'experience') {
            let nested = currentScreen.split('/')[1] || undefined;
            if (nested !== undefined) {
                setCurrentScreen(experience.map(exp => exp.id).includes(nested) ?
                    `${root}/${nested}` :
                    root
                );
            } else {
                setCurrentScreen('experience');
            }
        } else {
            setCurrentScreen(root);
        }
    }

    useEffect(() => {
        initialDetermineScreen();

        return window.addEventListener('popstate', (e) => {
            determineCurrentScreen();
        });
    }, [])

    useEffect(() => {
        const old = currentScreen;
        if (currentScreen.length && prevScreen !== currentScreen) {
            if (currentScreen.split('/')[0] === 'experience') {
                let nested = currentScreen.split('/')[1] || undefined;
                if (nested !== undefined) {
                    mounted &&
                        experience.map(exp => exp.id).includes(nested) &&
                        window.history.pushState({}, null, 'experience/' + nested);
                } else {
                    window.history.pushState({}, null, currentScreen);
                }
            } else {
                window.history.pushState({}, null, currentScreen);
            }
            setMounted(true);
            setPrevScreen(old);
        }
    }, [currentScreen, mounted, prevScreen])

    return [currentScreen, setCurrentScreen];
}