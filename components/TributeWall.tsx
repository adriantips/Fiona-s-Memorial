import React, { useState, useEffect } from 'react';
import { Tribute } from '../types';
import { getTributes, saveTribute } from '../services/storage';

const TributeWall: React.FC = () => {
  const [tributes, setTributes] = useState<Tribute[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    setTributes(getTributes());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newTribute: Tribute = {
      id: Date.now().toString(),
      author: name,
      message: message,
      date: new Date().toISOString().split('T')[0]
    };

    const updated = saveTribute(newTribute);
    setTributes(updated);
    setName('');
    setMessage('');
  };

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <section className="py-24 px-6 bg-stone-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl text-center text-stone-800 mb-16">Tribute Wall</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 h-fit sticky top-10">
            <h3 className="font-serif text-2xl text-stone-700 mb-6">Light a Candle</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-500 mb-1">Your Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded-md border border-stone-200 focus:border-stone-400 focus:ring-0 bg-stone-50"
                  placeholder="Friend of Fiona"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-500 mb-1">Message</label>
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 rounded-md border border-stone-200 focus:border-stone-400 focus:ring-0 bg-stone-50 h-32 resize-none"
                  placeholder="Share a thought..."
                />
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-stone-800 text-white rounded-md hover:bg-stone-700 transition-colors uppercase tracking-widest text-xs font-bold"
              >
                Post Tribute
              </button>
            </form>
          </div>

          {/* List */}
          <div className="space-y-6">
            {tributes.length === 0 && (
              <p className="text-center text-stone-400 italic py-12">
                No tributes yet. Be the first to light a candle.
              </p>
            )}
            
            {tributes.slice(0, visibleCount).map((tribute) => (
              <div key={tribute.id} className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 animate-[fadeIn_0.5s_ease-in-out]">
                <p className="text-stone-600 font-light italic mb-4">"{tribute.message}"</p>
                <div className="flex justify-between items-end border-t border-stone-100 pt-4">
                  <span className="text-stone-800 font-serif font-medium">{tribute.author}</span>
                  <span className="text-stone-400 text-xs">{tribute.date}</span>
                </div>
              </div>
            ))}

            {tributes.length > visibleCount && (
              <button 
                onClick={handleShowMore}
                className="w-full py-3 bg-stone-200 text-stone-600 rounded-lg hover:bg-stone-300 transition-colors text-sm font-semibold tracking-wide"
              >
                Show More Tributes
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TributeWall;
