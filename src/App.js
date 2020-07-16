import React, { useState, useRef } from 'react';
import Home from './Views/Home';
import Experience from './Views/Experience';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const rootRef = useRef(null);

  return (
    <div className="root-container" ref={rootRef}>
      <Home
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
      />
      {currentScreen === 'experience' ?
        <Experience 
          setCurrentScreen={setCurrentScreen}
        /> :
        <></>
      }
    </div>
  );
}

export default App;
