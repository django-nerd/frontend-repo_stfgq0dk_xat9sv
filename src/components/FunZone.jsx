import React, { useMemo, useState } from 'react';
import { Sparkles, Star, MessageCircleHeart } from 'lucide-react';

const QUIZ = [
  {
    q: "Which color best matches Kaoruko’s cozy vibe?",
    options: ["Neon green", "Pastel lavender", "Jet black"],
    a: 1,
  },
  {
    q: "What trait does Kaoruko radiate?",
    options: ["Grumpy energy", "Gentle optimism", "Chaos"],
    a: 1,
  },
  {
    q: "Perfect comfort accessory?",
    options: ["Spiky armor", "Warm scarf", "Fog machine"],
    a: 1,
  },
];

function QuizCard() {
  const [answers, setAnswers] = useState(Array(QUIZ.length).fill(null));
  const score = useMemo(() => answers.reduce((s, a, i) => (a === QUIZ[i].a ? s + 1 : s), 0), [answers]);
  const done = answers.every((a) => a !== null);
  return (
    <div id="quiz" className="rounded-2xl p-5 bg-gradient-to-br from-rose-50 to-purple-50 border border-purple-100">
      <div className="flex items-center gap-2 text-purple-700">
        <Sparkles className="w-4 h-4" />
        <p className="font-semibold">Kaoruko Cozy Quiz</p>
      </div>
      <div className="mt-4 space-y-4">
        {QUIZ.map((item, idx) => (
          <div key={idx} className="rounded-xl bg-white/70 p-4 border border-white">
            <p className="font-medium text-slate-800">{item.q}</p>
            <div className="mt-2 grid sm:grid-cols-3 gap-2">
              {item.options.map((opt, i) => (
                <button key={i} onClick={() => setAnswers((arr) => arr.map((v, k) => (k === idx ? i : v)))} className={`px-3 py-2 rounded-full text-sm border transition ${answers[idx] === i ? 'bg-purple-600 text-white border-purple-600' : 'bg-white text-slate-700 hover:border-purple-300'}`}>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      {done && (
        <div className="mt-4 flex items-center gap-2 text-purple-700">
          <Star className="w-4 h-4" />
          <p className="font-semibold">Score: {score}/{QUIZ.length} — {score === QUIZ.length ? 'Perfect pastel pro!' : 'So cute! Try again for a perfect score.'}</p>
        </div>
      )}
    </div>
  );
}

function Comments() {
  const [entries, setEntries] = useState([]);
  const [text, setText] = useState('');
  const [favCount, setFavCount] = useState(0);

  const addEntry = () => {
    if (!text.trim()) return;
    const entry = { id: Date.now(), text: text.trim() };
    setEntries((e) => [entry, ...e]);
    setText('');
  };

  return (
    <div className="rounded-2xl p-5 bg-white/70 border border-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-rose-600">
          <MessageCircleHeart className="w-4 h-4" />
          <p className="font-semibold">Fan Corner</p>
        </div>
        <button onClick={() => setFavCount((c) => c + 1)} className="px-3 py-1.5 rounded-full bg-pink-500 text-white text-xs hover:bg-pink-600">Favorite ({favCount})</button>
      </div>
      <div className="mt-3 flex gap-2">
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Leave a sweet note…" className="flex-1 px-3 py-2 rounded-xl border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-200 bg-white/80" />
        <button onClick={addEntry} className="px-4 rounded-xl bg-purple-600 text-white hover:bg-purple-700">Post</button>
      </div>
      <ul className="mt-4 space-y-2">
        {entries.length === 0 && <li className="text-sm text-slate-500">Be the first to leave a cozy comment.</li>}
        {entries.map((e) => (
          <li key={e.id} className="p-3 rounded-xl bg-gradient-to-r from-purple-50 to-rose-50 border border-purple-100 text-slate-700">
            {e.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function QuotesTrivia() {
  const quotes = [
    '"Even small kindness can glow like starlight."',
    '"Pastels are just hugs in color form."',
    '"Friends make every moment a little warmer."',
  ];
  const facts = [
    'Loves warm drinks with boba — cozy and cute!',
    'Prefers soft fabrics and gentle gradients in outfits.',
    'Collects tiny star charms as lucky tokens.',
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl p-5 bg-gradient-to-br from-amber-50 to-rose-50 border border-amber-100">
        <p className="font-semibold text-amber-700">Quotes & Moments</p>
        <ul className="mt-2 space-y-2 text-slate-700">
          {quotes.map((q, i) => (
            <li key={i} className="p-3 rounded-xl bg-white/70 border border-white">{q}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl p-5 bg-gradient-to-br from-purple-50 to-rose-50 border border-purple-100">
        <p className="font-semibold text-purple-700">Facts & Trivia</p>
        <ul className="mt-2 space-y-2 text-slate-700 list-disc list-inside">
          {facts.map((f, i) => (
            <li key={i} className="pl-1">{f}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function FunZone() {
  return (
    <section className="space-y-6">
      <QuotesTrivia />
      <QuizCard />
      <Comments />
    </section>
  );
}
