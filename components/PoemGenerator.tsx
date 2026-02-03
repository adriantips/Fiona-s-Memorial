import React, { useState, useEffect } from 'react';
import { generateComfortingPoem } from '../services/geminiService';
import { SparklesIcon } from './Icons';
import { getPoems, savePoem } from '../services/storage';
import { Poem } from '../types';

const PoemGenerator: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [generatedPoem, setGeneratedPoem] = useState('');
  const [loading, setLoading] = useState(false);
  const [savedPoems, setSavedPoems] = useState<Poem[]>([]);
  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    setSavedPoems(getPoems());
  }, []);

  const handleGenerate = async () => {
    setLoading(true);
    setGeneratedPoem('');
    const result = await generateComfortingPoem(topic || "Her favorite treats and warm cuddles");
    setGeneratedPoem(result);
    setLoading(false);
  };

  const handleSave = () => {
    if (!generatedPoem) return;
    const newPoem: Poem = {
      id: Date.now().toString(),
      text: generatedPoem,
      topic: topic || "General Memory",
      date: new Date().toISOString().split('T')[0]
    };
    const updated = savePoem(newPoem);
    setSavedPoems(updated);
    setGeneratedPoem(''); // Clear after saving
    setTopic('');
  };

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 2); // Show 2 more rows basically, or just more
  };

  return (
    <section className="py-20 px-6 bg-stone-100 border-t border-stone-200">
      <div className="max-w-4xl mx-auto">
        {/* Generator Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-6">
            <SparklesIcon className="w-6 h-6 text-stone-400" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-4">A Verse for Fiona</h2>
          <p className="text-stone-500 mb-8 font-light">
            Generate a unique poem to remember her by. You can add a specific memory to personalize it.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input 
              type="text" 
              placeholder="E.g., She loved parsley..." 
              className="flex-1 p-4 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-400 focus:outline-none bg-white font-sans"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              disabled={loading}
            />
            <button 
              onClick={handleGenerate}
              disabled={loading}
              className="px-8 py-4 bg-stone-800 text-stone-50 rounded-lg hover:bg-stone-700 transition-colors disabled:opacity-50 font-serif whitespace-nowrap"
            >
              {loading ? 'Writing...' : 'Write Poem'}
            </button>
          </div>

          {generatedPoem && (
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-stone-200 relative mt-8 animate-[fadeIn_0.5s_ease-in-out]">
              <div className="absolute top-4 left-4 text-4xl text-stone-200 font-serif leading-none">“</div>
              <p className="font-serif text-xl md:text-2xl text-stone-700 italic leading-relaxed whitespace-pre-line mb-6">
                {generatedPoem}
              </p>
              <div className="absolute bottom-4 right-4 text-4xl text-stone-200 font-serif leading-none">”</div>
              <button 
                onClick={handleSave}
                className="inline-flex items-center px-6 py-2 bg-stone-100 text-stone-700 hover:bg-stone-200 rounded-full text-sm font-medium transition-colors"
              >
                Save to Memorial
              </button>
            </div>
          )}
        </div>

        {/* Saved Poems Grid */}
        {savedPoems.length > 0 && (
          <div className="border-t border-stone-200 pt-16">
            <h3 className="font-serif text-2xl text-center text-stone-800 mb-8">Collected Verses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {savedPoems.slice(0, visibleCount).map((poem) => (
                <div key={poem.id} className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 flex flex-col justify-between">
                  <div className="relative">
                    <span className="text-stone-200 text-6xl font-serif absolute -top-4 -left-2 z-0 opacity-50">“</span>
                    <p className="font-serif text-lg text-stone-700 italic leading-relaxed whitespace-pre-line relative z-10 pl-4">
                      {poem.text}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-stone-50 flex justify-between items-center text-xs text-stone-400 uppercase tracking-widest">
                    <span>{poem.topic}</span>
                    <span>{poem.date}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {savedPoems.length > visibleCount && (
              <div className="text-center mt-10">
                <button 
                  onClick={handleShowMore}
                  className="px-8 py-3 bg-white border border-stone-300 text-stone-600 rounded-lg hover:bg-stone-50 transition-colors text-sm font-semibold tracking-wide"
                >
                  Show More Poems
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PoemGenerator;
