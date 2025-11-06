import React, { useEffect, useRef, useState } from 'react';
import { Send, Sparkles } from 'lucide-react';

const SUGGESTED = [
  'Hi Kaoruko! How are you today?',
  'What do you like to wear?',
  'Tell me something cozy!',
  'Share a cute quote!',
];

function botReply(msg) {
  const text = msg.toLowerCase();
  if (/(hello|hi|hey)/.test(text)) return 'Hii! I’m sipping boba and floating through a pastel day. How are you? ✨🥤';
  if (/wear|outfit|clothes/.test(text)) return 'Soft layers in lavender and cream — ribbons, cozy scarves, and gentle gradients!';
  if (/(cozy|comfort|warm)/.test(text)) return 'A warm drink, a fluffy blanket, and friends nearby. Cozy level: maximum! ☁️💜';
  if (/(quote|say|motivate|inspire)/.test(text)) return '“Even small kindness can glow like starlight.” ✨';
  if (/(favorite|like)/.test(text)) return 'I adore tiny star charms and pastel sunsets.';
  if (/(boba|tea|drink)/.test(text)) return 'Taro boba with a pink straw — cute and yummy!';
  return 'Hehe, that’s adorable! Tell me more~ 🌸';
}

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { id: 1, role: 'bot', text: 'Yay! You found me! I’m Kaoruko-bot. Ask me anything cute and cozy. 💖' },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const send = (content) => {
    const text = (content ?? input).trim();
    if (!text) return;
    const userMsg = { id: Date.now(), role: 'user', text };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      const reply = botReply(text);
      setMessages((m) => [...m, { id: Date.now() + 1, role: 'bot', text: reply }]);
      setTyping(false);
    }, 500 + Math.random() * 700);
  };

  return (
    <section id="chat" className="rounded-3xl bg-white/70 backdrop-blur-sm border border-white/60 shadow-sm p-0 overflow-hidden">
      <div className="flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <Sparkles className="w-4 h-4" />
        <h2 className="text-lg font-semibold">Chat with Kaoruko</h2>
      </div>

      <div className="h-80 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-purple-50/60 to-rose-50/60">
        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`${m.role === 'user' ? 'bg-purple-600 text-white rounded-l-2xl rounded-tr-2xl' : 'bg-white/90 text-slate-800 rounded-r-2xl rounded-tl-2xl'} px-4 py-2 max-w-[80%] border ${m.role === 'user' ? 'border-purple-600' : 'border-white'}`}>
              {m.text}
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex justify-start">
            <div className="px-4 py-2 bg-white/90 rounded-r-2xl rounded-tl-2xl border border-white text-slate-500">
              typing…
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="p-4 border-t border-white/70 bg-white/60">
        <div className="flex flex-wrap gap-2 mb-3">
          {SUGGESTED.map((s, i) => (
            <button key={i} onClick={() => send(s)} className="px-3 py-1.5 rounded-full text-xs bg-rose-100 text-rose-700 hover:bg-rose-200 border border-rose-200">
              {s}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && send()} placeholder="Ask something sweet…" className="flex-1 px-3 py-2 rounded-xl border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-200 bg-white/80" />
          <button onClick={() => send()} className="px-4 rounded-xl bg-pink-500 text-white hover:bg-pink-600 flex items-center gap-2">
            <Send className="w-4 h-4" /> Send
          </button>
        </div>
      </div>
    </section>
  );
}
