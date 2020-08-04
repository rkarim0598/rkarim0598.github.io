import React from 'react';
import Home from './Views/Home';
import Experience from './Views/Experience';
import Contact from './Views/Contact';
import jingled from './assets/jingled.jpg';
import useRouter from './hooks/useRouter';
import ExperienceExpCard from './Components/ExperienceExpCard';
import experience from './data/experience.json';

function App() {
  const [currentScreen, setCurrentScreen] = useRouter('');

  return (
    <div className="root-container">
      <Home
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
      />
      {currentScreen.split('/')[0] === 'experience' ?
        currentScreen.split('/')[1] ?
          <ExperienceExpCard setCurrentScreen={setCurrentScreen} exp={experience.filter(e => e.id === currentScreen.split('/')[1])[0]} /> :
          <Experience
            setCurrentScreen={setCurrentScreen}
          /> :
        currentScreen === 'contact' ?
          <Contact goBack={() => setCurrentScreen('home')} /> :
          currentScreen === 'play' ?
            <div id="play" className="screen">
              <div style={{ height: '95%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={jingled} style={{ width: '100%' }} alt="You just got JINGLED" />
              </div>
              <button onClick={() => setCurrentScreen('home')} className="plain-button corner-back-button">{'Back >'}</button>
            </div> :
            <></>
      }
    </div>
  );
}

export default App;
