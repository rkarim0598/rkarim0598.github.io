import React, { useState, useRef } from 'react';
import useKeyDown from './hooks/useKeyDown';
import Home from './Components/Home';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const keyPressed = useKeyDown();
  const rootRef = useRef(null);

  return (
    <div className="root-container" ref={rootRef}>
      <Home
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
        keyPressed={keyPressed}
      />
      <div
        id="experience"
        className="hide screen"
        style={{
          position: 'absolute',
          zIndex: '50000',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          top: '50%'
        }}></div>
    </div>
  );
}

export default App;
