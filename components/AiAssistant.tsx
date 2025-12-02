import React, { useState } from 'react';
import { Bot, Send, Loader2 } from 'lucide-react';
import { TEXTS } from '../constants';
import { Language } from '../types';
import { askTradeAssistant } from '../services/geminiService';

interface AiAssistantProps {
  lang: Language;
}

const AiAssistant: React.FC<AiAssistantProps> = ({ lang }) => {
  const t = TEXTS[lang];
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse(null);

    const result = await askTradeAssistant(query, lang);
    setResponse(result);
    setLoading(false);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="bg-yuan-red/20 p-4 rounded-full mb-4 animate-pulse">
            <Bot className="w-8 h-8 text-yuan-red" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{t.ai_title}</h2>
          <p className="text-gray-400 max-w-xl">{t.ai_subtitle}</p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-2xl">
          <form onSubmit={handleAsk} className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.ai_placeholder}
              className="w-full bg-gray-900/80 border border-gray-600 rounded-xl px-6 py-4 pr-32 focus:border-yuan-red focus:ring-1 focus:ring-yuan-red outline-none text-white placeholder-gray-500 transition-all"
            />
            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="absolute right-2 top-2 bottom-2 bg-yuan-red hover:bg-red-700 text-white font-medium px-4 rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              <span className="hidden sm:inline">{t.ai_button}</span>
            </button>
          </form>

          {response && (
            <div className="mt-6 p-6 bg-gray-900 rounded-xl border border-gray-700 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="flex gap-3">
                <div className="shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                    <span className="text-[10px] font-bold">AI</span>
                  </div>
                </div>
                <div className="prose prose-invert prose-sm max-w-none">
                   <p className="text-gray-200 leading-relaxed">{response}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AiAssistant;