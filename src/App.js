import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Countdown from './components/Countdown';
import Footer from './components/Footer';
import Timeline from './components/TimeLine';
import BG from "../src/Assets/img/futuristic-moon-background.jpg"


const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
     <img src={BG} alt=".." className='absolute md:w-screen md:h-screen top-0 left-0 z-[-1]' />
      <Navbar />
      <main className="h-screen w-[100%] flex-grow flex items-center justify-center">
        <Countdown />
      </main>
      <About/>
      <Timeline/>
      <Footer />
    </div>
  );
};

export default App;
