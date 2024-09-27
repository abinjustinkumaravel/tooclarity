import React from 'react';
import Navbar from './components/Navbar';
import Countdown from './components/Countdown';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <Countdown />
      </main>
      <Footer />
    </div>
  );
};

export default App;
