import { useState, useEffect } from 'react';

export default function useKeyDown(keyList = []) {
    const [keyPressed, setKeyPressed] = useState(null);

    function downHandler(e) {
        keyList.includes(e.keyCode) && setKeyPressed(e.keyCode);
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return keyPressed;
}