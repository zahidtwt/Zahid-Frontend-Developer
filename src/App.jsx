import { useState } from 'react';

import './App.css';
import Hero from './app/components/Hero';
import Nav from './app/components/Navbar';
import Rockets from './app/components/Rockets';

function App() {
  return (
    <>
      <div className='main' />
      <div className='gradient' />
      <Nav />
      <Hero />
      <Rockets />
    </>
  );
}

export default App;
