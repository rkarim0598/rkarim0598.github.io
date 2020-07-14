import { useState, useEffect } from 'react';

export default function useKeyDown() {
    const [keyPressed, setKeyPressed] = useState(null);

    function downHandler(e) {
        setKeyPressed(e.keyCode);
    }

    function upHandler(e) {
        setKeyPressed(null);
    }
    
    useEffect(() => {
        document.addEventListener('keydown', downHandler);
        document.addEventListener('keyup', upHandler);

        return () => {
            document.removeEventListener('keydown', downHandler);
            document.removeEventListener('keydown', upHandler);
        }
    }, [])

    return keyPressed;
}