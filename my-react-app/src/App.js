import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import Impact from './components/Impact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Impact />
      <Footer />
    </div>
  );
}

export default App;
