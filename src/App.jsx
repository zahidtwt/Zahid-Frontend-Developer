import { useState } from 'react';

import './App.css';
import Hero from './app/components/Hero';
import Nav from './app/components/Navbar';

function App() {
  return (
    <>
      <div className='main' />
      <div className='gradient' />
      <Nav />
      <Hero />
    </>
  );
}

export default App;
