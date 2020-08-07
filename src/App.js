import React from 'react';
import Home from './Views/Home';
import Experience from './Views/Experience';
import Contact from './Views/Contact';
import jingled from './assets/jingled.jpg';
import useRouter from './hooks/useRouter';
import ExperienceExpCard from './Components/ExperienceExpCard';
import About from './Views/About';
import Projects from './Views/Projects';
import Skills from './Views/Skills';
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
          <Contact setCurrentScreen={setCurrentScreen} /> :
          currentScreen === 'projects' ?
            <Projects setCurrentScreen={setCurrentScreen} /> :
            currentScreen === 'skills' ?
              <Skills setCurrentScreen={setCurrentScreen} /> :
              currentScreen === 'about' ?
                <About setCurrentScreen={setCurrentScreen} /> :
                <></>
      }
    </div>
  );
}

export default App;
