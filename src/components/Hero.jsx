import React from 'react';
import Spline from '@splinetool/react-spline';
import { Star, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/fTzRQ8pMbm1-BzvF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative h-full flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="bg-white/60 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-white/40">
            <div className="flex items-center gap-2 text-rose-500 mb-3">
              <Star className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold">Welcome to the Kaoruko Waguri Fan Garden</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-pink-500 via-purple-500 to-rose-400 text-transparent bg-clip-text">
              Soft Pastels, Warm Hearts, and Kaoruko’s Charm
            </h1>
            <p className="mt-3 sm:mt-4 text-slate-700 max-w-2xl">
              A cozy place to celebrate Kaoruko Waguri — her story, style, and sweet little moments. Explore a dreamy gallery, trivia, quotes, and even chat with a cute character bot.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#media" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500 text-white shadow hover:bg-pink-600 transition">
                <Heart className="w-4 h-4" />
                Explore Media
              </a>
              <a href="#quiz" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600 text-white shadow hover:bg-purple-700 transition">
                Take the Quiz
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white" />
    </section>
  );
}
