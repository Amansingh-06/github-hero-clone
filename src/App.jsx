import React from 'react';
import Navbar from './components/Navbar';

import HeroSection from './pages/Home';

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection/>
      {/* <Home /> */}
    </div>
  );
};

export default App;
