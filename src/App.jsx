import { useState } from 'react';

import './App.css';
import CapsuleFilter from './components/CapsuleFilter';
import Hero from './components/Hero';
import Nav from './components/Navbar';
import Capsules from './components/Capsules';

function App() {
  return (
    <>
      <div className='main' />
      <div className='gradient' />
      <Nav />
      <Hero />
      <Capsules />
    </>
  );
}

export default App;
