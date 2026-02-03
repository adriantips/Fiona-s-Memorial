import React from 'react';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Gallery from './components/Gallery';
import PoemGenerator from './components/PoemGenerator';
import TributeWall from './components/TributeWall';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-stone-200">
      <Hero />
      <Bio />
      <Gallery />
      <PoemGenerator />
      <TributeWall />
      
      <footer className="bg-stone-900 text-stone-400 py-12 text-center">
        <p className="font-serif italic text-lg">Rest in peace, sweet Fiona.</p>
        <p className="text-xs mt-4 uppercase tracking-widest opacity-50">2022 - 2026</p>
      </footer>
    </div>
  );
}

export default App;
