import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import MediaHub from './components/MediaHub.jsx';
import FunZone from './components/FunZone.jsx';
import ChatBot from './components/ChatBot.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-rose-50 to-white text-slate-800">
      <Hero />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 py-12">
        <About />
        <MediaHub />
        <FunZone />
        <ChatBot />
      </main>
      <footer className="py-8 text-center text-sm text-slate-500">
        Made with love for Kaoruko Waguri • Crafted in soft pastels
      </footer>
    </div>
  );
}
