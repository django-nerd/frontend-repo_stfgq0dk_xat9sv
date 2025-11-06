import React from 'react';

export default function About() {
  return (
    <section id="about" className="rounded-3xl bg-white/70 backdrop-blur-sm border border-white/60 shadow-sm p-6 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">Who is Kaoruko Waguri?</h2>
      <p className="mt-4 text-slate-700 leading-relaxed">
        Kaoruko Waguri is celebrated for her gentle charm and warm presence. With a palette of purples, soft whites, and cozy creams, her style feels like a soft hug on a breezy day. She’s thoughtful, a little playful, and always hopeful — a character that shines with kindness.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl p-4 bg-gradient-to-br from-purple-50 to-rose-50 border border-purple-100">
          <p className="text-sm font-semibold text-purple-700">Personality</p>
          <ul className="mt-2 text-sm text-slate-700 list-disc list-inside">
            <li>Warm and caring</li>
            <li>Playful and curious</li>
            <li>Loyal to friends</li>
          </ul>
        </div>
        <div className="rounded-2xl p-4 bg-gradient-to-br from-rose-50 to-amber-50 border border-rose-100">
          <p className="text-sm font-semibold text-rose-700">Aesthetic</p>
          <ul className="mt-2 text-sm text-slate-700 list-disc list-inside">
            <li>Pastel purples & creams</li>
            <li>Soft gradients and glow</li>
            <li>Cozy textures</li>
          </ul>
        </div>
        <div className="rounded-2xl p-4 bg-gradient-to-br from-amber-50 to-purple-50 border border-amber-100">
          <p className="text-sm font-semibold text-amber-700">Vibes</p>
          <ul className="mt-2 text-sm text-slate-700 list-disc list-inside">
            <li>Gentle optimism</li>
            <li>Whimsical daydreams</li>
            <li>Sweet nostalgia</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
